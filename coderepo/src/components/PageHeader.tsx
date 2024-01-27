import { cn } from "~/lib/utils";

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
                "relative isolate container flex flex-col items-center gap-6 max-w-7xl",
                className
            )}
            {...props}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-500 to-purple-500 opacity-30 sm:left-[calc(50%-10rem)] sm:w-[52.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>

            <h1 className="font-bold font-heading text-center text-4xl md:text-5xl pt-4 pb-2 overflow-hidden">
                {heading}
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
