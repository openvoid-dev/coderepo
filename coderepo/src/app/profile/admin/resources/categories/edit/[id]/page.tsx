import EditResourceCategoryForm from "~/components/admin/ResourceCategory/EditResourceCategoryForm";
import { api } from "~/trpc/server";

export default async function AdminEditResource({
    params,
}: {
    params: { id: string };
}) {
    const resourceCategory = await api.resource.getResourceCategoryById.query({ id: parseInt(params.id) });

    return (
        <main>
            <h1>Edit Resource</h1>

            <EditResourceCategoryForm resourceCategory={resourceCategory} />
        </main>
    )
}