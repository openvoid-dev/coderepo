import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import ResourcesByCategoryPageClient from "~/app/resources/[slug]/client";
import { db } from "~/server/db";
import { api } from "~/trpc/server";

export default async function ResourcesByCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  noStore();
  const { category, resources } =
    await api.resource.getResourcesForCategory.query({
      slug: params.slug,
    });

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <ResourcesByCategoryPageClient
        slug={params.slug}
        category={category}
        initialResourcesData={{ resources, category }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const resourceCategories = await db.resourceCategory.findMany({
    select: {
      slug: true,
    },
  });

  return resourceCategories.map((resourceCategory) => ({
    slug: resourceCategory.slug,
  }));
}
