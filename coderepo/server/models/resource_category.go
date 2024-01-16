package models

import "gorm.io/gorm"

type ResourceCategory struct {
	gorm.Model
	Name        string `gorm:"not null"`
	Description string
	Slug        string     `gorm:"unique;not null"`
	Icon        string     `gorm:"not null"` // Store the icon name as a string
	Resources   []Resource `gorm:"foreignKey:CategoryID"`
}
