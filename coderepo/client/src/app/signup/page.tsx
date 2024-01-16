import AuthForm from "@/components/AuthForm";
import PageHeader from "@/components/PageHeader";
import SignUpForm from "@/components/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession();

  if (session) {
    // * If the user is logged in, redirect to the profile page
    redirect("/profile");
  }

  return (
    <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <PageHeader
        heading="Sign Up"
        text="Create an account to access more features"
      />

      <section className="container max-w-lg mt-20">
        <SignUpForm />
      </section>
    </main>
  );
}
