"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  const logoutUser = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Button
      variant="destructive"
      size="lg"
      className="flex justify-start"
      onClick={logoutUser}
    >
      <Icons.logout className="mr-3 h-5 w-5" /> Logout
    </Button>
  );
};

export default SignOut;
