"use client";

import { ChevronDown, Circle, Plus, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExampleProject, ExampleProjectItem } from "@/types";
import Link from "next/link";
import { Icons } from "./Icons";

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
            <CardTitle className="underline underline-offset-2 hover:decoration-sky-300 decoration-2 w-fit">
              coderepo/{title}
            </CardTitle>
          </a>
          <CardDescription>{description}</CardDescription>
        </div>

        <Link href={href}>
          <Button variant="default" className="px-3">
            <Icons.file className="mr-2 h-4 w-4" />
            Docs
          </Button>
        </Link>
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
    </Card>
  );
}
