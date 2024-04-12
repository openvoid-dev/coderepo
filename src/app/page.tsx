import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Code2Icon,
  LayoutTemplate,
  LibraryBig,
  MoveRight,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import TechnologyCardCarousel from "@/components/technology-card-carousel";

export default async function Home() {
  return (
    <main className="container relative  min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.webp" alt="hero" fill={true} />
      </div>

      <PageHeader className="lg:pt-48">
        {/* <Announcement /> */}
        <PageHeaderHeading>
          Code Repo: Exploring Web Technologies and Documentation
        </PageHeaderHeading>
        <PageHeaderDescription>
          A Comprehensive Repository of Web Technology Examples and
          Documentation for Developers
        </PageHeaderDescription>
        <PageActions>
          <Link href="/handbooks" className={cn(buttonVariants())}>
            Handbooks
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>

      <section className="grid grid-cols-3 gap-6 py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <Card className="flex flex-col bg-muted/50">
          <CardHeader>
            <LibraryBig className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Handbooks</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Link
              href="/handbooks"
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
            >
              <span>Find out more</span>
              <MoveRight className="ml-2" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col bg-muted/50">
          <CardHeader>
            <LayoutTemplate className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Templates</CardTitle>
            <CardDescription>Inspiring Templates to Use</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Link
              href="/templates"
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
            >
              <span>Find out more</span>
              <MoveRight className="ml-2" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col bg-muted/50">
          <CardHeader>
            <Newspaper className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Guides</CardTitle>
            <CardDescription>
              Comprehensive Guides for Web Development Technologies
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Link
              href="/guides"
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
            >
              <span>Find out more</span>
              <MoveRight className="ml-2" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="flex flex-col bg-muted/50">
          <CardHeader>
            <Code2Icon className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Unlocking a Treasure Trove of Tools, Tutorials, and References for
              Seamless Web Development Success
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Link
              href="/resources"
              className={cn(buttonVariants({ variant: "link" }), "p-0")}
            >
              <span>Find out more</span>
              <MoveRight className="ml-2" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-muted/50">
          <CardHeader>
            <CodeSandboxLogoIcon className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Playground</CardTitle>
            <CardDescription>Playground to test your code</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-muted/50">
          <CardHeader>
            <Sparkles className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Save your favourite resources!</CardTitle>
            <CardDescription>
              Save all of your favourite handbooks, templates, guides and
              resources
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <p className="mb-12 text-center leading-7 [&:not(:first-child)]:mt-6">
          Cutting-Edge Technologies Empowering Digital Innovation Empowering.
          <br />
          Dynamic and Engaging Web Development with the Latest Web Technologies.
        </p>
        <TechnologyCardCarousel />
      </section>
    </main>
  );
}
