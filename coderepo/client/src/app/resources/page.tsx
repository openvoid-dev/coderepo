import Resources from "@/app/resources/ResourceCategories";
import PageHeader from "@/components/PageHeader";
import { getAllResourceCategories } from "@/utils/resources";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";

export default async function ResourcesPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["resource-categories"],
        queryFn: async () => await getAllResourceCategories(),
    });

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Curated Resources to Supercharge Your Web Development Journey"
                text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
            />

            <HydrationBoundary state={dehydrate(queryClient)}>
                <Resources />
            </HydrationBoundary>
        </main>
    );
}
