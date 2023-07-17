"use client";

import { ChevronDown, Circle, Plus, Star } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExampleProject, ExampleProjectItem } from "@/types";
import Link from "next/link";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

interface ExampleProjectCardProps {
  title: ExampleProjectItem["title"];
  href: ExampleProjectItem["href"];
  github: ExampleProjectItem["github"];
  description: ExampleProjectItem["description"];
  filters?: ExampleProject["filters"];
}

export function ExampleProjectCard({
  title,
  href,
  github,
  description,
  filters,
}: ExampleProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-3">
          <a href={github} target="_blank" className="w-fit block">
            <CardTitle className="">coderepo/{title}</CardTitle>
          </a>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            TypeScipt
          </div>
          <div className="flex items-center">
            <Star className="mr-1 h-3 w-3" />
            10k
          </div>
          <div>Updated April 2023</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center w-full space-x-4">
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "flex-1"
            )}
          >
            <Icons.file className="mr-2 h-4 w-4" />
            Docs
          </Link>
          <Link
            href={github}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "flex-1"
            )}
          >
            <Icons.file className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
