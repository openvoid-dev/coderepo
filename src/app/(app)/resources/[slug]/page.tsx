import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/server/db";
import { api } from "@/trpc/server";
import ResourcesByCategoryPageClient from "@/app/(app)/resources/[slug]/client";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { category, resources } = await api.resource.getResourcesForCategory({
    slug: params.slug,
  });

  if (!category) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", category.name);
  ogUrl.searchParams.set("type", "templatePage");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `Resource: ${category.name}`,
    openGraph: {
      title: `Resource: ${category.name} | Code Repo`,
      type: "article",
      description: category.description,
      url: `${url}/resources/${params.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: category.name,
      description: category.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function ResourcesByCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { category, resources } = await api.resource.getResourcesForCategory({
    slug: params.slug,
  });

  if (!category) {
    notFound();
  }

  return (
    <main className="container relative min-h-screen pb-8 lg:pb-20">
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill={true}
          className="block h-full w-full object-cover [object-position:center] "
        />
      </div>
      <ResourcesByCategoryPageClient
        slug={params.slug}
        category={category}
        initialResourcesData={{ resources, category }}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const resourceCategories = await db.resourceCategory.findMany({
    select: {
      slug: true,
    },
  });

  return resourceCategories.map((resourceCategory) => ({
    slug: resourceCategory.slug,
  }));
}
