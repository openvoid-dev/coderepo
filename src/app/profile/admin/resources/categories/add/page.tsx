import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { Icons } from "~/components/Icons";
import AddResourceCategoryForm from "~/components/admin/ResourceCategory/AddResourceCategoryForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default async function AdminAddResource() {
  noStore();

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Create Resource Category</h1>

        <Link
          href="/profile/admin/resources"
          className={cn(buttonVariants({ variant: "link" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          Go Back
        </Link>
      </div>

      <AddResourceCategoryForm />
    </main>
  );
}
