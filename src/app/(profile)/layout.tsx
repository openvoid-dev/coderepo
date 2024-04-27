import { Icons } from "@/components/icons";
import SignOut from "@/components/sign-out";
import Navbar from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getServerAuthSession } from "@/server/auth";
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Profile",
    description:
      "Your Profile Page. Manage your templates, guides, and resources.",
  };
}

export default async function ProfileLayout({ children }: AppLayoutProps) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <Navbar />
      <div className="container flex min-h-screen gap-6 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        {/* Profile Navbar */}
        <aside className="flex w-1/5 flex-col">
          {/* Links */}
          <div className="flex flex-col gap-4">
            <Link
              href="/profile"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "flex  justify-start",
              )}
            >
              <Icons.profile className="mr-3 h-5 w-5" /> Profile
            </Link>
            <Link
              href="/profile/guides"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "flex  justify-start",
              )}
            >
              <Icons.guide className="mr-3 h-5 w-5" /> <span>Saved Guides</span>
            </Link>
            <Link
              href="/profile/resources"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "flex  justify-start",
              )}
            >
              <Icons.resource className="mr-3 h-5 w-5" />{" "}
              <span>My Resources</span>
            </Link>

            {/* Admin Links */}
            {session.user.role === "ADMIN" && (
              <>
                <hr />
                <Link
                  href="/admin/templates"
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "lg",
                    }),
                    "flex  justify-start",
                  )}
                >
                  <Icons.template className="mr-3 h-5 w-5" /> Edit Templates
                </Link>
                <Link
                  href="/admin/guides"
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "lg",
                    }),
                    "flex  justify-start",
                  )}
                >
                  <Icons.guide className="mr-3 h-5 w-5" /> Edit Guides
                </Link>
                <Link
                  href="/profile/admin/resources"
                  className={cn(
                    buttonVariants({
                      variant: "secondary",
                      size: "lg",
                    }),
                    "flex  justify-start",
                  )}
                >
                  <Icons.resource className="mr-3 h-5 w-5" /> Edit Resources
                </Link>
              </>
            )}

            <hr />
            <SignOut />
          </div>
        </aside>
        <main className="w-4/5">{children}</main>
      </div>
    </>
  );
}
