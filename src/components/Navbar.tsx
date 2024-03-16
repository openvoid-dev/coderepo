import Link from "next/link";
import { Icons } from "~/components/Icons";
import ModeToggle from "~/components/ModeToggle";
import NavbarLinks from "~/components/NavbarLinks";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getServerAuthSession } from "~/server/auth";

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <header className="sticky top-0 z-50 bg-background/70 py-4 backdrop-blur-3xl">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold">
          Code Repo
        </Link>

        <NavbarLinks />

        <div className="flex items-center gap-3">
          <ModeToggle />

          <Link
            href="https://github.com/AntonioObra/coderepo"
            target="_blank"
            className={cn(
              buttonVariants({ size: "sm", variant: "ghost" }),
              "gap-2 font-bold text-muted-foreground",
            )}
          >
            <Icons.gitHub className="h-4 w-4" /> 7
          </Link>

          {session ? (
            <Link
              href="/profile"
              className={cn(
                buttonVariants({ size: "sm" }),
                "font-heading font-bold",
              )}
            >
              Profile
            </Link>
          ) : (
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ size: "sm" }),
                "font-heading font-bold",
              )}
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
