import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import SingleTemplatesPageClient from "~/app/templates/[slug]/client";
import { api } from "~/trpc/server";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const template = await api.template.getTemplateBySlug.query({
    slug: params.slug,
  });

  if (!template) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", template.name);
  ogUrl.searchParams.set("type", "template");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: template.name,
    description: template.description,
    openGraph: {
      title: `${template.name} | Code Repo`,
      description: template.description,
      type: "article",
      url: `${url}/templates/${template.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: template.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.name,
      description: template.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function SingleTemplatesPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  noStore();
  const intialTemplate = await api.template.getTemplateBySlug.query({
    slug: params.slug,
  });

  if (!intialTemplate) {
    notFound();
  }

  return <SingleTemplatesPageClient initialTemplate={intialTemplate} />;
}
