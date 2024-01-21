package routes

import (
	"server/controllers"

	"github.com/gofiber/fiber/v2"
)

func ResourceRoutes(app *fiber.App) {
	app.Get("/api/resources", controllers.GetAllResourceCategories)
	app.Get("/api/resources/all", controllers.GetAllResources)
	app.Get("/api/resources/:slug", controllers.GetResourceCategoryBySlug)
}
