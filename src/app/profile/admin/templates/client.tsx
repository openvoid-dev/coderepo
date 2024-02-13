"use client";

import Link from "next/link";
import { Icons } from "~/components/Icons";
import { templateColumns } from "~/components/admin/Template/columns";
import { TemplateDataTable } from "~/components/admin/Template/data-table";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface AdminTemplatesPageClientProps {
    initialTemplates: {
        slug: string;
        id: number;
        name: string;
        description: string;
        updatedAt: Date;
        githubUrl: string;
    }[]
}

export default function AdminTemplatesPageClient({ initialTemplates }: AdminTemplatesPageClientProps) {
    const { data: allTemplates } = api.template.getAllTemplates.useQuery(undefined, {
        initialData: initialTemplates,
        refetchOnMount: false
    });

    return (
        <main>
            <section className="">
                <div className="flex justify-between">
                    <h2 className="font-bold font-heading text-left text-2xl">
                        Edit Templates
                    </h2>

                    <Link href="/profile/admin/templates/add" className={cn(buttonVariants({ variant: "link" }))}>
                        <Icons.create className="w-5 h-5 mr-2" /> Add Template
                    </Link>
                </div>
                <TemplateDataTable columns={templateColumns} data={allTemplates} />
            </section>
        </main>
    );
}