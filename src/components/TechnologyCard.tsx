import { Icons } from "./Icons";

interface TechnologiesCardProps {
  title: string;
  description: string;
  icon: string;
}

const TechnologyCard = ({
  title,
  description,
  icon,
}: TechnologiesCardProps) => {
  const IconComponent = Icons[icon as keyof typeof Icons];

  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex flex-col justify-between gap-8 rounded-md p-6">
        <IconComponent className="h-12 w-12 fill-current" />
        <div className="space-y-2">
          <h2 className="font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
