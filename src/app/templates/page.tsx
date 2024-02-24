import { unstable_noStore as noStore } from "next/cache";
import TemplatesPageClient from "~/app/templates/client";
import PageHeader from "~/components/PageHeader";
import { api } from "~/trpc/server";

export default async function TemplatesPage() {
  noStore();
  const initialTemplatesData = await api.template.getAllTemplates.query();

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Inspiring Templates to Use"
        text="Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects"
      />

      <TemplatesPageClient initialTemplatesData={initialTemplatesData} />
    </main>
  );
}
