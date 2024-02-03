import Link from "next/link";
import { Icons } from "~/components/Icons";
import PageHeader from "~/components/PageHeader";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default async function SingleTemplatesPage() {
    return (
        <div>
            <PageHeader
                heading="Inspiring Templates to Use"
                text="Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects"
            />

            <div className="mt-14">
                <p className="text-center">This template is part of the <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>Next.js handbook</Link>.</p>

                <div className="flex items-center justify-center gap-4 mt-4">
                    <Link href="" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
                        <Icons.docs className="w-5 h-5 mr-3" /> Get Started
                    </Link>

                    <Link href={"githubUrl"} target="_blank" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
                        <Icons.gitHub className="w-5 h-5 mr-3" /> Github
                    </Link>

                    <Button variant="secondary" size="lg">
                        <Icons.star className="w-5 h-5 mr-3" /> Save
                    </Button>
                </div>
            </div>

            <div className="mt-14">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="mt-4">
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>ESLint</li>
                    <li>Prettier</li>
                    <li>PostCSS</li>
                    <li>Tailwind CSS</li>
                    <li>React Testing Library</li>
                    <li>Jest</li>
                    <li>Storybook</li>
                    <li>GitHub Actions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-14">Getting Started</h2>

                <p className="mt-4">This is a monorepo project, so you should install the dependencies in the root folder:</p>
                <pre className="bg-gray-100 p-4 mt-4">
                    <code>yarn install</code>
                </pre>

                <p className="mt-4">Then you can run the development server:</p>
                <pre className="bg-gray-100 p-4 mt-4">
                    <code>yarn dev</code>
                </pre>

                <p className="mt-4">To run the tests:</p>

                <pre className="bg-gray-100 p-4 mt-4">
                    <code>yarn test</code>
                </pre>

                <p className="mt-4">To build the project:</p>

                <pre className="bg-gray-100 p-4 mt-4">
                    <code>yarn build</code>
                </pre>

                <p className="mt-4">To run the storybook:</p>

                <pre className="bg-gray-100 p-4 mt-4">
                    <code>yarn storybook</code>
                </pre>



                <h2 className="text-2xl font-bold mt-14">Contributing</h2>

                <p className="mt-4">Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>

                <p className="mt-4">Please make sure to update tests as appropriate.</p>

                <h2 className="text-2xl font-bold mt-14">License</h2>

                <p className="mt-4">MIT</p>

                <h2 className="text-2xl font-bold mt-14">Authors</h2>

                <p className="mt-4">This project is created by <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>John Doe</Link>.</p>

                <h2 className="text-2xl font-bold mt-14">Acknowledgments</h2>

                <p className="mt-4">This project is inspired by the <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>Next.js</Link> and <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>Tailwind CSS</Link> communities.</p>

                <h2 className="text-2xl font-bold mt-14">Show your support</h2>

                <p className="mt-4">Give a ⭐️ if this project helped you!</p>
            </div>
        </div>
    )
}