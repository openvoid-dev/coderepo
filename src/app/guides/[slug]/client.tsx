"use client";

import Image from "next/image";
import Link from "next/link";
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

interface SingleGuidesPageClientProps {
  initialData: {
    name: string;
    imageUrl: string;
    description: string;
    content: string;
    id: number;
    tag: {
      name: string;
      id: number;
      icon: string;
    };
    myGuides: {
      id: number;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      guideId: number;
    }[];
  };
  slug: string;
}

export default function SingleGuidesPageClient({
  initialData,
  slug,
}: SingleGuidesPageClientProps) {
  const { data: guide } = api.guide.getGuideBySlug.useQuery(
    { slug: slug },
    {
      initialData: initialData,
      refetchOnMount: false,
    },
  );

  const saveGuide = api.user.saveGuide.useMutation({
    onSuccess: async () => {
      toast("Template saved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const unsaveGuide = api.user.unsaveGuide.useMutation({
    onSuccess: async () => {
      toast("Template unsaved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const options = { code: CodeBlock, pre: Pre };

  if (!guide) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="mt-20 text-center text-xl text-secondary-foreground">
          No guide found.
        </p>
        <Link
          href="/guides"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          Go back to guides.
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex justify-center gap-4">
        <Link
          href="/guides"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          All guides
        </Link>

        {/* Save / Unsave Buttons */}
        {guide?.myGuides && guide.myGuides.length > 0 ? (
          <>
            {unsaveGuide.isLoading ? (
              <Loader
                className="items-center justify-center px-4"
                svgClassName="h-6 w-6"
              />
            ) : (
              <Button
                variant="secondary"
                className="items-center gap-2"
                onClick={() => unsaveGuide.mutate({ id: guide.id })}
              >
                <Icons.star className="h-4 w-4 fill-white" />
                Unsave
              </Button>
            )}
          </>
        ) : (
          <>
            {saveGuide.isLoading ? (
              <Loader
                className="items-center justify-center px-4"
                svgClassName="h-6 w-6"
              />
            ) : (
              <Button
                variant="secondary"
                className="items-center gap-2"
                onClick={() => saveGuide.mutate({ id: guide.id })}
              >
                <Icons.star className="h-4 w-4" />
                Save
              </Button>
            )}
          </>
        )}
      </div>

      <PageHeader heading={guide.name} background="none" />

      <article className="container mt-10 max-w-3xl">
        <Markdown
          className="prose prose-invert min-w-full"
          components={options}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeSanitize,
            [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
          ]}
        >
          {guide.content}
        </Markdown>
      </article>
    </>
  );
}
