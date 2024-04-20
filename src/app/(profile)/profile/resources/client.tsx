"use client";

import ResourceCard from "@/components/resource-card";
import { api } from "@/trpc/react";
import { type api as serverClient } from "@/trpc/server";

interface MyResourcesProfilePageClientProps {
  initialResourcesData: Awaited<
    ReturnType<typeof serverClient.user.getSavedResources>
  >;
}

export default function MyResourcesProfilePageClient({
  initialResourcesData,
}: MyResourcesProfilePageClientProps) {
  const { data } = api.user.getSavedResources.useQuery(undefined, {
    initialData: initialResourcesData,
    refetchOnMount: false,
  });

  return (
    <>
      {data?.length === 0 && (
        <p className="text-xl text-muted-foreground">
          You haven&apos;t saved any resources yet.
        </p>
      )}

      <div className="grid grid-cols-3 gap-6">
        {data?.map((resource) => (
          <ResourceCard key={resource.name} {...resource} isSaved={true} />
        ))}
      </div>
    </>
  );
}
