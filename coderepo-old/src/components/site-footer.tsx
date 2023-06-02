import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNavItem } from "@/types";
import Link from "next/link";

interface SiteFooterProps {
  className?: React.HTMLAttributes<HTMLElement>;
  items?: MainNavItem[];
}

export function SiteFooter({ className, items }: SiteFooterProps) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col gap-10">
        <div className="grid grid-cols-4 gap-4">
          {items?.map((item, index) => (
            <div key={item.title} className="flex flex-col">
              <h4 className="font-bold">{item.title}</h4>
              {item.links?.map((link) => (
                <Link href={link.href} key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Icons.logo />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Karlo Jurković
              </a>{" "}
              &{" "}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Antonio Obradović
              </a>
              . Hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Vercel.
              </a>{" "}
              The source code and every example project are available on{" "}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
