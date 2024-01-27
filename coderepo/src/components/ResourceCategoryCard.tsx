import Link from "next/link";

import { Icons } from "~/components/Icons";

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
            <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background border-2 border-muted rounded-lg p-8 relative group h-full">
                <div className="p-4 w-fit rounded-full border border-muted-foreground relative before:absolute before:w-[calc(100%+4px)] before:h-[calc(100%+20px)] before:inset-0 before:border-x after:absolute after:w-[calc(100%+20px)] after:h-[calc(100%+4px)] after:inset-0 after:border-y before:border-muted after:border-muted after:-translate-x-[10px] before:-translate-y-[10px] before:-translate-x-[2px] after:-translate-y-[2px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary to-background">
                    <IconComponent className="w-8 h-8 text-muted-foreground" />
                </div>

                <hgroup className="flex flex-col mt-10">
                    <h1 className="text-2xl font-semibold text-foreground font-heading dark:text-primary-light mb-2 text-left">
                        {name}
                    </h1>
                    <p className="text-md text-muted-foreground dark:text-muted-light text-left">
                        {description}
                    </p>
                </hgroup>
            </div>
        </Link>
    );
};
export default ResourceCategoryCard;
