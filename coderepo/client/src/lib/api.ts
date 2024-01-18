import { ResourcesBySlugResult } from "@/types/resources";
import { getServerSession } from "next-auth";

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

export const getCurrentUser = async () => {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await fetch(
            `${process.env.BACKEND_URL}/api/users/${session.user.email}`
        );

        if (!currentUser) {
            return null;
        }

        const { user } = await currentUser.json();

        return user;
    } catch (error: any) {
        return null;
    }
};
