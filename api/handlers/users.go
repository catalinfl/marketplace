package handlers

import (
	"fmt"

	"github.com/catalinfl/market/database"
	"github.com/catalinfl/market/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func GetUsers(c *fiber.Ctx) error {

	var users []models.User

	database.Database.Find(&users)

	return c.JSON(users)
}

func CreateUser(c *fiber.Ctx) error {

	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	hash, err := HashPassword(user.Password)

	if err != nil {
		return c.JSON(err)
	}

	database.Database.Create(&models.User{
		Password: hash,
		ID:       user.ID,
		Email:    user.Email,
		Name:     user.Name,
	})

	return c.JSON(&user)
}

func Login(c *fiber.Ctx) error {
	var user models.User

	if err := c.BodyParser(&user); err != nil {
		return err
	}

	var dbUser models.User

	database.Database.Where("name = ?", user.Name).First(&dbUser)

	if dbUser.ID == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{"message": "msg not found"})
	}

	if err := CheckPasswordHash(user.Password, dbUser.Password); err {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{"message": "incorrect password"})
	}

	return c.JSON(dbUser)

}

func HashPassword(password string) (string, error) {

	if password == "" || len(password) > 72 {
		return "", fmt.Errorf("invalid password")
	}

	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))

	return err != nil
}
