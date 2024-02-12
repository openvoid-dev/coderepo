"use client";

import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Icons } from "~/components/Icons";
import PageHeader from "~/components/PageHeader";
import { CodeBlock, Pre } from "~/components/markdown/Code";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface SingleGuidesPageClientProps {
    initialData: {
        name: string;
        imageUrl: string;
        description: string;
        content: string;
        id: number;
        tag: {
            name: string;
            id: number;
            icon: string;
        };
    };
    slug: string;
}

export default function SingleGuidesPageClient({ initialData, slug }: SingleGuidesPageClientProps) {
    const { data } = api.guide.getGuideBySlug.useQuery({ slug: slug }, {
        initialData: initialData,
        refetchOnMount: false
    });

    const options = { code: CodeBlock, pre: Pre }

    if (!data) {
        return (
            <div className="flex flex-col items-center gap-4">
                <p className="mt-20 text-center text-xl text-secondary-foreground">
                    No guide found.
                </p>
                <Link
                    href="/guides"
                    className={cn(buttonVariants({ variant: "secondary" }))}
                >
                    <Icons.back className="mr-2 h-5 w-5" />
                    Go back to guides.
                </Link>
            </div>
        )
    }

    return (
        <>
            <PageHeader heading={data.name} text={data.description} />

            <div className="max-w-5xl container rounded-lg overflow-hidden mt-10">
                <Image src={data.imageUrl} alt={data.name} width="1000" height={500} className="rounded-lg" />
            </div>

            <article className="container max-w-3xl mt-20">
                <Markdown
                    className='prose prose-invert min-w-full'
                    components={options}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeSanitize,
                        [rehypeExternalLinks,
                            { content: { type: 'text', value: '🔗' } }
                        ],
                    ]}
                >
                    {data.content}
                </Markdown>
            </article>
        </>
    )
}