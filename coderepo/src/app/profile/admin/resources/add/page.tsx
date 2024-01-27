import AddResourceForm from "~/components/admin/Resource/AddResourceForm";
import { api } from "~/trpc/server";

export default async function AdminAddResource() {
    const resourceCategories = await api.resource.getResourceCategories.query();

    return (
        <main>
            <h1>Add Resource</h1>

            <AddResourceForm resourceCategories={resourceCategories} />
        </main>
    )
}