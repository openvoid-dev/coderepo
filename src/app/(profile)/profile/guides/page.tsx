import GuideCard from "@/components/guide-card";
import { api } from "@/trpc/server";

export default async function SavedGuides() {
  const savedGuides = await api.user.getSavedGuides();

  return (
    <main>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Saved Guides</h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {savedGuides?.map((guide, index) => (
          <GuideCard key={guide.name + index} {...guide} />
        ))}
      </div>
    </main>
  );
}
