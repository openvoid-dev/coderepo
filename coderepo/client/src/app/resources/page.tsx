import Resources from "@/app/resources/ResourceCategories";
import PageHeader from "@/components/PageHeader";

export default async function ResourcesPage() {
    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Curated Resources to Supercharge Your Web Development Journey"
                text="Unlocking a Treasure Trove of Tools, Tutorials, and References for Seamless Web Development Success"
            />

            <Resources />
        </main>
    );
}
