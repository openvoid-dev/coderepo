import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import PageHeader from "~/components/PageHeader";
import { api } from "~/trpc/server";

import Markdown from "react-markdown";
import { CodeBlock, Pre } from "~/components/markdown/Code";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";

export default async function TemplatePage({
  params,
}: {
  params: { templatePageSlug: string[]; slug: string };
}) {
  noStore();

  const templatePage = await api.template.getTemplatePageBySlug.query({
    slug: params.slug,
    templatePageSlug:
      params.templatePageSlug.length === 1
        ? params.templatePageSlug[0]!
        : params.templatePageSlug[1]!,
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
