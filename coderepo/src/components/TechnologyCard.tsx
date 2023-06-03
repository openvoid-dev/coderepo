import { Icon } from "./Icons";

interface TechnologiesCardProps {
  title: string;
  description: string;
  icon: Icon;
}

const TechnologyCard = ({
  title,
  description,
  icon: Icon,
}: TechnologiesCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <Icon className="h-12 w-12 fill-current" />
        <div className="space-y-2">
          <h2 className="font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
