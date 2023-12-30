package routes

import (
	"github.com/catalinfl/market/handlers"
	"github.com/gofiber/fiber/v2"
)

func Users(api *fiber.App) {

	router := api.Group("/api/users")

	router.Get("/", handlers.GetUsers)

}
