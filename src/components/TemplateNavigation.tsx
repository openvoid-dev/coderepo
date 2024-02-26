"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface TemplateNavigationProps {
  initialTemplatePages: {
    id: number;
    name: string;
    slug: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    parentId: number | null;
    templateId: number;
  }[];
  templateId: number;
  templateSlug: string;
}

const TemplateNavigation = ({
  initialTemplatePages,
  templateId,
  templateSlug,
}: TemplateNavigationProps) => {
  const { data: templatePages } = api.template.getTemplatePages.useQuery(
    {
      id: templateId,
    },
    {
      initialData: initialTemplatePages,
      refetchOnMount: false,
    },
  );

  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto  py-6 pr-2 md:sticky md:block lg:py-10">
      <div className="w-full">
        <div className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            Getting Started
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link
              className={cn(
                "flex w-full items-center rounded-md p-2 hover:underline",
                pathname === `/templates/${templateSlug}` ? "bg-muted" : "",
              )}
              target=""
              rel=""
              href={`/templates/${templateSlug}`}
            >
              Introduction
            </Link>
          </div>
        </div>
        <div className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            Documentation
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {templatePages?.map((page) => (
              <Link
                href={`/templates/${templateSlug}/${page.slug}`}
                key={page.id}
                className={cn(
                  "flex w-full items-center rounded-md p-2 hover:underline",
                  pathname === `/tmeplates/${templateSlug}/${page.slug}`
                    ? "bg-muted"
                    : "",
                )}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TemplateNavigation;
