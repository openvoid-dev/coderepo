import MyResourcesProfilePageClient from "~/app/profile/my-resources/client";
import { api } from "~/trpc/server";

export default async function MyResourcesProfilePage() {
  const initialResourcesData = await api.user.getSavedResources.query();

  return (
    <main className="rounded-lg bg-secondary/20 px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Resources</h1>
      </div>

      <MyResourcesProfilePageClient initialResourcesData={initialResourcesData} />
    </main>
  );
}
