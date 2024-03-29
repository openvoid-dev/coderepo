import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

import { Icons } from "~/components/Icons";
import { buttonVariants } from "~/components/ui/button";

import { HomeTemplatesClient } from "~/app/client";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";
import TechnologyCard from "~/components/TechnologyCard";
import { mainConfig } from "~/config/main";

export default async function Home() {
  noStore();
  const initialTemplatesData = await api.template.getAllTemplates.query();

  return (
    <main className="">
      {/* Hero */}
      <section className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container relative isolate flex flex-col items-center gap-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-500 to-purple-500 opacity-30 sm:left-[calc(50%-10rem)] sm:w-[82.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <Link
            href="/templates"
            className="flex items-center gap-2 rounded-full border border-red-700/75 bg-red-900/10 px-4 py-2 font-heading font-semibold text-red-500 dark:text-red-100"
          >
            Checkout new starter templates.{" "}
            <Icons.arrowRight className="h-5 w-5 font-semibold" />
          </Link>

          <h1 className="overflow-hidden pb-2 pt-4 text-center font-heading text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
            Code Repo: Exploring Web Technologies and Documentation
          </h1>
          <p className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Comprehensive Repository of Web Technology Examples and
            Documentation for Developers
          </p>
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/handbooks"
              className={cn(buttonVariants({ size: "lg", variant: "default" }))}
            >
              Handbooks
            </Link>
            <Link
              href="https://github.com/AntonioObra/coderepo"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
              )}
            >
              <Icons.gitHub className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container mb-32 grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {mainConfig.technologies.map((technology) => (
          <TechnologyCard
            key={technology.title}
            title={technology.title}
            description={technology.description}
            icon={technology.icon}
          />
        ))}
      </section>

      {/* Templates */}
      <section className="container mb-32">
        <hgroup className="flex flex-col items-center gap-2">
          <h1 className="pb-2 pt-4 text-center font-heading text-3xl font-bold md:text-4xl lg:text-6xl">
            Inspiring Templates to Use
          </h1>
          <p className="max-w-[65rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Exploring the Possibilities of Cutting-Edge Web Development
            Technologies: Showcasing Innovative and Inspiring Projects
          </p>
        </hgroup>

        <HomeTemplatesClient initialTemplatesData={initialTemplatesData} />
      </section>

      {/* Open Source */}
      <section className="container mb-32">
        <hgroup className="flex flex-col items-center gap-2">
          <h1 className="pb-2 pt-4 text-center font-heading text-3xl font-bold md:text-4xl lg:text-6xl">
            Driving Innovation Through Open Source
          </h1>
          <p className="max-w-[65rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Through active engagement with contributors and users, we aim to
            create a collaborative environment where ideas are shared, issues
            are addressed, and the project evolves to meet the ever-changing
            needs of web development.
          </p>
        </hgroup>
      </section>
    </main>
  );
}
