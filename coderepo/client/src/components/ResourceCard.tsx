import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Resource } from "@/types/resources";
import Link from "next/link";

const ResourceCard = ({ link, name, description }: Resource) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-2 border-muted rounded-lg p-8 relative group flex flex-col gap-8 h-full">
      <hgroup className="flex flex-col">
        <h1 className="text-2xl font-semibold text-foreground font-heading dark:text-primary-light mb-2 text-left">
          {name}
        </h1>
        <p className="text-md text-muted-foreground dark:text-muted-light text-left">
          {description}
        </p>
      </hgroup>

      <Link href={link} target="_blank" className={cn(buttonVariants({ variant: "secondary" }), "mt-auto gap-3 font-heading")}>
        <Icons.externalLink className="w-4 h-4" /> View Resource
      </Link>
    </div>
  );
};
export default ResourceCard;
