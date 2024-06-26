import Balance from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import Image from "next/image";

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]",
        className,
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl",
        className,
      )}
      {...props}
    />
  );
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-4 md:pb-10",
        className,
      )}
      {...props}
    />
  );
}

function PageHeroImage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="absolute inset-0 -z-10 h-screen">
      <Image
        src="/images/hero.webp"
        alt="hero"
        fill={true}
        className="hidden h-full w-full object-cover [object-position:center] dark:block"
      />

      <Image
        src="/images/hero-white.webp"
        alt="hero"
        fill={true}
        className="block h-full w-full object-cover [object-position:center] dark:hidden"
      />
    </div>
  );
}

function AdminPageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("flex justify-between", className)} {...props}>
      {children}
    </section>
  );
}

function AdminPageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("font-heading text-left text-2xl font-bold", className)}
      {...props}
    />
  );
}

function AdminPageActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex  items-center space-x-4", className)} {...props}>
      {children}
    </div>
  );
}

export {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
  PageHeroImage,
  AdminPageHeader,
  AdminPageHeaderHeading,
  AdminPageActions,
};
