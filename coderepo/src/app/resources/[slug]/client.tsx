"use client";

import Loader from "~/components/Loader";
import PageHeader from "~/components/PageHeader";
import ResourceCard from "~/components/ResourceCard";
import { api } from "~/trpc/react";

interface ResourcesByCategoryPageClientProps {
    slug: string;
    category: {
        id: number;
        name: string;
        description: string;
    }
}

export default function ResourcesByCategoryPageClient({ slug, category }: ResourcesByCategoryPageClientProps) {
    const { data, isLoading } = api.resource.getResourcesForCategory.useQuery({ slug: slug })

    return (
        <>
            <PageHeader
                heading={category.name}
                text={category.description}
            />

            {isLoading && <Loader className="mt-20" />}

            <section className="container grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
                {data?.resources.map((resource, index) => (
                    <ResourceCard key={resource.name + index} {...resource} isSaved={resource.myResources && resource.myResources.length > 0 ? true : false} />
                ))}
            </section>
        </>
    )
}