import Resources from "@/app/resources/[slug]/Resources";

export default async function ResourceSinglePage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <Resources slug={params.slug} />
        </main>
    );
}
