import { ExampleProjectCard } from "@/components/ExampleProjectCard";
import TechnologyCard from "@/components/TechnologyCard";
import { buttonVariants } from "@/components/ui/button";
import { mainConfig } from "@/config/main";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[74rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-sky-100">
            Code Repo: Exploring Web Technologies and Documentation
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Comprehensive Repository of Web Technology Examples and
            Documentation for Developers
          </p>
          <div className="space-x-4">
            <Link
              href="/examples"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Examples
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="container space-y-6 bg-sky-100 py-8 dark:bg-neutral-950/50 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl dark:text-sky-100">
            Inspiring Example Projects
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Exploring the Possibilities of Cutting-Edge Web Development
            Technologies: Showcasing Innovative and Inspiring Projects
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          {mainConfig.exampleProjects.map((exampleProject) => (
            <ExampleProjectCard
              key={exampleProject.title}
              title={exampleProject.title}
              description={exampleProject.description}
              github={exampleProject.github}
              href={exampleProject.href}
            />
          ))}
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            These example projects are works in progress, showcasing ongoing
            development and iterative refinement as they evolve to achieve
            greater functionality, aesthetics, and user experience.
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className="container space-y-6  py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl dark:text-sky-100">
            Cutting-Edge Technologies Empowering Digital Innovation
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Empowering Dynamic and Engaging Web Development with the Latest Web
            Technologies
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {mainConfig.technologies.map((technology) => (
            <TechnologyCard
              key={technology.title}
              title={technology.title}
              description={technology.description}
              icon={technology.icon}
            />
          ))}
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            These section highlights the overarching benefits of the
            technologies mentioned while emphasizing their ability to enable
            dynamic and engaging web development.
          </p>
        </div>
      </section>

      {/* Open Source */}
      <section className="container py-8 md:py-12 lg:py-24 bg-sky-100 dark:bg-neutral-950/50">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl dark:text-sky-100">
            Driving Innovation Through Open Source
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Through active engagement with contributors and users, we aim to
            create a collaborative environment where ideas are shared, issues
            are addressed, and the project evolves to meet the ever-changing
            needs of web development.{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}
