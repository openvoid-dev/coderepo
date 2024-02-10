"use client";

import Link from "next/link";
import Markdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Icons } from "~/components/Icons";
import PageHeader from "~/components/PageHeader";
import { CodeBlock, Pre } from "~/components/markdown/Code";
import { Button, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

interface SingleTemplatesPageClientProps {
    initialTemplate: {
        id: number;
        name: string;
        description: string;
        slug: string;
        githubUrl: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    };
}

export default function SingleTemplatesPageClient({ initialTemplate }: SingleTemplatesPageClientProps) {
    const { data: template } = api.template.getTemplateBySlug.useQuery({ slug: initialTemplate.slug }, { initialData: initialTemplate, refetchOnMount: false });

    const options = { code: CodeBlock, pre: Pre }
    return (
        <div>
            <PageHeader
                heading="Inspiring Templates to Use"
                text="Exploring the Possibilities of Cutting-Edge Web Development Technologies: Showcasing Innovative and Inspiring Projects"
            />

            <div className="mt-8">
                {/* <p className="text-center">This template is part of the <Link href="" className={cn(buttonVariants({ variant: "link" }), "p-0 text-md")}>Next.js handbook</Link>.</p> */}

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
                    {template?.content}
                </Markdown>
            </div>
        </div>
    )
}