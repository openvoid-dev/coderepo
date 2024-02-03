import GuidesPageClient from "~/app/guides/client";
import PageHeader from "~/components/PageHeader";
import { api } from "~/trpc/server";

export default async function GuidesPage() {
  const initialGuidesData = await api.guide.getGuides.query();

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Comprehensive Guides for Web Development Technologies"
        text="Empowering Aspiring Web Developers with In-Depth and Accessible Guides to Master the Cutting-Edge Technologies that Drive the Web, from HTML and CSS to JavaScript Frameworks and Beyond"
      />

      <GuidesPageClient initialData={initialGuidesData} />
    </main>
  );
}
