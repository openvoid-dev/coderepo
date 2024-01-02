package main

import (
	"log"
	"server/database"
	"server/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	database.ConnectDb()
	app := fiber.New()

	// * Setup routes
	routes.UserRoutes(app)
	routes.GuideRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
