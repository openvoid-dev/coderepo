import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { Icons } from "~/components/Icons";
import AddResourceForm from "~/components/admin/Resource/AddResourceForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminAddResource() {
  noStore();
  const resourceCategories = await api.resource.getResourceCategories.query();

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create Resource</h1>

        <Link
          href="/profile/admin/resources"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          Go Back
        </Link>
      </div>

      <AddResourceForm resourceCategories={resourceCategories} />
    </main>
  );
}
