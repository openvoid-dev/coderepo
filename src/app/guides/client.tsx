"use client";

import GuideCard from "~/components/GuideCard";
import { type Icons } from "~/components/Icons";
import { api } from "~/trpc/react";

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
    }[]
}

export default function GuidesPageClient({ initialData }: GuidesPageClientProps) {
    const { data, isLoading } = api.guide.getGuides.useQuery(undefined, {
        initialData: initialData,
        refetchOnMount: false
    })

    return (
        <>
            {data?.length === 0 && (
                <div className="flex flex-col items-center gap-4">
                    <p className="mt-20 text-center text-xl text-secondary-foreground">
                        No guides found.
                    </p>
                </div>
            )}

            <section className="container mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
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
            </section>
        </>
    )
}