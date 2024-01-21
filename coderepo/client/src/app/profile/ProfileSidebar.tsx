"use client";

import { Icons } from "@/components/Icons";
import SignOut from "@/components/SignOut";
import { buttonVariants } from "@/components/ui/button";
import { calculateTimeDifference, cn } from "@/lib/utils";
import { getCurrentUser } from "@/utils/user";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const ProfileSidebar = ({ session }: { session: any }) => {
    const {
        isLoading,
        error,
        data: user,
    } = useQuery({
        queryKey: ["profile-sidebar-user-information", session.user.email],
        queryFn: async () => await getCurrentUser(session.user.email),
    });

    // * If the user is still loading, show a loading message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // * If there was an error, show the error message
    if (error) {
        return <div>{error.message}</div>;
    }

    if (!user) {
        return <div>Something went wrong...</div>;
    }

    // * Calculate the users age
    const userAge = calculateTimeDifference(`${user.createdAt}`);

    return (
        <section className="w-1/5 flex flex-col">
            <hgroup>
                <h1 className="text-xl break-words font-heading font-semibold">
                    {user.username}
                </h1>
                <p className="text-muted-foreground mt-2">Joined {userAge}</p>
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
                    href="/profile/templates"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "flex  justify-start"
                    )}
                >
                    <Icons.template className="w-5 h-5 mr-3" /> My Templates
                </Link>
                <Link
                    href="/profile/guides"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "flex  justify-start"
                    )}
                >
                    <Icons.guide className="w-5 h-5 mr-3" /> My Guides
                </Link>
                <Link
                    href="/profile/resources"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "flex  justify-start"
                    )}
                >
                    <Icons.resource className="w-5 h-5 mr-3" /> My Resources
                </Link>

                {/* Admin Links */}
                {user.userRole === "admin" && (
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
    );
};

export default ProfileSidebar;
