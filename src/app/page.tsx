import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { Icons } from "~/components/Icons";
import TemplateCard from "~/components/TemplateCard";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default async function Home() {
  noStore();

  return (
    <main className="">
      {/* Hero */}
      <section className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 h-screen">
        <div className="container flex flex-col items-center gap-6 relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-500 to-purple-500 opacity-30 sm:left-[calc(50%-10rem)] sm:w-[82.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <Link href="/templates" className="flex items-center gap-2 bg-green-900/10 text-green-100 rounded-full px-4 py-2 border border-green-700/75 font-semibold font-heading">Checkout new starter templates. <Icons.arrowRight className="w-5 h-5 font-semibold" /></Link>

          <h1 className="font-bold font-heading text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-4 pb-2 overflow-hidden">
            Code Repo: Exploring Web Technologies and Documentation
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
            A Comprehensive Repository of Web Technology Examples and
            Documentation for Developers
          </p>
          <div className="space-x-4 inline-flex items-center">
            <Link
              href="/handbooks"
              className={cn(buttonVariants({ size: "lg", variant: "default" }))}
            >
              Handbooks
            </Link>
            <Link
              href="https://github.com/AntonioObra/coderepo" target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              <Icons.gitHub className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="container">
        <hgroup className='flex flex-col items-center gap-2'>
          <h1 className='font-bold font-heading text-center text-3xl md:text-4xl lg:text-6xl pt-4 pb-2'>Inspiring Templates to Use</h1>
          <p className="max-w-[65rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
            Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects
          </p>
        </hgroup>

        <div className='grid grid-cols-2 gap-6 mt-10'>
          {/* <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard /> */}
        </div>
      </section>
    </main>
  );
}