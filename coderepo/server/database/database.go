package database

import (
	"log"
	"os"
	"server/models"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DbInstance struct {
	Db *gorm.DB
}

var Database DbInstance

func ConnectDb() {
	// * Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	// * Retrieve environment variables
	supabaseHost := os.Getenv("SUPABASE_HOST")
	supabaseUser := os.Getenv("SUPABASE_USER")
	supabasePassword := os.Getenv("SUPABASE_PASSWORD")
	supabaseDB := os.Getenv("SUPABASE_DB")
	supabasePort := os.Getenv("SUPABASE_PORT")
	supabaseTimezone := os.Getenv("SUPABASE_TIMEZONE")

	// * Construct the DSN
	dsn := "host=" + supabaseHost + " user=" + supabaseUser + " password=" + supabasePassword + " dbname=" + supabaseDB + " port=" + supabasePort + " sslmode=require TimeZone=" + supabaseTimezone

	// * Set up Gorm with Supabase dialect
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database! \n", err.Error())
		os.Exit(2)
	}

	log.Println("Connected to database successfully!")
	db.Logger = logger.Default.LogMode(logger.Info)
	log.Println("Running migrations")

	// * Auto migrations
	db.AutoMigrate(&models.User{}, &models.Product{}, &models.Order{})

	Database = DbInstance{Db: db}
}
