import PageHeader from "@/components/PageHeader";
import SignOut from "@/components/SignOut";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    // * If the user is logged in, redirect to the profile page
    redirect("/signin");
  }

  console.log(session);

  const logoutUser = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading={`Welcome back, ${session.user?.email}`}
        text={`You are currently logged in as ${session.user?.email}`}
      />

      <SignOut />
    </main>
  );
}
