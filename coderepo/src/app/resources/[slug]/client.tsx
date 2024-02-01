"use client";

import Link from "next/link";
import { Icons } from "~/components/Icons";
import Loader from "~/components/Loader";
import PageHeader from "~/components/PageHeader";
import ResourceCard from "~/components/ResourceCard";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface ResourcesByCategoryPageClientProps {
  slug: string;
  category: {
    id: number;
    name: string;
    description: string;
  };
}

export default function ResourcesByCategoryPageClient({
  slug,
  category,
}: ResourcesByCategoryPageClientProps) {
  const { data, isLoading } = api.resource.getResourcesForCategory.useQuery({
    slug: slug,
  });

  return (
    <>
      <PageHeader heading={category.name} text={category.description} />

      {isLoading && <Loader className="mt-20" />}

      {data?.resources.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <p className="mt-20 text-center text-xl text-secondary-foreground">
            No resources found.
          </p>

          <Link
            href="/resources"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <Icons.back className="mr-2 h-5 w-5" />
            Go back to resources.
          </Link>
        </div>
      )}

      <section className="container mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {data?.resources.map((resource, index) => (
          <ResourceCard
            key={resource.name + index}
            {...resource}
            isSaved={
              resource.myResources && resource.myResources.length > 0
                ? true
                : false
            }
          />
        ))}
      </section>
    </>
  );
}
