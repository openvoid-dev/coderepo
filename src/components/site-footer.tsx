import { siteConfig } from "@/config/site";
import { api } from "@/trpc/server";
import { LayoutTemplate } from "lucide-react";
import Link from "next/link";

const Footer = async () => {
  const latestGuides = await api.guide.getLatestGuides();

  return (
    <footer className="py-6">
      <div className="container flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="max-w-xs">
          <Link href="/" className="mb-2 flex items-center space-x-2">
            <LayoutTemplate className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            A Comprehensive Repository of Web Technology Examples and
            Documentation for Developers
          </p>
        </div>

        <div className="flex max-w-2xl flex-col gap-8 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-4">
            <p>Handbooks</p>
            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Templates</p>
            <div className="flex flex-col gap-2"></div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Guides</p>
            <div className="flex flex-col gap-2">
              {latestGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={`/guides/${guide.slug}`}
                  className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:underline"
                >
                  {guide.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>Resources</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/resources/useful-blogs"
                className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:underline"
              >
                Useful Blogs
              </Link>
              <Link
                href="/resources/GitHub-Repositories"
                className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:underline"
              >
                GitHub Repositories
              </Link>
              <Link
                href="/resources/icons"
                className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:underline"
              >
                Icons
              </Link>
              <Link
                href="/resources/fonts"
                className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:underline"
              >
                Fonts
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Made by{" "}
          <a
            href="https://openvoid.dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Open Void
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
