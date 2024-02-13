import Link from "next/link";
import { Icons } from "~/components/Icons";
import AddTemplatePageForm from "~/components/admin/TemplatePage/AddTemplatePageForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminAddTemplatePage({ params }: { params: { templateId: string } }) {
    const templatePages = await api.template.getTemplatePages.query({ id: parseInt(params.templateId) });

    return (
        <main className="bg-secondary/20 rounded-lg py-10 px-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Add Template Page</h1>

                <Link href={`/profile/admin/templates/edit/${params.templateId}`} className={cn(buttonVariants({ variant: "link" }))}>
                    <Icons.back className="w-5 h-5 mr-2" />
                    Go Back
                </Link>
            </div>

            <AddTemplatePageForm templateId={params.templateId} templatePages={templatePages} />
        </main>
    )
}