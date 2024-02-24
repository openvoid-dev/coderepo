import { unstable_noStore as noStore } from "next/cache";

import { api } from "~/trpc/server";
import AdminResourcesPageClient from "~/app/profile/admin/resources/client";

export default async function AdminResourcesPage() {
  noStore();
  const initialAllResourceCategories =
    await api.resource.getResourceCategories.query();
  const initalAllResources = await api.resource.getResources.query();

  return (
    <AdminResourcesPageClient
      initalAllResources={initalAllResources}
      initialAllResourceCategories={initialAllResourceCategories}
    />
  );
}
