"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { LayoutTemplate } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <LayoutTemplate className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/handbooks"
          className={buttonVariants({
            variant: pathname?.startsWith("/handbooks") ? "secondary" : "ghost",
            size: "sm",
          })}
        >
          Handbooks
        </Link>
        <Link
          href="/templates"
          className={buttonVariants({
            variant: pathname?.startsWith("/templates") ? "secondary" : "ghost",
            size: "sm",
          })}
        >
          Templates
        </Link>
        <Link
          href="/guides"
          className={buttonVariants({
            variant: pathname?.startsWith("/guides") ? "secondary" : "ghost",
            size: "sm",
          })}
        >
          Guides
        </Link>
        <Link
          href="/resources"
          className={buttonVariants({
            variant: pathname?.startsWith("/resources") ? "secondary" : "ghost",
            size: "sm",
          })}
        >
          Resources
        </Link>
      </nav>
    </div>
  );
}
