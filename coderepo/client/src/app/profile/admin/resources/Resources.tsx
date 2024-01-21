"use client";

import { columns } from "@/components/admin/Resources/columns";
import { DataTable } from "@/components/admin/Resources/data-table";
import { Resource } from "@/types/resources";
import { getAllResources } from "@/utils/resources";
import { useQuery } from "@tanstack/react-query";

const Resources = () => {
    const {
        isLoading,
        error,
        data: resources,
    } = useQuery<Resource[]>({
        queryKey: ["resources-all"],
        queryFn: async () => await getAllResources(),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!resources) {
        return <div>No Resources Found</div>;
    }

    return (
        <section className="mt-4">
            <h2 className="font-bold font-heading text-left text-2xl">
                Edit Resources
            </h2>

            <DataTable columns={columns} data={resources} />
        </section>
    );
};

export default Resources;
