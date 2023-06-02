import Link from "next/link";

import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { DocsSearch } from "@/components/search";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { SiteFooter } from "@/components/site-footer";
import { CommandMenu } from "@/components/command-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { indexConfig } from "@/config/indexConfig";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={indexConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter items={indexConfig.mainNav} />
    </div>
  );
}
