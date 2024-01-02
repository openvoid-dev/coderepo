package routes

import (
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

// * User endpoints
func UserRoutes(app *fiber.App) {
	app.Post("/api/users/signup", controllers.SignUp)
	app.Post("/api/users/signin", controllers.SignIn)
}
