import PageHeader from "@/components/PageHeader";
import TemplateCard from "@/components/TemplateCard";

export default async function TemplatesPage() {
    // const resources: ResourceCategory[] = await getAllResourceCategories();


    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Inspiring Templates to Use"
                text="Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects"
            />

            <section className="container grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
                {/* {resources.map((resource, index) => ( */}
                <TemplateCard
                />
                <TemplateCard
                />
                <TemplateCard
                />
                {/* ))} */}
            </section>
        </main>
    )
}