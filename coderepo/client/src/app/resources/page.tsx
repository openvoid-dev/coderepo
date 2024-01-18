import PageHeader from "@/components/PageHeader";
import ResourceCategoryCard from "@/components/ResourceCategoryCard";

import { getAllResourceCategories } from "@/lib/api";
import { ResourceCategory } from "@/types/resources";

export default async function ResourcesPage() {
    const resources: ResourceCategory[] = await getAllResourceCategories();

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Curated Resources to Supercharge Your Web Development Journey"
                text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
            />

            <section className="container grid grid-cols-1 md:grid-cols-3 mt-20 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCategoryCard
                        key={resource.id + index}
                        {...resource}
                    />
                ))}
            </section>
        </main>
    );
}
