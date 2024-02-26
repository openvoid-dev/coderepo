"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";
import { Icons } from "~/components/Icons";
import Loader from "~/components/Loader";
import PageHeader from "~/components/PageHeader";
import { CodeBlock, Pre } from "~/components/markdown/Code";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface SingleTemplatesPageClientProps {
  initialTemplate: {
    id: number;
    name: string;
    description: string;
    slug: string;
    githubUrl: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    myTemplates: {
      id: number;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      templateId: number;
    }[];
  };
}

export default function SingleTemplatesPageClient({
  initialTemplate,
}: SingleTemplatesPageClientProps) {
  const { data: template } = api.template.getTemplateBySlug.useQuery(
    { slug: initialTemplate.slug },
    { initialData: initialTemplate, refetchOnMount: false },
  );

  if (!template) {
    notFound();
  }

  const saveTemplate = api.user.saveTemplate.useMutation({
    onSuccess: async () => {
      toast("Template saved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const unsaveTemplate = api.user.unsaveTemplate.useMutation({
    onSuccess: async () => {
      toast("Template unsaved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const options = { code: CodeBlock, pre: Pre };
  return (
    <div>
      <PageHeader
        heading="Inspiring Templates to Use"
        text="Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects"
      />

      <div className="mt-8">
        {/* <p className="text-center">This template is part of the <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>Next.js handbook</Link>.</p> */}

        <div className="mt-4 flex items-center justify-center gap-4">
          <Link
            href={"githubUrl"}
            target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
          >
            <Icons.gitHub className="mr-3 h-5 w-5" /> Github
          </Link>

          {/* Save / Unsave Buttons */}

          {template?.myTemplates && template.myTemplates.length > 0 ? (
            <>
              {unsaveTemplate.isLoading ? (
                <Loader
                  className="items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              ) : (
                <Button
                  variant="secondary"
                  className="items-center gap-2"
                  onClick={() => unsaveTemplate.mutate({ id: template.id })}
                >
                  <Icons.star className="h-4 w-4 fill-white" />
                  <span>Unsave</span>
                </Button>
              )}
            </>
          ) : (
            <>
              {saveTemplate.isLoading ? (
                <Loader
                  className="items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              ) : (
                <Button
                  variant="secondary"
                  className="items-center gap-2"
                  onClick={() => saveTemplate.mutate({ id: template.id })}
                >
                  <Icons.star className="h-4 w-4" />
                  <span>Save</span>
                </Button>
              )}
            </>
          )}
        </div>
      </div>

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
          {template?.content}
        </Markdown>
      </div>
    </div>
  );
}
