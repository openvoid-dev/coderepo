// routes.go
package routes

import (
	"github.com/AntonioObra/coderepo/controllers"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	router.GET("/", controllers.Home)
	router.GET("/api/users", controllers.GetUsers)
	router.GET("/api/users/:id", controllers.GetUserByID)
	router.POST("/api/users", controllers.CreateUser)
	router.PUT("/api/users/:id", controllers.UpdateUser)
	router.DELETE("/api/users/:id", controllers.DeleteUser)
}
