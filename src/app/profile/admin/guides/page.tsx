import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { Icons } from "~/components/Icons";
import { guideColumns } from "~/components/admin/Guide/columns";
import { GuideDataTable } from "~/components/admin/Guide/data-table";
import { guideTagColumns } from "~/components/admin/GuideTag/columns";
import { GuideTagDataTable } from "~/components/admin/GuideTag/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminGuidesPage() {
  noStore();
  const allGuides = await api.guide.getGuides.query();
  const allGuideTags = await api.guide.getGuideTags.query();

  return (
    <main>
      {/* Guides */}
      <section className="mt-4">
        <div className="flex justify-between">
          <h2 className="text-left font-heading text-2xl font-bold">
            Edit Guides
          </h2>

          <Link
            href="/profile/admin/guides/add"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            <Icons.create className="mr-2 h-5 w-5" /> Add Guide
          </Link>
        </div>

        <GuideDataTable columns={guideColumns} data={allGuides} />
      </section>

      {/* Guide Tags */}
      <section className="">
        <div className="flex justify-between">
          <h2 className="text-left font-heading text-2xl font-bold">
            Edit Guide Tags
          </h2>

          <Link
            href="/profile/admin/guides/tags/add"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            <Icons.create className="mr-2 h-5 w-5" /> Add Guide Tag
          </Link>
        </div>
        <GuideTagDataTable columns={guideTagColumns} data={allGuideTags} />
      </section>
    </main>
  );
}
