package controllers

import (
	"server/database"
	"server/models"
	"time"

	"github.com/gofiber/fiber/v2"
)

// * GuideResponse represents the response structure for a guide
type GuideResponse struct {
	ID        uint      `json:"id"`
	CreatedAt time.Time `json:"createdAt"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	Slug      string    `json:"slug"`
	Image     string    `json:"image"`
	User      struct {
		ID       uint   `json:"id"`
		Username string `json:"username"`
	} `json:"author"`
}

func GetGuide(c *fiber.Ctx) error {
	// * Parse the slug from the URL parameter
	guideSlug := c.Params("slug")

	// * Retrieve the guide from the database
	var guide models.Guide
	if err := database.Database.Db.Preload("Author").Where("slug = ?", guideSlug).First(&guide).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Guide not found"})
	}

	// * Create the response structure
	guideResponse := GuideResponse{
		ID:        guide.ID,
		CreatedAt: guide.CreatedAt,
		Title:     guide.Title,
		Content:   guide.Content,
		Slug:      guide.Slug,
		Image:     guide.Image,
	}
	guideResponse.User.ID = guide.Author.ID
	guideResponse.User.Username = guide.Author.Username

	// * Return the guide as JSON
	return c.Status(fiber.StatusAccepted).JSON(guideResponse)
}

func GetAllGuides(c *fiber.Ctx) error {
	// * Retrieve all guides from the database
	var guides []models.Guide
	if err := database.Database.Db.Preload("Author").Find(&guides).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error retrieving guides"})
	}

	// * Create the response structure
	var guidesResponse []GuideResponse
	for _, guide := range guides {
		guideResponse := GuideResponse{
			ID:        guide.ID,
			CreatedAt: guide.CreatedAt,
			Title:     guide.Title,
			Content:   guide.Content,
			Slug:      guide.Slug,
			Image:     guide.Image,
		}
		guideResponse.User.ID = guide.Author.ID
		guideResponse.User.Username = guide.Author.Username

		guidesResponse = append(guidesResponse, guideResponse)
	}

	// * Return the guides as JSON
	return c.Status(fiber.StatusAccepted).JSON(guidesResponse)
}

// TODO: Create CreateGuide controller
func CreateGuide(c *fiber.Ctx) error {
	return nil
}
