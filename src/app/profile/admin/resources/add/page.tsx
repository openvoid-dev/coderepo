import Link from "next/link";
import { Icons } from "~/components/Icons";
import AddResourceForm from "~/components/admin/Resource/AddResourceForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminAddResource() {
    const resourceCategories = await api.resource.getResourceCategories.query();

    return (
        <main className="bg-secondary/20 rounded-lg py-10 px-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Create Resource</h1>

                <Link href="/profile/admin/resources" className={cn(buttonVariants({ variant: "link" }))}>
                    <Icons.back className="w-5 h-5 mr-2" />
                    Go Back
                </Link>
            </div>

            <AddResourceForm resourceCategories={resourceCategories} />
        </main>
    )
}