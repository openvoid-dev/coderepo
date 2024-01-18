package controllers

import (
	"crypto/rand"
	"crypto/rsa"
	"fmt"
	"log"
	"server/database"
	"server/models"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// ! JWT secret key (change this to a strong, random key in production)
var jwtPrivateKey *rsa.PrivateKey

func init() {
	// Generate a temporary RSA private key for demonstration purposes
	privateKey, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		log.Fatal("Error generating RSA private key:", err)
	}

	jwtPrivateKey = privateKey
}

// * Create a user struct to hold the request body data
type GetCurrentUserResponse struct {
	ID        uint      `json:"id"`
	Email     string    `json:"email"`
	Username  string    `json:"username"`
	UserRole  string    `json:"userRole"`
	CreatedAt time.Time `json:"createdAt"`
}

// * Function to handle the /api/users/:email endpoint, which is used to retrieve the current user
func GetCurrentUser(c *fiber.Ctx) error {
	// Get the user email from the URL
	email := c.Params("email")

	//  // Authenticate the user - validate the token
	//  user, err := authenticateUser(c)
	//  if err != nil {
	// 	 // Authentication failed
	// 	 return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
	// 		 "error": "Unauthorized",
	// 	 })
	//  }

	// * Retrieve the user from the database based on the provided email
	var existingUser models.User
	result := database.Database.Db.Where("email = ?", email).First(&existingUser)

	// * Check if the record was found
	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			// User with the provided email not found
			fmt.Println("User not found with the provided email:", email)
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"error": "User not found",
			})
		}

		// Handle other errors
		fmt.Println("Error querying database:", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error querying database",
		})
	}

	// * Create the response structure
	var userResponse GetCurrentUserResponse
	userResponse.ID = existingUser.ID
	userResponse.Email = existingUser.Email
	userResponse.Username = existingUser.Username
	userResponse.UserRole = existingUser.UserRole
	userResponse.CreatedAt = existingUser.CreatedAt

	// * User found
	fmt.Println("User found:", existingUser.Username)
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "User found",
		"user":    userResponse,
	})
}

// * Function to handle the /api/users/signup endpoint, which is used to create a new user
func SignUp(c *fiber.Ctx) error {
	// Parse request JSON
	var newUser models.User

	if err := c.BodyParser(&newUser); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid JSON format"})
	}

	// * Check if the required fields are present
	if newUser.Email == "" || newUser.Password == "" || newUser.Username == "" {
		fmt.Println("Missing required fields in the request body")
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields in the request body",
		})
	}

	// * Check if the username or email already exists
	var existingUser models.User
	if userExists := database.Database.Db.Select("id, email, username").Where("email = ? OR username = ?", newUser.Email, newUser.Username).First(&existingUser); userExists.Error != gorm.ErrRecordNotFound {
		log.Println("User already exists")
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"error": "User already exists",
		})
	}

	// * Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("Error hashing password:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error hashing password",
		})
	}

	// Use the hashed password in the User struct
	newUser.Password = string(hashedPassword)

	//  Set default user role to "user"
	newUser.UserRole = "user"

	// * Create the user
	if err := database.Database.Db.Create(&newUser).Error; err != nil {
		fmt.Println("Error creating user:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error creating user",
		})
	}

	fmt.Println("User created successfully:", newUser.Username)
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User created successfully",
	})
}

// * Function to handle the /api/users/signin endpoint, which is used to authenticate a user
func SignIn(c *fiber.Ctx) error {
	// Parse request JSON
	var signInUser struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&signInUser); err != nil {
		fmt.Println("Error parsing request JSON:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid JSON format",
		})
	}

	// * Check if the required fields are present
	if signInUser.Email == "" || signInUser.Password == "" {
		fmt.Println("Missing required fields in the request body")
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Missing required fields in the request body",
		})
	}

	// * Retrieve the user from the database based on the provided email
	var existingUser models.User
	result := database.Database.Db.Where("email = ?", signInUser.Email).First(&existingUser)

	// * Check if the record was found
	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			// User with the provided email not found
			fmt.Println("User not found with the provided email:", signInUser.Email)
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Invalid credentials",
			})
		}

		// Handle other errors
		fmt.Println("Error querying database:", result.Error)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error querying database",
		})
	}

	// * Compare the provided password with the hashed password from the database
	err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(signInUser.Password))
	if err != nil {
		// Passwords do not match
		fmt.Println("Invalid password for the user:", signInUser.Email)
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid credentials",
		})
	}

	// * Create a JWT token
	token, err := generateToken(existingUser.ID)
	if err != nil {
		fmt.Println("Error generating JWT token:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Error generating JWT token",
		})
	}

	// Remove password hash from the user object
	existingUser.Password = ""

	// * Authentication successful
	fmt.Println("User authenticated successfully:", existingUser.Username)
	fmt.Println("Full user", existingUser)
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "User authenticated successfully",
		"user":    existingUser,
		"token":   token,
	})
}

func generateToken(userID uint) (string, error) {
	// Create the token
	token := jwt.New(jwt.SigningMethodRS256)

	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["sub"] = userID
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix() // Token expires in 24 hours

	// Sign the token with the RSA private key
	tokenString, err := token.SignedString(jwtPrivateKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
