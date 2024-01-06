import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { getServerSession } from "next-auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await getServerSession();

    return (
        < header className="sticky top-0 py-4 bg-background/75 backdrop-blur-2xl border-b border-muted" >
            <nav className="container flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="mr-6">
                        <a href="/" className="font-heading text-2xl font-bold">
                            <span className="
                    bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:100%_40%]
                    from-primary to-primary dark:from-primary dark:to-primary">
                                Code Repo
                            </span>
                        </a>
                    </div>
                    <a href="/templates" className="text-foreground  text-md animated-link font-heading">Templates</a>
                    <a href="/guides" className="text-foreground  text-md animated-link font-heading">Guides</a>
                    <a href="/resources" className="text-foreground  text-md animated-link font-heading">Resources</a>
                    <a href="/playground" className="text-foreground  text-md animated-link font-heading">Playground</a>
                </div>

                <div className="flex items-center gap-3">
                    <a href="https://github.com/AntonioObra/coderepo" target="_blank" className={cn(buttonVariants({ size: "sm", variant: "ghost" }), "gap-2 text-muted-foreground font-bold")}><Icons.github className="w-4 h-4" /> 7</a>

                    {session ? (
                        <Link href="/profile" className={cn(buttonVariants({ size: "sm" }), "font-bold font-heading")}>Profile</Link>) : (
                        <Link href="/signin" className={cn(buttonVariants({ size: "sm" }), "font-bold font-heading")}>Sign In</Link>
                    )}
                </div>
            </nav>
        </header >
    )
}

export default Navbar