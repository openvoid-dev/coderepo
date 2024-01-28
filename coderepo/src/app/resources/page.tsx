import PageHeader from "~/components/PageHeader";
import ResourceCategoryCard from "~/components/ResourceCategoryCard";
import { api } from "~/trpc/server";

import { type Icons } from "~/components/Icons";

export default async function ResourceCategoriesPage() {
    const resourceCategories = await api.resource.getResourceCategories.query();

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Curated Resources to Supercharge Your Web Development Journey"
                text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
            />

            {resourceCategories.length > 0 && (
                <section className="container grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
                    {resourceCategories.map((resource, index) => (
                        <ResourceCategoryCard key={resource.slug + index} {...resource} icon={resource.icon as keyof typeof Icons} />
                    ))}
                </section>
            )}
        </main>
    )
}