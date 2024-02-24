import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { Icons } from "~/components/Icons";
import AddTemplatePageForm from "~/components/admin/TemplatePage/AddTemplatePageForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminAddTemplatePage({
  params,
}: {
  params: { templateId: string };
}) {
  noStore();
  const templatePages = await api.template.getTemplatePages.query({
    id: parseInt(params.templateId),
  });

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Add Template Page</h1>

        <Link
          href={`/profile/admin/templates/edit/${params.templateId}`}
          className={cn(buttonVariants({ variant: "link" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          Go Back
        </Link>
      </div>

      <AddTemplatePageForm
        templateId={params.templateId}
        templatePages={templatePages}
      />
    </main>
  );
}
