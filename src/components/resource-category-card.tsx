import Link from "next/link";

import { Icons } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResourceCategoryCardProps {
  icon: keyof typeof Icons; // Add keyof typeof Icons to restrict the icon prop to valid keys of the Icons object.
  slug: string;
  name: string;
  description: string;
}

const ResourceCategoryCard = ({
  icon,
  slug,
  name,
  description,
}: ResourceCategoryCardProps) => {
  const IconComponent = Icons[icon];

  return (
    <Link href={`/resources/${slug}`}>
      <Card className="h-full bg-muted/50">
        <CardHeader>
          <IconComponent className="mx-auto mb-8 h-20 w-20 text-muted-foreground/70" />
          <CardTitle>{name}</CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        {/*
        <hgroup className="mt-10 flex flex-col">
          <h1 className="font-heading dark:text-primary-light mb-2 text-left text-2xl font-semibold text-foreground"></h1>
          <p className="text-md dark:text-muted-light line-clamp-3 text-left text-muted-foreground"></p>
        </hgroup> */}
      </Card>
    </Link>
  );
};
export default ResourceCategoryCard;
