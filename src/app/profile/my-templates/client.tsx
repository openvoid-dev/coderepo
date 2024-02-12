"use client";

import TemplateCard from "~/components/TemplateCard";
import { api } from "~/trpc/react";
import { type api as serverClient } from "~/trpc/server";

interface MyTemplatesProfilePageClientProps {
    initialTemplatesData: Awaited<ReturnType<(typeof serverClient.user.getSavedTemplates.query)>>;
}

export default function MyTemplatesProfilePageClient({ initialTemplatesData }: MyTemplatesProfilePageClientProps) {
    const { data: templates } = api.user.getSavedTemplates.useQuery(undefined, {
        initialData: initialTemplatesData,
        refetchOnMount: false,
    });

    return (
        <>
            {templates?.length === 0 && (
                <p className="text-xl text-muted-foreground">
                    You haven&apos;t saved any templates yet.
                </p>
            )}

            <div className="grid grid-cols-2 gap-6">
                {templates?.map((template, index) => (
                    <TemplateCard
                        key={index}
                        name={template.name}
                        description={template.description}
                        id={template.id}
                        slug={template.slug}
                        githubUrl={template.githubUrl}
                        updatedAt={template.updatedAt}
                    />
                ))}
            </div>
        </>
    )
}