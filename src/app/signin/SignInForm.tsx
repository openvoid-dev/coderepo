"use client"

import { useState, } from "react"

import Loader from "~/components/Loader"
import { Icons } from "~/components/Icons"
import { Button } from "~/components/ui/button"

import { toast } from "sonner"
import { signIn } from "next-auth/react"


const SignInForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onAuthSignIn = async (provider: string) => {
        setIsLoading(true);

        try {
            await signIn(provider, { redirect: true, callbackUrl: "/profile" })
            toast("You have been successfully signed in. Redirecting to your profile.")
        } catch (error) {
            // TODO: Set error message with toast
            toast("Event has been created.")
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) (
        <Loader />
    )

    return (
        <div className="flex flex-col gap-6">
            <Button className="w-full" variant="secondary" type="button" onClick={() => onAuthSignIn("github")}>
                <Icons.gitHub className="w-5 h-5 mr-4" /> Sign in with GitHub
            </Button>

            {/* <Button className="w-full" variant="secondary" type="button" onClick={() => onAuthSignIn("google")}>
                <Icons.google className="w-5 h-5 mr-4" /> Sign in with Google
            </Button> */}
        </div>
    )
}

export default SignInForm
