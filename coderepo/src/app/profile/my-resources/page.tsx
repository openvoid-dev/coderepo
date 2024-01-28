"use client";

import ResourceCard from "~/components/ResourceCard";
import { api } from "~/trpc/react";

export default function MyResourcesProfilePage() {
    const { data: savedResources, isLoading } = api.user.getSavedResources.useQuery();

    if (isLoading) return (
        <div>Loading</div>
    );

    if (!savedResources) return (
        <div>Not found</div>
    );

    return (
        <main className="bg-secondary/20 rounded-lg py-10 px-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">My Resources</h1>

                {/* <Link href="/profile/admin/resources" className={cn(buttonVariants({ variant: "link" }))}>
                <Icons.back className="w-5 h-5 mr-2" />
                Go Back
            </Link> */}
            </div>

            <div className="grid grid-cols-3 gap-6">
                {savedResources.map((resource) => (
                    <ResourceCard key={resource.name}  {...resource} isSaved={true} />
                ))}
            </div>
        </main>
    )
}