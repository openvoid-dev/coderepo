import { guideTagColumns } from "@/components/admin/guide-tags/columns";
import { GuideTagDataTable } from "@/components/admin/guide-tags/data-table";
import { guideColumns } from "@/components/admin/guides/columns";
import { GuideDataTable } from "@/components/admin/guides/data-table";
import { Icons } from "@/components/icons";
import {
  AdminPageActions,
  AdminPageHeader,
  AdminPageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { api } from "@/trpc/server";
import Link from "next/link";

export default async function AdminGuidesPage() {
  const guides = await api.guide.getGuides();
  const guideTags = await api.guide.getGuideTags();

  return (
    <main>
      {/* Guides */}
      <section>
        <AdminPageHeader>
          <AdminPageHeaderHeading>Guides</AdminPageHeaderHeading>
          <AdminPageActions>
            <Link
              href="/admin/guides/add-guide"
              className={buttonVariants({ variant: "link" })}
            >
              <Icons.create className="mr-2 h-5 w-5" />
              <span>Add guide</span>
            </Link>
          </AdminPageActions>
        </AdminPageHeader>

        <GuideDataTable columns={guideColumns} data={guides} />
      </section>

      {/* Guide Tags */}
      <section className="mt-16">
        <AdminPageHeader>
          <AdminPageHeaderHeading>Guide Tags</AdminPageHeaderHeading>
          <AdminPageActions>
            <Link
              href="/admin/guides/tags/add"
              className={buttonVariants({ variant: "link" })}
            >
              <Icons.create className="mr-2 h-5 w-5" />
              <span>Add tag</span>
            </Link>
          </AdminPageActions>
        </AdminPageHeader>

        <GuideTagDataTable columns={guideTagColumns} data={guideTags} />
      </section>
    </main>
  );
}
