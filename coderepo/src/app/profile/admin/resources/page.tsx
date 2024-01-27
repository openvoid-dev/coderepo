import Link from "next/link";
import { resourceColumns } from "~/components/admin/Resource/columns";
import { ResourceDataTable } from "~/components/admin/Resource/data-table";
import { resourceCategoryColumns } from "~/components/admin/ResourceCategory/columns";
import { ResourceCategoryDataTable } from "~/components/admin/ResourceCategory/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server"

export default async function AdminResourcesPage() {
    const allResourceCategories = await api.resource.getResourceCategories.query();
    const allResources = await api.resource.getResources.query();

    return (
        <main>
            {/* Resource Categories */}
            <section className="">
                <div className="flex justify-between">
                    <h2 className="font-bold font-heading text-left text-2xl">
                        Edit Resource Categories
                    </h2>

                    <Link href="/profile/admin/resources/categories/add" className={cn(buttonVariants({ variant: "link" }))}>
                        Add Resource Category
                    </Link>
                </div>
                <ResourceCategoryDataTable columns={resourceCategoryColumns} data={allResourceCategories} />
            </section>

            {/* Resources */}
            <section className="mt-4">
                <div className="flex justify-between">
                    <h2 className="font-bold font-heading text-left text-2xl">
                        Edit Resources
                    </h2>

                    <Link href="/profile/admin/resources/add" className={cn(buttonVariants({ variant: "link" }))}>
                        Add Resource
                    </Link>
                </div>

                <ResourceDataTable columns={resourceColumns} data={allResources} />
            </section>
        </main>
    )
}