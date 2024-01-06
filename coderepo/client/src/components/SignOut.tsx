"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
    const logoutUser = async () => {
        await signOut({ callbackUrl: "/" })
    }

    return (
        <section className="container max-w-lg mt-20">
            <div className="flex flex-col gap-4">
                <Button variant="secondary" onClick={logoutUser} >Sign out</Button>
            </div>
        </section>
    )
}

export default SignOut;