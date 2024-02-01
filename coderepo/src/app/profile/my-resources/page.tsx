"use client";

import Loader from "~/components/Loader";
import ResourceCard from "~/components/ResourceCard";
import { api } from "~/trpc/react";

export default function MyResourcesProfilePage() {
  const { data: savedResources, isLoading } =
    api.user.getSavedResources.useQuery();

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Resources</h1>
      </div>

      {isLoading && <Loader className="my-6" />}
      {savedResources?.length === 0 && (
        <p className="text-xl text-muted-foreground">
          You haven&apos;t saved any resources yet.
        </p>
      )}

      <div className="grid grid-cols-3 gap-6">
        {savedResources?.map((resource) => (
          <ResourceCard key={resource.name} {...resource} isSaved={true} />
        ))}
      </div>
    </main>
  );
}
