package models

import "time"

type User struct {
	ID        uint `json:"id" gorm:"primaryKey"`
	CreatedAt time.Time
	Email     string `json:"email"`
	Password  string `json:"password"`
	Username  string `json:"username"`
}
