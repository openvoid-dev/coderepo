import MyTemplatesProfilePageClient from "~/app/profile/my-templates/client";
import { api } from "~/trpc/server";

export default async function MyTemplatesProfilePage() {
  const initialTemplatesData = await api.user.getSavedTemplates.query();

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Templates</h1>
      </div>

      <MyTemplatesProfilePageClient initialTemplatesData={initialTemplatesData} />
    </main>
  );
}
