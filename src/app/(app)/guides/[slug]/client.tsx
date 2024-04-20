"use client";
import Link from "next/link";
import { toast } from "sonner";
import { Icons } from "@/components/icons";
import Loader from "@/components/loader";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import "@/styles/mdx.css";

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
      toast("Guide saved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const unsaveGuide = api.user.unsaveGuide.useMutation({
    onSuccess: async () => {
      toast("Guide unsaved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

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
      <div className="mb-14 flex gap-4">
        <Link
          href="/guides"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          <Icons.back className="mr-2 h-5 w-5" />
          <span>All guides</span>
        </Link>

        {/* Save / Unsave Buttons */}
        {guide?.myGuides && guide.myGuides.length > 0 ? (
          <>
            {unsaveGuide.isPending ? (
              <div className={buttonVariants({ variant: "secondary" })}>
                <Loader
                  className="items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              </div>
            ) : (
              <Button
                variant="secondary"
                className="items-center gap-2"
                onClick={() => unsaveGuide.mutate({ id: guide.id })}
              >
                <Icons.star className="h-4 w-4 fill-foreground" />
                Unsave
              </Button>
            )}
          </>
        ) : (
          <>
            {saveGuide.isPending ? (
              <div className={buttonVariants({ variant: "secondary" })}>
                <Loader
                  className="items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              </div>
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
    </>
  );
}
