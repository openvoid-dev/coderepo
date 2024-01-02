package routes

import (
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

// * Guide endpoints
func GuideRoutes(app *fiber.App) {
	app.Get("/api/guides/:slug", controllers.GetGuide)
	app.Get("/api/guides", controllers.GetAllGuides)
	app.Post("/api/guides", controllers.CreateGuide)
}
