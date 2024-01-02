package controllers

import (
	"server/database"
	"server/models"

	"github.com/gofiber/fiber/v2"
)

type ResourceCategoryResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
}

type ResourceCategoryWithResourcesResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Resources   []struct {
		Name        string `json:"name"`
		Link        string `json:"link"`
		Description string `json:"description"`
	} `json:"resources"`
}

func GetAllResourceCategories(c *fiber.Ctx) error {
	// * Retrieve all resource categories from the database
	var resourceCategories []models.ResourceCategory
	if err := database.Database.Db.Find(&resourceCategories).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error Error retrieving resources"})
	}

	// * Create the response structure
	var resourceCategoriesResponse []ResourceCategoryResponse
	for _, resourceCategory := range resourceCategories {
		resourceCategoryResponse := ResourceCategoryResponse{
			ID:          resourceCategory.ID,
			Name:        resourceCategory.Name,
			Slug:        resourceCategory.Slug,
			Description: resourceCategory.Description,
		}
		resourceCategoriesResponse = append(resourceCategoriesResponse, resourceCategoryResponse)
	}

	// * Return the resource categories as JSON
	return c.Status(fiber.StatusAccepted).JSON(resourceCategoriesResponse)
}

func GetResourceCategoryBySlug(c *fiber.Ctx) error {
	// * Parse the slug from the URL paramater
	resourceCategorySlug := c.Params("slug")

	// * Retrieve the resource category & its resources from the database
	var resourceCategory models.ResourceCategory
	if err := database.Database.Db.Preload("Resources").Where("slug = ?", resourceCategorySlug).First(&resourceCategory).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Resource category not found"})
	}

	// * Create the response structure
	resourceCategoryResponse := ResourceCategoryWithResourcesResponse{
		ID:          resourceCategory.ID,
		Name:        resourceCategory.Name,
		Slug:        resourceCategory.Slug,
		Description: resourceCategory.Description,
	}
	for _, resource := range resourceCategory.Resources {
		resourceCategoryResponse.Resources = append(resourceCategoryResponse.Resources, struct {
			Name        string `json:"name"`
			Link        string `json:"link"`
			Description string `json:"description"`
		}{
			Name:        resource.Name,
			Link:        resource.Link,
			Description: resource.Description,
		})
	}

	// * Return the resource category as JSON
	return c.Status(fiber.StatusAccepted).JSON(resourceCategoryResponse)
}
