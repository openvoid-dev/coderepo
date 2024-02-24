import { unstable_noStore as noStore } from "next/cache";

import PageHeader from "~/components/PageHeader";
import ResourceCategoryCard from "~/components/ResourceCategoryCard";
import { api } from "~/trpc/server";

import { type Icons } from "~/components/Icons";

export default async function ResourceCategoriesPage() {
  noStore();
  const resourceCategories = await api.resource.getResourceCategories.query();

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Curated Resources to Supercharge Your Web Development Journey"
        text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
      />

      {resourceCategories.length > 0 && (
        <section className="container mt-20 grid grid-cols-1 gap-6 md:grid-cols-4">
          {resourceCategories.map((resource, index) => (
            <ResourceCategoryCard
              key={resource.slug + index}
              {...resource}
              icon={resource.icon as keyof typeof Icons}
            />
          ))}
        </section>
      )}
    </main>
  );
}
