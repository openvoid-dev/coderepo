import React from "react";
import ProfileSidebar from "@/app/profile/ProfileSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { getCurrentUser } from "@/utils/user";

export default async function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    if (!session?.user?.email) {
        redirect("/signin");
    }

    // * Prefetch the user information
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["profile-sidebar-user-information"],
        queryFn: async () => await getCurrentUser(session.user?.email ?? ""),
    });

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16 container flex gap-6">
            {/* Profile Navbar */}
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ProfileSidebar session={session} />
            </HydrationBoundary>

            {/* Children */}
            <section className="w-4/5">{children}</section>
        </main>
    );
}
