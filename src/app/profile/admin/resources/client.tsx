"use client";

import Link from "next/link";
import { Icons } from "~/components/Icons";
import { resourceColumns } from "~/components/admin/Resource/columns";
import { ResourceDataTable } from "~/components/admin/Resource/data-table";
import { resourceCategoryColumns } from "~/components/admin/ResourceCategory/columns";
import { ResourceCategoryDataTable } from "~/components/admin/ResourceCategory/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react"

interface AdminResourcesPageClientProps {
    initialAllResourceCategories: {
        slug: string;
        id: number;
        name: string;
        description: string;
        icon: string;
    }[];
    initalAllResources: {
        id: number;
        name: string;
        description: string;
        url: string;
        category: {
            slug: string;
            id: number;
            name: string;
        };
    }[];
}

export default function AdminResourcesPageClient({ initialAllResourceCategories, initalAllResources }: AdminResourcesPageClientProps) {
    const { data: allResourceCategories, isLoading: isResourceCategoriesLoading } = api.resource.getResourceCategories.useQuery(undefined, {
        initialData: initialAllResourceCategories,
        refetchOnMount: false
    });

    const { data: allResources, isLoading: isResourcesLoading } = api.resource.getResources.useQuery(undefined, {
        initialData: initalAllResources,
        refetchOnMount: false
    });

    return (
        <main>
            {/* Resource Categories */}
            <section className="">
                <div className="flex justify-between">
                    <h2 className="font-bold font-heading text-left text-2xl">
                        Edit Resource Categories
                    </h2>

                    <Link href="/profile/admin/resources/categories/add" className={cn(buttonVariants({ variant: "link" }))}>
                        <Icons.create className="w-5 h-5 mr-2" /> Add Resource Category
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
                        <Icons.create className="w-5 h-5 mr-2" /> Add Resource
                    </Link>
                </div>

                <ResourceDataTable columns={resourceColumns} data={allResources} />
            </section>
        </main>
    )
}