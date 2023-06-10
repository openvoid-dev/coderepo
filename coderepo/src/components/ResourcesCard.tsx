import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Icons } from "./Icons";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = {
  className?: string;
  title: string;
  description: string;
  filters: { title: string }[];
  href: string;
};

export function ResourcesCard({
  className,
  title,
  description,
  filters,
  href,
}: CardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={href} className="w-full" target="_blank">
          <Button className="w-full">
            <Icons.externalLink className="mr-2 h-4 w-4" /> View Resource
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
