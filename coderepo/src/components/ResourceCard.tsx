"use client";

import { Icons } from "~/components/Icons";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { api } from "~/trpc/react";
import { toast } from "sonner";

export interface ResourceProps {
    url: string;
    name: string;
    description: string;
    id: number;
    isSaved: boolean;
}

const ResourceCard = ({ url, name, description, id, isSaved }: ResourceProps) => {
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
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-2 border-muted rounded-lg p-8 relative group flex flex-col gap-8 h-full">
            <hgroup className="flex flex-col">
                <h1 className="text-2xl font-semibold text-foreground font-heading dark:text-primary-light mb-2 text-left">
                    {name}
                </h1>
                <p className="text-md text-muted-foreground dark:text-muted-light text-left line-clamp-3">
                    {description}
                </p>
            </hgroup>

            <div className="flex flex-col gap-4 mt-auto">
                <div className="flex justify-between gap-4 mt-auto">
                    {/* Save / Unsave Buttons */}
                    {isSaved ? (
                        <Button variant="ghost" className="flex items-center gap-2 flex-1" onClick={() => unsaveResource.mutate({ id: id })}>
                            <Icons.star className="w-4 h-4 fill-white" />
                            <span>Unsave</span>
                        </Button>
                    ) : (
                        <Button variant="ghost" className="flex items-center gap-2 flex-1" onClick={() => saveResource.mutate({ id: id })}>
                            <Icons.star className="w-4 h-4" />
                            <span>Save</span>
                        </Button>
                    )}

                    <Button variant="ghost" className="flex items-center gap-2 flex-1" onClick={() =>
                        navigator.clipboard.writeText(
                            url
                        )
                    }>
                        <Icons.copy className="w-4 h-4" />
                        <span>Copy link</span>
                    </Button>
                </div>

                <Link href={url} target="_blank" className={cn(buttonVariants({ variant: "secondary" }), " gap-3")}>
                    <Icons.externalLink className="w-4 h-4" /> View Resource
                </Link>
            </div>
        </div>
    );
};
export default ResourceCard;
