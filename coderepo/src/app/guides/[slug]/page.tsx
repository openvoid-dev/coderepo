import { notFound } from "next/navigation";
import SingleGuidesPageClient from "~/app/guides/[slug]/client";
import { api } from "~/trpc/server";

export default async function SingleGuidesPage({
    params,
}: {
    params: { slug: string };
}) {
    const guide = await api.guide.getGuideBySlug.query({
        slug: params.slug,
    });

    if (!guide) {
        notFound();
    }

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <SingleGuidesPageClient initialData={guide} slug={params.slug} />
        </main>
    )
}