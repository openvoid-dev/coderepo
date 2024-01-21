package controllers

import (
	"fmt"
	"server/database"
	"server/models"

	"github.com/gofiber/fiber/v2"
)

type ResourceCategoryResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
}

type ResourceCategoryWithResourcesResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Slug        string `json:"slug"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
	Resources   []struct {
		Name        string `json:"name"`
		Link        string `json:"link"`
		Description string `json:"description"`
	} `json:"resources"`
}
type ResourceResponse struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Link        string `json:"link"`
	Description string `json:"description"`
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
			Icon:        resourceCategory.Icon,
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
		Icon:        resourceCategory.Icon,
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

func GetAllResources(c *fiber.Ctx) error {
	// * Retrieve all resources from the database
	var resources []models.Resource
	if err := database.Database.Db.Find(&resources).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Error retrieving resources"})
	}

	// * Create the response structure
	var resourcesResponse []ResourceResponse
	for _, resource := range resources {
		resourceResponse := ResourceResponse{
			ID:          resource.ID,
			Name:        resource.Name,
			Link:        resource.Link,
			Description: resource.Description,
		}
		resourcesResponse = append(resourcesResponse, resourceResponse)
	}

	// * Return the resources as JSON
	fmt.Println("Get all resources")
	return c.Status(fiber.StatusAccepted).JSON(resourcesResponse)
}
