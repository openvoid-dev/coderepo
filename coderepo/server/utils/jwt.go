package utils

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

var secretKey = []byte("your-secret-key") // TODO: Replace with your actual secret key

type CustomClaims struct {
	UserEmail string `json:"userEmail"`
	jwt.StandardClaims
}

// ? Generate a token for protected routes, with a 1 hour expiration time, and the user's email as the payload
// ? This function is currently not used in this project, but it's here just in case
// func GenerateProtectedRouteToken(userEmail string) (string, error) {
// 	claims := CustomClaims{
// 		UserEmail: userEmail,
// 		StandardClaims: jwt.StandardClaims{
// 			ExpiresAt: time.Now().Add(time.Hour).Unix(), // * Token expires in 1 hour
// 		},
// 	}

// 	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

// 	return token.SignedString(secretKey)
// }

func VerifyProtectedRouteToken(c *fiber.Ctx) error {
	// Check if the token is present
	if len(c.Get("Authorization")) == 0 {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Unauthorized"})
	}

	tokenString := c.Get("Authorization")[7:] // * Remove the "Bearer " prefix

	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Unauthorized"})
	}

	if !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"error": "Unauthorized"})
	}

	claims, ok := token.Claims.(*CustomClaims)
	if !ok {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	c.Locals("userEmail", claims.UserEmail)
	return c.Next()
}
