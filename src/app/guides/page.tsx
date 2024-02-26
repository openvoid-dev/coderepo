import { type Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";

import GuidesPageClient from "~/app/guides/client";
import PageHeader from "~/components/PageHeader";
import { api } from "~/trpc/server";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guides",
    description:
      "Comprehensive Guides for Web Development Technologies. Empowering Aspiring Web Developers with In-Depth and Accessible Guides to Master the Cutting-Edge Technologies that Drive the Web, from HTML and CSS to JavaScript Frameworks and Beyond.",
  };
}

export default async function GuidesPage() {
  noStore();
  const initialGuidesData = await api.guide.getGuides.query();

  return (
    <main className="min-h-screen pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Comprehensive Guides for Web Development Technologies"
        text="Empowering Aspiring Web Developers with In-Depth and Accessible Guides to Master the Cutting-Edge Technologies that Drive the Web, from HTML and CSS to JavaScript Frameworks and Beyond"
      />

      <GuidesPageClient initialData={initialGuidesData} />
    </main>
  );
}
