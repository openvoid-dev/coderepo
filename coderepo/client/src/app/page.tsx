import { Icons } from '@/components/Icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className="" >
      {/* Hero */}
      <section className="pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 ">
        <div className="container flex flex-col items-center gap-6">
          <a href="/templates" className="flex items-center gap-2 bg-red-900/10 text-red-200 rounded-full px-4 py-2 border border-red-700/75 font-semibold font-heading">Checkout new starter templates. <Icons.arrowRight className="w-5 h-5 font-semibold" /></a>
          <h1 className="font-bold font-heading text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-4 pb-2 overflow-hidden">
            <span className="
					  bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:100%_40%]
					  from-primary to-primary dark:from-primary dark:to-primary
				  ">
              Code Repo: Exploring Web Technologies and Documentation
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
            A Comprehensive Repository of Web Technology Examples and
            Documentation for Developers
          </p>
          <div className="space-x-4 inline-flex items-center">
            <a
              href="/templates"
              className={cn(buttonVariants({ size: "lg", variant: "default" }), "font-bold")}
            >
              Templates
            </a>
            <a
              href="https://github.com/AntonioObra/coderepo" target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "font-bold")}
            >
              <Icons.github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section className="container">
        <div className="bg-customblue p-20 rounded-lg"></div>
      </section> */}
    </main>
  )
}
