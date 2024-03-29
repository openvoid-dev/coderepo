import { unstable_noStore as noStore } from "next/cache";

import PageHeader from "~/components/PageHeader";
import ResourceCategoryCard from "~/components/ResourceCategoryCard";
import { api } from "~/trpc/server";

import { type Icons } from "~/components/Icons";
import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resource Categories",
    description:
      "Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success. Browse through our curated list of resource categories to supercharge your web development journey.",
  };
}

export default async function ResourceCategoriesPage() {
  noStore();
  const resourceCategories = await api.resource.getResourceCategories.query();

  return (
    <main className="min-h-screen pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Curated Resources to Supercharge Your Web Development Journey"
        text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
      />

      {resourceCategories.length > 0 && (
        <section className="container mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
