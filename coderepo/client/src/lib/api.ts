import { ResourcesBySlugResult } from "@/types/resources";

export const getAllResourceCategories = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/resources`);

  return response.json();
};

export const getResourcesBySlug = async (
  slug: string
): Promise<ResourcesBySlugResult> => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/resources/${slug}`
  );

  const { resources, ...resourceCategory } = await response.json();

  return { resources, resourceCategory };
};
