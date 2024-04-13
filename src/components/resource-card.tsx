"use client";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import Loader from "@/components/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ResourceProps {
  url: string;
  name: string;
  description: string;
  id: number;
  isSaved: boolean;
}

const ResourceCard = ({
  url,
  name,
  description,
  id,
  isSaved,
}: ResourceProps) => {
  const saveResource = api.user.saveResource.useMutation({
    onSuccess: async () => {
      toast("Resource saved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  const unsaveResource = api.user.unsaveResource.useMutation({
    onSuccess: async () => {
      toast("Resource unsaved successfully");
    },
    onError: (error) => {
      toast(error.message);
    },
  });

  return (
    <Card className="flex h-full flex-col bg-secondary/50">
      <CardHeader>
        {/* <h1 className="dark:text-primary-light font-heading mb-2 text-left text-2xl font-semibold text-foreground"> */}
        <CardTitle>{name}</CardTitle>
        {/* </h1> */}
        {/* <p className="text-md dark:text-muted-light line-clamp-3 text-left text-muted-foreground"> */}
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
        {/* </p> */}
      </CardHeader>

      <CardContent className="mt-auto flex flex-col gap-4">
        {/* <div className="mt-auto flex flex-col gap-4"> */}
        <div className="mt-auto flex justify-between gap-4">
          {/* Save / Unsave Buttons */}
          {isSaved ? (
            <>
              {unsaveResource.isPending ? (
                <Loader
                  className="flex flex-1 items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              ) : (
                <Button
                  variant="ghost"
                  className="flex flex-1 items-center gap-2"
                  onClick={() => unsaveResource.mutate({ id: id })}
                >
                  <Icons.star className="h-4 w-4 fill-white" />
                  <span>Unsave</span>
                </Button>
              )}
            </>
          ) : (
            <>
              {saveResource.isPending ? (
                <Loader
                  className="flex flex-1 items-center justify-center px-4"
                  svgClassName="h-6 w-6"
                />
              ) : (
                <Button
                  variant="ghost"
                  className="flex flex-1 items-center gap-2"
                  onClick={() => saveResource.mutate({ id: id })}
                >
                  <Icons.star className="h-4 w-4" />
                  <span>Save</span>
                </Button>
              )}
            </>
          )}

          <Button
            variant="ghost"
            className="flex flex-1 items-center gap-2"
            onClick={() => navigator.clipboard.writeText(url)}
          >
            <Icons.copy className="h-4 w-4" />
            <span>Copy link</span>
          </Button>
        </div>

        <Link
          href={url}
          target="_blank"
          className={cn(buttonVariants({ variant: "secondary" }), " gap-3")}
        >
          <Icons.externalLink className="h-4 w-4" /> View Resource
        </Link>
        {/* </div> */}
      </CardContent>
    </Card>
  );
};
export default ResourceCard;
