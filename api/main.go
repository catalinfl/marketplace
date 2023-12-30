package main

import (
	"log"

	"github.com/catalinfl/market/database"
	"github.com/catalinfl/market/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	app := fiber.New()

	err := godotenv.Load()

	if err != nil {
		log.Default().Println("Error loading .env file")
	}

	database.Connect()

	routes.Products(app)
	routes.Users(app)

	app.Listen(":3000")

}
