"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "~/components/Icons";
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

  // * Get parents and children
  const parentPages = templatePages?.filter((page) => !page.parentId);
  const childrenPages = templatePages?.filter((page) => page.parentId);

  // * Group children by parent
  const sortedTemplatePages = parentPages?.map((parent) => {
    const children = childrenPages?.filter(
      (child) => child.parentId === parent.id,
    );
    return {
      ...parent,
      children,
    };
  });

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
                "flex w-full items-center rounded-md p-2 text-muted-foreground hover:text-foreground",
                pathname === `/templates/${templateSlug}`
                  ? "bg-muted text-foreground"
                  : "",
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
            {sortedTemplatePages?.map((page) => (
              <>
                {page.children.length > 0 ? (
                  <Dropdown
                    key={page.id}
                    name={page.name}
                    slug={page.slug}
                    pathname={pathname}
                    templateSlug={templateSlug}
                  >
                    <div className={`ml-4 border-l-2 pl-4`}>
                      {page.children.map((child) => (
                        <Link
                          href={`/templates/${templateSlug}/${page.slug}/${child.slug}`}
                          key={child.id}
                          className={cn(
                            "flex w-full items-center rounded-md p-2 text-muted-foreground hover:text-foreground",
                            pathname ===
                              `/templates/${templateSlug}/${page.slug}/${child.slug}`
                              ? "bg-muted text-foreground"
                              : "",
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </Dropdown>
                ) : (
                  <Link
                    key={page.id}
                    href={`/templates/${templateSlug}/${page.slug}`}
                    className={cn(
                      "flex w-full items-center rounded-md p-2 text-muted-foreground hover:text-foreground",
                      pathname === `/templates/${templateSlug}/${page.slug}`
                        ? "bg-muted text-foreground"
                        : "",
                    )}
                  >
                    {page.name}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TemplateNavigation;

function Dropdown({
  children,
  slug,
  name,
  templateSlug,
  pathname,
}: {
  children: React.ReactNode;
  slug: string;
  name: string;
  templateSlug: string;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (isOpen && pathname === `/templates/${templateSlug}/${slug}`) {
      return setIsOpen(false);
    }

    setIsOpen(true);
  };

  return (
    <div>
      <Link
        href={`/templates/${templateSlug}/${slug}`}
        className={cn(
          "flex w-full items-center rounded-md p-2 text-muted-foreground hover:text-foreground",
          pathname === `/templates/${templateSlug}/${slug}`
            ? "bg-muted text-foreground"
            : "",
        )}
        onClick={toggleDropdown}
      >
        {name}

        <Icons.arrowRight className="ml-auto h-4 w-4" />
      </Link>

      {isOpen && children}
    </div>
  );
}
