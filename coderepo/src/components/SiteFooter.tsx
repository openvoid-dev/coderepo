import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import ModeToggle from "@/components/ModeToggle";

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Created by{" "}
            <a
              href={siteConfig.links.karloPage}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Karlo Jurković
            </a>{" "}
            &
            <a
              href={siteConfig.links.antonioPage}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {" "}
              Antonio Obradović
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . The source code and examples are available on{" "}
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
    </footer>
  );
};

export default SiteFooter;
