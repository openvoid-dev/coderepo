import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { Icons } from "~/components/Icons";
import EditTemplateForm from "~/components/admin/Template/EditTemplateForm";
import { templatePageColumns } from "~/components/admin/TemplatePage/columns";
import { TemplatePageDataTable } from "~/components/admin/TemplatePage/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminEditTemplate({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const template = await api.template.getTemplateById.query({
    id: parseInt(params.id),
  });
  const templatePages = await api.template.getTemplatePages.query({
    id: parseInt(params.id),
  });

  if (!template) {
    return null;
  }

  return (
    <main>
      <section className="rounded-lg bg-secondary/20 px-8 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Edit Template</h1>

          <Link
            href="/profile/admin/templates"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            <Icons.back className="mr-2 h-5 w-5" />
            Go Back
          </Link>
        </div>

        <EditTemplateForm template={template} />
      </section>

      <section className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-left font-heading text-2xl font-bold">
            Edit Template Pages
          </h2>

          <Link
            href={`/profile/admin/templates/pages/add/${template.id}`}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            <Icons.create className="mr-2 h-5 w-5" /> Add Template Page
          </Link>
        </div>
        <TemplatePageDataTable
          columns={templatePageColumns}
          data={templatePages}
        />
      </section>
    </main>
  );
}
