import Link from "next/link";
import { Icons } from "~/components/Icons";
import AddGuideForm from "~/components/admin/Guide/AddGuideForm";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function AdminAddGuide() {
    const guideTags = await api.guide.getGuideTags.query();

    return (
        <main className="bg-secondary/20 rounded-lg py-10 px-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Create New Guide</h1>

                <Link href="/profile/admin/guides" className={cn(buttonVariants({ variant: "link" }))}>
                    <Icons.back className="w-5 h-5 mr-2" />
                    Go Back
                </Link>
            </div>

            <AddGuideForm guideTags={guideTags} />
        </main>
    )
}