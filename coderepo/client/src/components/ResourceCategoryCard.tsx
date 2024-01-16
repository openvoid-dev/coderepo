import { Icons } from "@/components/Icons";
import { ResourceCategory } from "@/types/resources";
import Link from "next/link";

const ResourceCategoryCard = ({
  icon,
  id,
  slug,
  name,
  description,
}: ResourceCategory) => {
  const IconComponent = Icons[icon];

  return (
    <Link href={`/resources/${slug}`}>
      <div className="bg-background border-2 border-muted rounded-lg px-6 py-20 relative group hover:border-primary transition-all duration-300">
        <div className="absolute top-1/2 left-1/2  h-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <IconComponent className="w-full h-full text-muted/30 group-hover:text-primary/30 transition-colors duration-300 " />
        </div>

        <hgroup className="flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl font-semibold text-foreground font-heading dark:text-primary-light mb-2 text-center">
            {name}
          </h1>
          <p className="text-lg text-muted-foreground dark:text-muted-light text-center">
            {description}
          </p>
        </hgroup>
      </div>
    </Link>
  );
};
export default ResourceCategoryCard;
