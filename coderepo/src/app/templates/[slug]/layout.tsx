export default async function SingleTemplatesPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="container flex gap-6">
            <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 container">
                {/* Template Navbar */}
                <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
                    <div className="w-full"><div className="pb-8"><h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Getting Started</h4><div className="grid grid-flow-row auto-rows-max text-sm"><a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs">Introduction</a></div></div><div className="pb-8"><h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Documentation</h4><div className="grid grid-flow-row auto-rows-max text-sm"><a className="flex w-full items-center rounded-md p-2 hover:underline bg-muted" target="" rel="" href="/docs/documentation">Introduction</a><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Contentlayer</span><a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/components">Components</a><a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/code-blocks">Code Blocks</a><a className="flex w-full items-center rounded-md p-2 hover:underline" target="" rel="" href="/docs/documentation/style-guide">Style Guide</a><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Search</span></div></div><div className="pb-8"><h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Blog</h4><div className="grid grid-flow-row auto-rows-max text-sm"><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Introduction</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Build your own</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Writing Posts</span></div></div><div className="pb-8"><h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">Dashboard</h4><div className="grid grid-flow-row auto-rows-max text-sm"><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Introduction</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Layouts</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Server Components</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Authentication</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">Database with Prisma</span><span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">API Routes</span></div></div></div>
                </aside>

                {/* Content */}
                <section className="relative py-6 lg:gap-10 lg:py-10">
                    {children}
                </section>
            </div>
        </main>
    )
}