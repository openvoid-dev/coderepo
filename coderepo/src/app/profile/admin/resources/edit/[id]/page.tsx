import EditResourceForm from "~/components/admin/Resource/EditResourceForm";
import { api } from "~/trpc/server";

export default async function AdminEditResource({
    params,
}: {
    params: { id: string };
}) {
    const resourceCategories = await api.resource.getResourceCategories.query();
    const resource = await api.resource.getResourceById.query({ id: parseInt(params.id) });

    return (
        <main>
            <h1>Edit Resource</h1>

            <EditResourceForm resource={resource} resourceCategories={resourceCategories} />
        </main>
    )
}