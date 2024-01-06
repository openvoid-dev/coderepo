package main

import (
	"log"
	"server/database"
	"server/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	// * Enable CORS for all routes
	app.Use(cors.New())

	// * Setup routes
	routes.UserRoutes(app)
	routes.GuideRoutes(app)
	routes.ResourceRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
