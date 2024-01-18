"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
    const logoutUser = async () => {
        await signOut({ callbackUrl: "/" })
    }

    return (
        <Button variant="destructive" size="lg" className="flex justify-start" onClick={logoutUser}>
            <Icons.logout className="w-5 h-5 mr-3" /> Logout
        </Button>
    )
}

export default SignOut;