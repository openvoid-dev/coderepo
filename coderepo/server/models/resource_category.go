package models

import "gorm.io/gorm"

type ResourceCategory struct {
	gorm.Model
	Name        string `gorm:"not null"`
	Description string
	Slug        string     `gorm:"unique;not null"`
	Resources   []Resource `gorm:"foreignKey:CategoryID"`
}
