import { notFound } from "next/navigation";
import ResourcesByCategoryPageClient from "~/app/resources/[slug]/client";
import { api } from "~/trpc/server";

export default async function ResourcesByCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { category } = await api.resource.getResourcesForCategory.query({
    slug: params.slug,
  });

  if (!category) {
    notFound();
  }

  // TODO: Add Prerendering for this page
  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <ResourcesByCategoryPageClient slug={params.slug} category={category} />
    </main>
  );
}
