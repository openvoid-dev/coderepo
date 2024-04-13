import { type Metadata } from "next";
import { api } from "@/trpc/server";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import GuidesPageClient from "@/app/(app)/guides/client";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guides",
    description:
      "Comprehensive Guides for Web Development Technologies. Empowering Aspiring Web Developers with In-Depth and Accessible Guides to Master the Cutting-Edge Technologies that Drive the Web, from HTML and CSS to JavaScript Frameworks and Beyond.",
  };
}

export default async function GuidesPage() {
  const guides = await api.guide.getGuides();

  return (
    <main className="container relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill={true}
          className="block h-full w-full object-cover [object-position:center] "
        />
      </div>
      <PageHeader>
        <PageHeaderHeading>Comprehensive Guides</PageHeaderHeading>
        <PageHeaderDescription>
          Empowering Aspiring Web Developers with In-Depth and Accessible Guides
          to Master the Cutting-Edge Technologies
        </PageHeaderDescription>
      </PageHeader>

      <GuidesPageClient initialData={guides} />
    </main>
  );
}
