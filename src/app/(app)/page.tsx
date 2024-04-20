import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeroImage,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Home() {
  return (
    <main className="container relative min-h-screen">
      <PageHeroImage />

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

      <section className="grid gap-6 py-8 md:grid-cols-2 md:py-12 md:pb-8 lg:grid-cols-3 lg:py-16 lg:pb-20">
        <Card className="flex flex-col bg-muted/50">
          <CardHeader>
            <LibraryBig className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Handbooks</CardTitle>
            <CardDescription>
              Handbooks are a general collection of templates, guides and
              resources for specific technologies or parts of development.
            </CardDescription>
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
            <CardDescription>
              Inspiring templates to use for learning new technologies on real
              life examples and use cases.
            </CardDescription>
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
              Comprehensive guides for web development technologies and
              frameworks, inlcuding general web development topics.
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
              A collection of resources to help you learn and grow as a web
              developer, including tools, libraries and more.
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
            <CardDescription>
              Sandbox for testing your code on fly, supporting JS, TS and PHP.
              Coming soon!
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-muted/50">
          <CardHeader>
            <Sparkles className="mx-auto mb-8 h-40 w-40 text-primary/70" />
            <CardTitle>Save your favourite resources!</CardTitle>
            <CardDescription>
              Save all of your favourite handbooks, templates, guides and
              resources and access them anytime from your profile.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <p className="mb-12 text-center leading-7 [&:not(:first-child)]:mt-6">
          Technologies are constantly evolving and changing. Stay up-to-date
          <br />
          with the latest technologies and frameworks.
        </p>
        <TechnologyCardCarousel />
      </section>

      <section className="py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <h1 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
          FAQs
        </h1>
        <p className="mb-12 text-center leading-7">
          Everything you need to know about Code Repo
        </p>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Code Repo? </AccordionTrigger>
              <AccordionContent>
                Code Repo is a comprehensive repository of web technology
                examples and documentation for developers. It includes
                handbooks, templates, guides and resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who is Code Repo for? </AccordionTrigger>
              <AccordionContent>
                Code Repo is for developers who want to learn new technologies
                and frameworks, and improve their skills by exploring real life
                examples and use cases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I submit new resources or ideas for Code Repo?
              </AccordionTrigger>
              <AccordionContent>
                You can submit new resources or ideas for Code Repo by opening
                an issue on GitHub or by creating a pull request with your
                changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How often are handbooks, templates, guides and resources added?
              </AccordionTrigger>
              <AccordionContent>
                New handbooks, templates, guides and resources are added
                regularly. Check back often for updates!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                When will the Playground be available?
              </AccordionTrigger>
              <AccordionContent>
                The Playground is currently under development and will be
                available soon. Stay tuned for updates!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-8 md:py-12 md:pb-8 lg:py-16 lg:pb-20">
        <Card className="mx-auto max-w-6xl bg-muted/50 p-6 py-10 md:p-20">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-2 scroll-m-20 pb-2 text-center text-4xl font-semibold tracking-tight first:mt-0">
              Driving Innovation Through Open Source
            </h1>
            <p className="text-center leading-7 text-muted-foreground">
              Through active engagement with contributors and users, we aim to
              create a collaborative environment where ideas are shared, issues
              are addressed, and the project evolves to meet the ever-changing
              needs of web development.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
