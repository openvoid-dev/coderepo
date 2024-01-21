import { ResourcesBySlugResult } from "@/types/resources";

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
