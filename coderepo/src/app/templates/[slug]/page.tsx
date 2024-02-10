import { notFound } from "next/navigation";
import SingleTemplatesPageClient from "~/app/templates/[slug]/client";
import { api } from "~/trpc/server";

export default async function SingleTemplatesPage({
    params
}: {
    params: {
        slug: string;
    };
}) {
    const intialTemplate = await api.template.getTemplateBySlug.query({ slug: params.slug });

    if (!intialTemplate) {
        notFound();
    }

    return (
        <SingleTemplatesPageClient initialTemplate={intialTemplate} />
    )
}