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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Home() {
  return (
    <main className="container relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill={true}
          className="block h-full w-full object-cover [object-position:center] "
        />
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

      <section className="grid gap-6 py-8 md:grid-cols-2 md:py-12 md:pb-8 lg:grid-cols-3 lg:py-16 lg:pb-20">
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
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
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
