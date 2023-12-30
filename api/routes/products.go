package routes

import (
	"github.com/catalinfl/market/handlers"
	"github.com/gofiber/fiber/v2"
)

func Products(api *fiber.App) {

	router := api.Group("/api/products")

	router.Get("/", handlers.GetProducts)

}
