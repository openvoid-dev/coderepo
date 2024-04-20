import { type Metadata } from "next";
import { notFound } from "next/navigation";
import SingleGuidesPageClient from "@/app/(app)/guides/[slug]/client";
import { api } from "@/trpc/server";
import { db } from "@/server/db";
import { CustomMDX } from "@/components/mdx-remote";
import GuideCard from "@/components/guide-card";
import { Badge } from "@/components/ui/badge";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = await api.guide.getGuideBySlug({
    slug: params.slug,
  });

  if (!guide) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", guide.name);
  ogUrl.searchParams.set("type", "templatePage");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: guide.name,
    openGraph: {
      title: `${guide.name} | Code Repo`,
      type: "article",
      description: guide.description,
      url: `${url}/guides/${params.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: guide.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.name,
      description: guide.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function SingleGuidesPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = await api.guide.getGuideBySlug({
    slug: params.slug,
  });

  if (!guide) {
    notFound();
  }

  const relatedGuides = await api.guide.getRelatedGuides({
    tagId: guide.tag.id,
    guideId: guide.id,
  });

  return (
    <main className="container relative min-h-screen">
      <div className="mx-auto max-w-4xl py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <SingleGuidesPageClient initialData={guide} slug={params.slug} />

        <Badge>{guide.tag.name}</Badge>

        <PageHeader className="items-start justify-start lg:py-6">
          <PageHeaderHeading className="text-left">
            {guide.name}
          </PageHeaderHeading>
          <PageHeaderDescription className="text-left">
            {guide.description}
          </PageHeaderDescription>
        </PageHeader>

        <div>
          <Image
            src={guide.imageUrl}
            alt={guide.name}
            width="1000"
            height="1000"
            className="rounded-lg"
          />
        </div>
      </div>

      <article className="mx-auto mt-4 max-w-3xl lg:pb-20">
        <CustomMDX source={guide.content} />
      </article>

      <section className="mx-auto max-w-5xl py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-24">
        <h2 className="text-center text-3xl font-bold">Related Guides</h2>
        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((relatedGuide) => (
            <GuideCard
              key={relatedGuide.slug}
              imageUrl={relatedGuide.imageUrl}
              name={relatedGuide.name}
              slug={relatedGuide.slug}
              description={relatedGuide.description}
              tag={guide.tag}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const guides = await db.guide.findMany({
    select: {
      slug: true,
    },
  });

  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}
