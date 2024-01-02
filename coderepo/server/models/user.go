package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email    string `json:"email"`
	Password string `json:"password"`
	Username string `json:"username"`
}
