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

	routes.SetupRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
