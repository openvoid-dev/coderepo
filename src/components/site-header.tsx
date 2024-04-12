import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "@/components/main-nav";
import { Icons } from "@/components/icons";

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-background py-2">
      <nav className="container flex items-center justify-between">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center space-x-2">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "icon",
                  }),
                  "w-9 px-0",
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ModeToggle />
            <Link href="/signup" className={buttonVariants({ size: "sm" })}>
              Login
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
