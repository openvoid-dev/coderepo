"use client";

import PageHeader from "~/components/PageHeader";
import ResourceCard from "~/components/ResourceCard";
import { api } from "~/trpc/react";

interface ResourcesByCategoryPageClientProps {
    slug: string;
}

export default function ResourcesByCategoryPageClient({ slug }: ResourcesByCategoryPageClientProps) {
    const { data, isLoading } = api.resource.getResourcesForCategory.useQuery({ slug: slug })

    if (isLoading) return (
        <div>Loading</div>
    );

    if (!data) return (
        <div>Not found</div>
    );

    const { category, resources } = data;

    return (
        <>
            <PageHeader
                heading={category.name}
                text={category.description}
            />

            <section className="container grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCard key={resource.name + index} {...resource} isSaved={resource.myResources && resource.myResources.length > 0 ? true : false} />
                ))}
            </section>
        </>
    )
}