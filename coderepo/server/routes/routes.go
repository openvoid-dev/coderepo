package routes

import (
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	// * User endpoints
	app.Post("/api/users/signup", controllers.SignUp)
	app.Post("/api/users/signin", controllers.SignIn)
}
