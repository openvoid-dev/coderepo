package models

import "time"

type Order struct {
	ID           uint `json:"id" gorm:"primaryKey"`
	CreatedAt    time.Time
	ProductRefer int     `json:"productId"`
	Product      Product `gorm:"foreignKey:ProductRefer"`
	UserRefer    int     `json:"userId"`
	User         User    `gorm:"foreignKey:UserRefer"`
}
