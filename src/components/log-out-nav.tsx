"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogOutNav = () => {
  const logoutUser = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex w-full justify-start"
      onClick={logoutUser}
    >
      <LogOut className="mr-3 h-5 w-5" />
      <span>Logout</span>
    </Button>
  );
};

export default LogOutNav;
