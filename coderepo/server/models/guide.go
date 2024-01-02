package models

import (
	"github.com/gosimple/slug"
	"gorm.io/gorm"
)

type Guide struct {
	gorm.Model
	Title   string `gorm:"not null"`
	Content string `gorm:"not null"`
	Slug    string `gorm:"unique;not null"`
	Image   string `gorm:"not null"` // Image URL
	Author  User   `gorm:"foreignKey:UserID"`
	UserID  uint   `json:"-"`
}

// * BeforeCreate hook to generate a slug before creating a new guide
func (guide *Guide) BeforeCreate(tx *gorm.DB) error {
	guide.Slug = slug.Make(guide.Title)
	return nil
}
