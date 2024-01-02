package models

import "gorm.io/gorm"

type Resource struct {
	gorm.Model
	Name        string           `gorm:"not null"`
	Link        string           `gorm:"not null"`
	Description string           `gorm:"not null"`
	CategoryID  uint             // Foreign key to ResourceCategory
	Category    ResourceCategory `gorm:"foreignKey:CategoryID"`
}
