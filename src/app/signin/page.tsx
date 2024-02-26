import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import PageHeader from "~/components/PageHeader";
import SignInForm from "~/app/signin/SignInForm";

import { getServerAuthSession } from "~/server/auth";
import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign in",
    description:
      "Enter your credentials to access your account. If you don't have an account, you can sign up for free.",
  };
}

export default async function SignInPage() {
  noStore();
  const session = await getServerAuthSession();

  if (session) {
    redirect("/profile");
  }

  return (
    <main className="min-h-screen pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Sign in"
        text="Enter your credentials to access your account"
      />

      <section className="container mt-20 max-w-lg">
        <SignInForm />
      </section>
    </main>
  );
}
