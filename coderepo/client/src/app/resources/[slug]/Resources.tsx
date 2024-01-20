"use client";

import PageHeader from "@/components/PageHeader";
import ResourceCard from "@/components/ResourceCard";
import { ResourcesBySlugResult } from "@/types/resources";
import { getResourcesBySlug } from "@/utils/resources";
import { useQuery } from "@tanstack/react-query";

const Resources = ({ slug }: { slug: string }) => {
    const { isLoading, error, data } = useQuery<ResourcesBySlugResult>({
        queryKey: ["resources", slug],
        queryFn: async () => await getResourcesBySlug(slug),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No Resources Found</div>;
    }

    const { resourceCategory, resources } = data;

    return (
        <>
            <PageHeader
                heading={resourceCategory.name}
                text={resourceCategory.description}
            />
            <section className="container grid grid-cols-1 md:grid-cols-4 mt-20">
                {resources.map((resource, index) => (
                    <ResourceCard key={resource.name + index} {...resource} />
                ))}
            </section>
        </>
    );
};

export default Resources;
