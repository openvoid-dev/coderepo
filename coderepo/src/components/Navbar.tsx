import Link from "next/link"
import { Icons } from "~/components/Icons"
import { buttonVariants } from "~/components/ui/button"
import { cn } from "~/lib/utils"
import { getServerAuthSession } from "~/server/auth"

const Navbar = async () => {
    const session = await getServerAuthSession();

    return (
        <header className="sticky top-0 py-4 bg-background/75 backdrop-blur-2xl border-b border-muted z-50" >
            <nav className="container flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="mr-6">
                        <Link href="/" className="font-heading text-2xl font-bold">
                            <span className="
                    bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:100%_40%]
                    from-primary to-primary dark:from-primary dark:to-primary">
                                Code Repo
                            </span>
                        </Link>
                    </div>
                    <Link href="/templates" className="text-foreground  text-md animated-link font-heading">Templates</Link>
                    <Link href="/guides" className="text-foreground  text-md animated-link font-heading">Guides</Link>
                    <Link href="/resources" className="text-foreground  text-md animated-link font-heading">Resources</Link>
                    <Link href="/playground" className="text-foreground  text-md animated-link font-heading">Playground</Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="https://github.com/AntonioObra/coderepo" target="_blank" className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "gap-2 text-muted-foreground font-bold")}><Icons.gitHub className="w-4 h-4" /> 7</Link>

                    {session ? (
                        <Link href="/profile" className={cn(buttonVariants({ size: "sm" }), "font-bold font-heading")}>Profile</Link>) : (
                        <Link href="/signin" className={cn(buttonVariants({ size: "sm" }), "font-bold font-heading")}>Sign In</Link>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar