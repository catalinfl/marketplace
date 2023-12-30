package handlers

import (
	"github.com/catalinfl/market/database"
	"github.com/catalinfl/market/models"
	"github.com/gofiber/fiber/v2"
)

func GetUsers(c *fiber.Ctx) error {
	var users []models.User

	database.Database.Find(&users)

	return c.JSON(users)
}
