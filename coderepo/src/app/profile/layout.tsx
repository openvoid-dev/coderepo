import Link from "next/link";
import { redirect } from "next/navigation";
import { Icons } from "~/components/Icons";
import SignOut from "~/components/SignOut";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getServerAuthSession } from "~/server/auth";

export default async function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerAuthSession();

    if (!session) {
        redirect("/signin")
    }

    // Calculate the users age
    // const userAge = calculateTimeDifference(`${session.user.createdAt}`);

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16 container flex gap-6">
            {/* Profile Navbar */}
            <section className="w-1/5 flex flex-col">
                <hgroup>
                    <h1 className="text-xl break-words font-heading font-semibold">
                        {session.user.name}
                    </h1>
                    {/* <p className="text-muted-foreground mt-2">Joined {userAge}</p> */}
                </hgroup>

                {/* Links */}
                <div className="flex flex-col gap-4 mt-10">
                    <Link
                        href="/profile"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "flex  justify-start"
                        )}
                    >
                        <Icons.profile className="w-5 h-5 mr-3" /> Profile
                    </Link>
                    <Link
                        href="/profile/my-templates"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "flex  justify-start"
                        )}
                    >
                        <Icons.template className="w-5 h-5 mr-3" /> My Templates
                    </Link>
                    <Link
                        href="/profile/my-guides"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "flex  justify-start"
                        )}
                    >
                        <Icons.guide className="w-5 h-5 mr-3" /> My Guides
                    </Link>
                    <Link
                        href="/profile/my-resources"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "flex  justify-start"
                        )}
                    >
                        <Icons.resource className="w-5 h-5 mr-3" /> My Resources
                    </Link>

                    {/* Admin Links */}
                    {session.user.role === "ADMIN" && (
                        <>
                            <hr />
                            <Link
                                href="/profile/admin/templates"
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "lg",
                                    }),
                                    "flex  justify-start"
                                )}
                            >
                                <Icons.template className="w-5 h-5 mr-3" /> Edit
                                Templates
                            </Link>
                            <Link
                                href="/profile/admin/guides"
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "lg",
                                    }),
                                    "flex  justify-start"
                                )}
                            >
                                <Icons.guide className="w-5 h-5 mr-3" /> Edit Guides
                            </Link>
                            <Link
                                href="/profile/admin/resources"
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "lg",
                                    }),
                                    "flex  justify-start"
                                )}
                            >
                                <Icons.resource className="w-5 h-5 mr-3" /> Edit
                                Resources
                            </Link>
                        </>
                    )}

                    <hr />
                    <SignOut />
                </div>
            </section>

            {/* Children */}
            <section className="w-4/5">{children}</section>
        </main>
    )
}