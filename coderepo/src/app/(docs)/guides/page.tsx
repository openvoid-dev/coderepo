import Link from "next/link";

import { allGuides } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { DocsPageHeader } from "@/components/PageHeader";
import { formatDate } from "@/lib/utils";

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="Comprehensive Guides for Web Development Technologies"
        text="Empowering Aspiring Web Developers with In-Depth and Accessible Guides to Master the Cutting-Edge Technologies that Drive the Web, from HTML and CSS to JavaScript Frameworks and Beyond"
      />

      {guides?.length ? (
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {guides.map((guide) => (
            <article
              key={guide._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {guide.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h1 className="text-xl font-medium tracking-tight">
                    {guide.title}
                  </h1>
                  {guide.description && (
                    <p className="text-muted-foreground">{guide.description}</p>
                  )}
                </div>
                {guide.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(guide.date)}
                  </p>
                )}
              </div>
              <Link href={guide.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No guides published.</p>
      )}
    </div>
  );
}
