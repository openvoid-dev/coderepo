package routes

import (
	"server/controllers"
	"server/utils"

	"github.com/gofiber/fiber/v2"
)

// * User endpoints
func UserRoutes(app *fiber.App) {
	app.Get("/api/users/:email", utils.VerifyProtectedRouteToken, controllers.GetCurrentUser)
	app.Post("/api/users/signup", controllers.SignUp)
	app.Post("/api/users/signin", controllers.SignIn)
}
