import Link from "next/link";
import { Icons } from "~/components/Icons";
import EditTemplateForm from "~/components/admin/Template/EditTemplateForm";
import { templatePageColumns } from "~/components/admin/TemplatePage/columns";
import { TemplatePageDataTable } from "~/components/admin/TemplatePage/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server"

export default async function AdminEditTemplate({ params }: { params: { id: string } }) {
    const template = await api.template.getTemplateById.query({ id: parseInt(params.id) });
    const templatePages = await api.template.getTemplatePages.query({ id: parseInt(params.id) });

    if (!template) {
        return null;
    }

    return (
        <main>
            <section className="bg-secondary/20 rounded-lg py-10 px-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Edit Template</h1>

                    <Link href="/profile/admin/templates" className={cn(buttonVariants({ variant: "link" }))}>
                        <Icons.back className="w-5 h-5 mr-2" />
                        Go Back
                    </Link>
                </div>

                <EditTemplateForm template={template} />
            </section>


            <section className="mt-10">
                <div className="flex justify-between">
                    <h2 className="font-bold font-heading text-left text-2xl">
                        Edit Template Pages
                    </h2>

                    <Link href={`/profile/admin/templates/pages/add/${template.id}`} className={cn(buttonVariants({ variant: "link" }))}>
                        <Icons.create className="w-5 h-5 mr-2" /> Add Template Page
                    </Link>
                </div>
                <TemplatePageDataTable columns={templatePageColumns} data={templatePages} />
            </section>
        </main>
    )
}