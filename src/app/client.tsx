"use client";

import TemplateCard from "~/components/TemplateCard";
import { api } from "~/trpc/react";

interface HomeTemplatesClientProps {
    initialTemplatesData: {
        slug: string;
        id: number;
        name: string;
        description: string;
        updatedAt: Date;
        githubUrl: string;
    }[];
}

export function HomeTemplatesClient({ initialTemplatesData }: HomeTemplatesClientProps) {
    const { data: templates } = api.template.getAllTemplates.useQuery(undefined, {
        initialData: initialTemplatesData,
        refetchOnMount: false,
    })

    return (

        <div className='grid grid-cols-2 gap-6 mt-10'>
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
    )
}