"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import Loader from "@/components/loader";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import ResourceCard from "@/components/resource-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { type api as serverClient } from "@/trpc/server";

interface ResourcesByCategoryPageClientProps {
  slug: string;
  category: {
    id: number;
    name: string;
    description: string;
    icon: string;
  };
  initialResourcesData: Awaited<
    ReturnType<typeof serverClient.resource.getResourcesForCategory>
  >;
}

export default function ResourcesByCategoryPageClient({
  slug,
  category,
  initialResourcesData,
}: ResourcesByCategoryPageClientProps) {
  const { data, isLoading } = api.resource.getResourcesForCategory.useQuery(
    {
      slug: slug,
    },
    {
      initialData: initialResourcesData,
      refetchOnMount: false,
    },
  );

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{category.name}</PageHeaderHeading>
        <PageHeaderDescription>{category.description}</PageHeaderDescription>
        <Link
          href="/resources"
          className={cn(buttonVariants({ variant: "secondary" }), "mt-4")}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          Go back to resources.
        </Link>
      </PageHeader>

      {isLoading && <Loader className="mt-20" />}

      {data?.resources.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <p className="mt-20 text-center text-xl text-secondary-foreground">
            No resources found.
          </p>
        </div>
      )}

      <section className="grid grid-cols-1 gap-6  md:grid-cols-2 xl:grid-cols-3">
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
