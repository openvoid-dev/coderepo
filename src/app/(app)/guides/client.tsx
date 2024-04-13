"use client";

import GuideCard from "@/components/guide-card";
import { Button } from "@/components/ui/button";
// import { type Icons } from "@/components/Icons";
import { api } from "@/trpc/react";
import { useState } from "react";

interface GuidesPageClientProps {
  initialData: {
    slug: string;
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    tag: {
      id: number;
      name: string;
      icon: string;
    };
  }[];
}

export default function GuidesPageClient({
  initialData,
}: GuidesPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const { data, isLoading } = api.guide.getGuides.useQuery(undefined, {
    initialData: initialData,
    refetchOnMount: false,
  });

  const { data: guideTags } = api.guide.getGuideTags.useQuery();

  const changeActiveFilter = (newFilter: string) => {
    setActiveFilter(newFilter);
  };

  return (
    <>
      {data?.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <p className="mt-20 text-center text-xl text-secondary-foreground">
            No guides found.
          </p>
        </div>
      )}

      <section className="flex gap-10 py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <div className="flex w-1/5 flex-col space-y-2 ">
          <p className="font-semibold text-muted-foreground">Filters</p>
          <div className="flex flex-col space-y-1">
            <Button
              variant={activeFilter == "all" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => changeActiveFilter("all")}
            >
              All
            </Button>
            {guideTags?.map((guideTag) => (
              <Button
                variant={activeFilter == guideTag.slug ? "secondary" : "ghost"}
                key={guideTag.slug}
                className="w-full justify-start"
                onClick={() => changeActiveFilter(guideTag.slug)}
              >
                {guideTag.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((guide, index) => (
            <GuideCard
              key={guide.name + index}
              {...guide}
              // isSaved={
              //     guide.myResources && guide.myResources.length > 0
              //         ? true
              //         : false
              // }
            />
          ))}
          {data?.map((guide, index) => (
            <GuideCard
              key={guide.name + index}
              {...guide}
              // isSaved={
              //     guide.myResources && guide.myResources.length > 0
              //         ? true
              //         : false
              // }
            />
          ))}
          {data?.map((guide, index) => (
            <GuideCard
              key={guide.name + index}
              {...guide}
              // isSaved={
              //     guide.myResources && guide.myResources.length > 0
              //         ? true
              //         : false
              // }
            />
          ))}
        </div>
      </section>
    </>
  );
}
