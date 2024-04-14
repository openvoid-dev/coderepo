import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import SingleGuidesPageClient from "@/app/(app)/guides/[slug]/client";
import { api } from "@/trpc/server";
import { db } from "@/server/db";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomMDX } from "@/components/mdx-remote";
import { PrismaClient } from "@prisma/client";

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
  noStore();
  const guide = await api.guide.getGuideBySlug({
    slug: params.slug,
  });

  if (!guide) {
    notFound();
  }

  return (
    <main className="container relative min-h-screen">
      <SingleGuidesPageClient initialData={guide} slug={params.slug} />

      <article className="container mt-4 max-w-3xl">
        <CustomMDX source={guide.content} />
      </article>
    </main>
  );
}

// export async function generateStaticParams() {
//   const prisma = new PrismaClient();
//   const guides = await prisma.guide.findMany({
//     select: {
//       slug: true,
//     },
//   });
//   // const guides = await db.guide.findMany();
//   // const guides = await db.guide.findMany({
//   //   select: {
//   //     slug: true,
//   //   },
//   // });

//   return guides.map((guide) => ({
//     slug: guide.slug,
//   }));
// }
