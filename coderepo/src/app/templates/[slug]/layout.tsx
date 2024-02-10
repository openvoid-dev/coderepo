import { notFound } from "next/navigation";
import TemplateNavigation from "~/components/TemplateNavigation";
import { api } from "~/trpc/server";

export default async function SingleTemplatesPageLayout({
    children, params
}: {
    children: React.ReactNode;
    params: {
        slug: string;
    };
}) {
    const intialTemplate = await api.template.getTemplateBySlug.query({ slug: params.slug });

    if (!intialTemplate) {
        notFound();
    }

    const initialTemplatePages = await api.template.getTemplatePages.query({ id: intialTemplate.id });

    return (
        <main className="container flex gap-6">

            <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 container">
                {/* Template Navbar */}
                <TemplateNavigation initialTemplatePages={initialTemplatePages} templateId={intialTemplate.id} templateSlug={params.slug} />


                {/* Content */}
                <section className="relative py-6 lg:gap-10 lg:py-10">
                    {children}
                </section>
            </div>
        </main>
    )
}