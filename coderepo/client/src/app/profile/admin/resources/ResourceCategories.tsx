"use client";

import { columns } from "@/components/admin/ResourceCategories/columns";
import { DataTable } from "@/components/admin/ResourceCategories/data-table";
import { ResourceCategory } from "@/types/resources";
import { getAllResourceCategories } from "@/utils/resources";
import { useQuery } from "@tanstack/react-query";

const ResourceCategories = () => {
    const {
        isLoading,
        error,
        data: resources,
    } = useQuery<ResourceCategory[]>({
        queryKey: ["resource-categories"],
        queryFn: async () => await getAllResourceCategories(),
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
        <section className="">
            <h2 className="font-bold font-heading text-left text-2xl">
                Edit Resource Categories
            </h2>

            <DataTable columns={columns} data={resources} />
        </section>
    );
};

export default ResourceCategories;