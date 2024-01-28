import ResourcesByCategoryPageClient from "~/app/resources/[slug]/client";
import Hydrate from "~/trpc/hydrate-client";
import { api } from "~/trpc/server";

export default async function ResourcesByCategoryPage({
    params,
}: {
    params: { slug: string };
}) {
    await api.resource.getResourcesForCategory.query({ slug: params.slug });

    // TODO: Add Prerendering for this page

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <Hydrate>
                <ResourcesByCategoryPageClient slug={params.slug} />
            </Hydrate>
        </main>
    )
}