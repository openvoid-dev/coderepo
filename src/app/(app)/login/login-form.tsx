"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Loader from "@/components/loader";
import { Icons } from "@/components/icons";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onAuthSignIn = async (provider: string) => {
    setIsLoading(true);

    try {
      await signIn(provider, { redirect: true, callbackUrl: "/profile" });
      toast(
        "You have been successfully signed in. Redirecting to your profile.",
      );
    } catch (error) {
      // TODO: Set error message with toast
      toast("Event has been created.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) <Loader />;

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onAuthSignIn("github")}
          >
            <Icons.gitHub className="mr-4 h-5 w-5" />
            <span>Login with GitHub</span>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onAuthSignIn("google")}
          >
            <Icons.google className="mr-4 h-5 w-5" />
            <span>Login with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
