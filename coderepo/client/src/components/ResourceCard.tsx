import { Resource } from "@/types/resources";
import Link from "next/link";

const ResourceCard = ({ link, name, description }: Resource) => {
  return (
    <Link href={link} target="_blank">
      <div className="bg-background border-2 border-muted rounded-lg px-6 py-20 relative group hover:border-primary transition-all duration-300">
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
export default ResourceCard;
