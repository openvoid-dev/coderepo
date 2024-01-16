import PageHeader from "@/components/PageHeader";
import ResourceCard from "@/components/ResourceCard";
import { getResourcesBySlug } from "@/lib/api";

export default async function ResourceSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const { resourceCategory, resources } = await getResourcesBySlug(params.slug);

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading={resourceCategory.name}
        text={resourceCategory.description}
      />

      <section className="container grid grid-cols-1 md:grid-cols-3 mt-20">
        {resources.map((resource, index) => (
          <ResourceCard key={resource.name + index} {...resource} />
        ))}
      </section>
    </main>
  );
}
