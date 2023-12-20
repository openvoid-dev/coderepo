// controllers.go
package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Hello World"})
}

func GetUsers(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Get all users"})
}

func GetUserByID(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "Get user by ID", "id": id})
}

func CreateUser(c *gin.Context) {
	// Implement logic to create a user
	c.JSON(http.StatusCreated, gin.H{"message": "Create user"})
}

func UpdateUser(c *gin.Context) {
	id := c.Param("id")
	// Implement logic to update user by ID
	c.JSON(http.StatusOK, gin.H{"message": "Update user", "id": id})
}

func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	// Implement logic to delete user by ID
	c.JSON(http.StatusOK, gin.H{"message": "Delete user", "id": id})
}
