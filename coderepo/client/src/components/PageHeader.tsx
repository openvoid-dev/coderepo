import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
}

const PageHeader = ({
  heading,
  text,
  className,
  ...props
}: PageHeaderProps) => {
  return (
    <hgroup
      className={cn(
        "container flex flex-col items-center gap-6 max-w-7xl",
        className
      )}
      {...props}
    >
      <h1 className="font-bold font-heading text-center text-4xl md:text-5xl pt-4 pb-2 overflow-hidden">
        <span
          className="
             bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:90%_40%]
             from-primary to-primary dark:from-primary dark:to-primary
         "
        >
          {heading}
        </span>
      </h1>

      {text && (
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          {text}
        </p>
      )}
    </hgroup>
  );
};

export default PageHeader;
