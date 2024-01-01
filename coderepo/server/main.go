package main

import (
	"log"
	"server/database"

	"github.com/gofiber/fiber/v2"
)

func welcome(c *fiber.Ctx) error {
	return c.SendString("Welcome to my awesome APIresi!")
}

func main() {
	database.ConnectDb()
	app := fiber.New()

	app.Get("/api", welcome)

	log.Fatal(app.Listen(":8080"))
}
