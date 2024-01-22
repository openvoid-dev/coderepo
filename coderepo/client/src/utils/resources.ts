import {
    ResourceCategoryAddNew,
    ResourcesBySlugResult,
} from "@/types/resources";
import { generateToken } from "@/utils/jwt";
import { getSession } from "next-auth/react";

export const getAllResourceCategories = async () => {
    const response = await fetch(`http://localhost:8080/api/resources`);

    return response.json();
};

export const getResourcesBySlug = async (
    slug: string
): Promise<ResourcesBySlugResult> => {
    const response = await fetch(`http://localhost:8080/api/resources/${slug}`);

    const { resources, ...resourceCategory } = await response.json();

    return { resources, resourceCategory };
};

export const getAllResources = async () => {
    const response = await fetch(`http://localhost:8080/api/resources/all`);

    return response.json();
};

export const getResourceCategoryBySlug = async (slug: string) => {
    const response = await fetch(
        `http://localhost:8080/api/resources/categories/${slug}`
    );

    return response.json();
};

export const createResourceCategory = async (data: ResourceCategoryAddNew) => {
    try {
        // * Generate JWT token
        const session: any = getSession();
        const token = generateToken(session?.user?.email);

        // * Create resource category
        const response = await fetch(
            `http://localhost:8080/api/resources/categories/add`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        // * Check if the resource category was created successfully
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        // * Return the resource category data
        return await response.json();
    } catch (error) {
        console.error("Create resource category error:", error);
    }
};
