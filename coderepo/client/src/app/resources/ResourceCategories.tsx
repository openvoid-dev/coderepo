"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import ResourceCategoryCard from "@/components/ResourceCategoryCard";

import { ResourceCategory } from "@/types/resources";
import { getAllResourceCategories } from "@/utils/resources";

const ResourceCategories = () => {
    const {
        isLoading,
        error,
        data: resources,
    } = useSuspenseQuery<ResourceCategory[]>({
        queryKey: ["resource-categories"],
        queryFn: async () => await getAllResourceCategories(),
        staleTime: 5 * 1000,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!resources) {
        return <div>No Resources Found</div>;
    }

    return (
        <section className="container grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
            {resources.map((resource, index) => (
                <ResourceCategoryCard key={resource.id + index} {...resource} />
            ))}
        </section>
    );
};

export default ResourceCategories;
