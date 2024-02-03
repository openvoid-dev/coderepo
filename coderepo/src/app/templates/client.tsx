"use client";

import Loader from "~/components/Loader";
import TemplateCard from "~/components/TemplateCard";
import { api } from "~/trpc/react";
import { type api as serverClient } from "~/trpc/server";

interface TemplatesPageClientProps {
    initialTemplatesData: Awaited<ReturnType<(typeof serverClient.template.getAllTemplates.query)>>;
}

export default function TemplatesPageClient({ initialTemplatesData }: TemplatesPageClientProps) {
    const { data, isLoading } = api.template.getAllTemplates.useQuery(undefined, {
        initialData: initialTemplatesData,
        refetchOnMount: false,
    });

    return (
        <section className="container grid grid-cols-1 md:grid-cols-2 mt-20 gap-6">
            {isLoading && <Loader className="mt-20" />}

            {data?.map((template, index) => (
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

        </section>
    );
}