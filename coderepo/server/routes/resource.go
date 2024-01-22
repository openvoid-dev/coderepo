package routes

import (
	"server/controllers"
	"server/utils"

	"github.com/gofiber/fiber/v2"
)

func ResourceRoutes(app *fiber.App) {
	app.Get("/api/resources", controllers.GetAllResourceCategories)
	app.Get("/api/resources/all", controllers.GetAllResources)
	app.Get("/api/resources/:slug", controllers.GetResourceByCategorySlug)
	app.Get("/api/resources/categories/:slug", controllers.GetResourceCategoryBySlug)
	app.Post("/api/resources/categories/add", utils.VerifyProtectedRouteToken, controllers.CreateResourceCategory)
}
