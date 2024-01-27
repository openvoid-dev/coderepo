import PageHeader from "~/components/PageHeader";
import ResourceCard from "~/components/ResourceCard";
import { api } from "~/trpc/server";

export default async function ResourcesByCategoryPage({
    params,
}: {
    params: { slug: string };
}) {
    const { resources, category } = await api.resource.getResourcesForCategory.query({ slug: params.slug })

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading={category.name}
                text={category.description}
            />

            <section className="container grid grid-cols-1 md:grid-cols-4 mt-20 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCard key={resource.name + index} {...resource} />
                ))}
            </section>
        </main>
    )
}