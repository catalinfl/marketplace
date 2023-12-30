package database

import (
	"fmt"
	"os"

	"github.com/catalinfl/market/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Database *gorm.DB

func Connect() {
	url := os.Getenv("DATABASE_URL")

	connectDB, err := gorm.Open(postgres.Open(url), &gorm.Config{})

	connectDB.AutoMigrate(&models.User{})

	if err != nil {
		fmt.Println("Not working")
	}

	fmt.Println("database working")

	Database = connectDB
}
