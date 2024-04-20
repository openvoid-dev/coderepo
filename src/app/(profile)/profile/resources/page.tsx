import MyResourcesProfilePageClient from "@/app/(profile)/profile/resources/client";
import { api } from "@/trpc/server";

export default async function MyResourcesProfilePage() {
  const initialResourcesData = await api.user.getSavedResources();

  return (
    <main>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Saved Resources</h1>
      </div>

      <MyResourcesProfilePageClient
        initialResourcesData={initialResourcesData}
      />
    </main>
  );
}
