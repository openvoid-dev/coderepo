import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "@/components/main-nav";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogOutNav from "@/components/log-out-nav";

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
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage
                      src={session?.user?.image ?? undefined}
                      alt={session.user.name ?? undefined}
                    />
                    <AvatarFallback>CR</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/profile">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <Link href="/profile/guides">
                      <DropdownMenuItem>Saved guides</DropdownMenuItem>
                    </Link>
                    <Link href="/profile/resources">
                      <DropdownMenuItem>Saved resources</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </Link>
                  <Link href="mailto:coderepo@obradovic.dev">
                    <DropdownMenuItem>Support</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <LogOutNav />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className={buttonVariants({ size: "sm" })}>
                Login
              </Link>
            )}
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
