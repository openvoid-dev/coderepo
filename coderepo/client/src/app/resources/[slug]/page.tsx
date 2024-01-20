import Resources from "@/app/resources/[slug]/Resources";
import { getResourcesBySlug } from "@/utils/resources";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";

export default async function ResourceSinglePage({
    params,
}: {
    params: { slug: string };
}) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["resources", params.slug],
        queryFn: async () => await getResourcesBySlug(params.slug),
    });
    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Resources slug={params.slug} />
            </HydrationBoundary>
        </main>
    );
}
