import AuthForm from "@/components/AuthForm";
import SignUpForm from "@/components/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
    const session = await getServerSession();

    if (session) {
        // * If the user is logged in, redirect to the profile page
        redirect("/profile")
    }

    return (
        <main className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
            <hgroup className="container flex flex-col items-center gap-6 max-w-7xl">
                <h1 className="font-bold text-text-heading text-center text-4xl md:text-5xl pt-4 pb-2 overflow-hidden">
                    <span className="
                  bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:90%_40%]
                  from-primary to-primary dark:from-primary dark:to-primary
              ">
                        Sign Up
                    </span>
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
                    Create an account to access more features
                </p>
            </hgroup>

            <section className="container max-w-lg mt-20">
                <SignUpForm />
            </section>
        </main>
    )
}