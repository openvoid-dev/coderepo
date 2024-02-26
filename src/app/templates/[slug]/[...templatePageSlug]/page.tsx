import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import PageHeader from "~/components/PageHeader";
import { api } from "~/trpc/server";

import Markdown from "react-markdown";
import { CodeBlock, Pre } from "~/components/markdown/Code";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";

export async function generateMetadata({
  params,
}: {
  params: { templatePageSlug: string[]; slug: string };
}): Promise<Metadata> {
  const templatePage = await api.template.getTemplatePageBySlug.query({
    slug: params.slug,
    templatePageSlug:
      params.templatePageSlug[params.templatePageSlug.length - 1] ?? "",
  });

  if (!templatePage) {
    return {};
  }

  const url = process.env.NEXTAUTH_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", templatePage.name);
  ogUrl.searchParams.set("type", "templatePage");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${params.slug}: ${templatePage.name}`,
    openGraph: {
      title: `${params.slug}: ${templatePage.name} | Code Repo`,
      type: "article",
      url: `${url}/templates/${params.slug}/${params.templatePageSlug.join("/")}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: templatePage.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: templatePage.name,
      images: [ogUrl.toString()],
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: { templatePageSlug: string[]; slug: string };
}) {
  noStore();

  const templatePage = await api.template.getTemplatePageBySlug.query({
    slug: params.slug,
    templatePageSlug:
      params.templatePageSlug[params.templatePageSlug.length - 1] ?? "",
  });

  if (!templatePage) {
    notFound();
  }

  const options = { code: CodeBlock, pre: Pre };

  return (
    <main>
      <PageHeader heading={templatePage.name} />

      <div className="mt-14">
        <Markdown
          className="prose prose-invert min-w-full"
          components={options}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeSanitize,
            [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
          ]}
        >
          {templatePage.content}
        </Markdown>
      </div>
    </main>
  );
}
