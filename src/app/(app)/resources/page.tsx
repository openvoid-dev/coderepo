import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import ResourceCategoryCard from "@/components/resource-category-card";
import { api } from "@/trpc/server";

import { type Icons } from "@/components/icons";
import { type Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resource Categories",
    description:
      "Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success. Browse through our curated list of resource categories to supercharge your web development journey.",
  };
}

export default async function ResourceCategoriesPage() {
  const resourceCategories = await api.resource.getResourceCategories();

  return (
    <main className="container relative min-h-screen pb-8 lg:pb-20">
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill={true}
          className="block h-full w-full object-cover [object-position:center] "
        />
      </div>
      <PageHeader>
        <PageHeaderHeading>
          Curated Resources to Supercharge Your Web Development Journey
        </PageHeaderHeading>
        <PageHeaderDescription>
          Unlocking a Treasure Trove of Tools, Tutorials, and References for
          Seamless Web Development Success
        </PageHeaderDescription>
      </PageHeader>

      {resourceCategories.length > 0 && (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
