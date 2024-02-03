"use client";

import Link from "next/link";
import { Icons } from "~/components/Icons";
import PageHeader from "~/components/PageHeader";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface SingleGuidesPageClientProps {
    initialData: {
        name: string;
        imageUrl: string;
        description: string;
        content: string;
        id: number;
        tag: {
            name: string;
            id: number;
            icon: string;
        };
    };
    slug: string;
}

export default function SingleGuidesPageClient({ initialData, slug }: SingleGuidesPageClientProps) {
    const { data, isLoading } = api.guide.getGuideBySlug.useQuery({ slug: slug }, {
        initialData: initialData,
        refetchOnMount: false
    });

    if (!data) {
        return (
            <div className="flex flex-col items-center gap-4">
                <p className="mt-20 text-center text-xl text-secondary-foreground">
                    No guide found.
                </p>
                <Link
                    href="/guides"
                    className={cn(buttonVariants({ variant: "secondary" }))}
                >
                    <Icons.back className="mr-2 h-5 w-5" />
                    Go back to guides.
                </Link>
            </div>
        )
    }

    return (
        <>
            <PageHeader heading={data.name} text={data.description} />
        </>
    )
}