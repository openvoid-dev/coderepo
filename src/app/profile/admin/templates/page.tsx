import { unstable_noStore as noStore } from "next/cache";

import AdminTemplatesPageClient from "~/app/profile/admin/templates/client";
import { api } from "~/trpc/server";

export default async function AdminTemplatesPage() {
  noStore();
  const initialTemplates = await api.template.getAllTemplates.query();

  return <AdminTemplatesPageClient initialTemplates={initialTemplates} />;
}
