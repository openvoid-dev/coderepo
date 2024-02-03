import { Icons } from "~/components/Icons";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { Circle, } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

interface TemplateCardProps {
    name: string;
    description: string;
    id: number;
    slug: string;
    githubUrl: string;
    updatedAt: Date;
}

const TemplateCard = ({ name, description, id, slug, githubUrl, updatedAt }: TemplateCardProps) => {
    const formatedDate = format(updatedAt, "dd.mm.yyyy")

    return (
        <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-2 border-muted rounded-lg p-8 relative group flex flex-col">
            <hgroup className="flex flex-col mb-8">
                <h1 className="text-xl font-semibold text-foreground font-heading dark:text-primary-light mb-2 text-left">
                    coderepo/{slug}
                </h1>
                <p className="text-sm text-muted-foreground dark:text-muted-light text-left">
                    {description}
                </p>
            </hgroup>

            <div className="flex space-x-4 text-sm text-muted-foreground mt-auto">
                <div className="flex items-center">
                    <Circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                    TypeScipt
                </div>
                <div>Updated {formatedDate}</div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
                <Link href={`/templates/${slug}`} className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                    <Icons.docs className="w-5 h-5 mr-3" /> Docs
                </Link>
                <Link href={githubUrl} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                    <Icons.gitHub className="w-5 h-5 mr-3" /> Github
                </Link>
            </div>
        </div>
    )
}

export default TemplateCard;