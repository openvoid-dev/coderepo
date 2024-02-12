import { redirect } from "next/navigation";

import PageHeader from "~/components/PageHeader";
import SignInForm from "~/app/signin/SignInForm";

import { getServerAuthSession } from "~/server/auth";

export default async function SignInPage() {
    const session = await getServerAuthSession();

    if (session) {
        redirect("/profile")
    }

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <PageHeader
                heading="Sign in"
                text="Enter your credentials to access your account"
            />

            <section className="container max-w-lg mt-20">
                <SignInForm />
            </section>
        </main>
    )
}