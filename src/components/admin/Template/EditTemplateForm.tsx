"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, type BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import Markdown from 'react-markdown'
import { Button } from "~/components/ui/button";
import { CodeBlock, Pre } from '~/components/markdown/Code'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'
import rehypeExternalLinks from 'rehype-external-links'
import { Icons } from "~/components/Icons";
import { api } from "~/trpc/react";
import { toast } from "sonner";

const addTemplateFormSchema = z.object({
    name: z.string().min(10, {
        message: "Name must be at least 10 characters long",
    }),
    githubUrl: z.string().url({
        message: "Image URL must be a valid URL",
    }),
    description: z.string().min(20, {
        message: "Description must be at least 20 characters long",
    }),
    content: z.string().min(20, {
        message: "Content must be at least 20 characters long",
    }),
})

type FormFields = z.infer<typeof addTemplateFormSchema>

interface EditTemplateFormProps {
    template: {
        id: number;
        name: string;
        description: string;
        slug: string;
        githubUrl: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    };
};

const EditTemplateForm = ({ template }: EditTemplateFormProps) => {
    const [contentView, setContentView] = useState<"editor" | "preview">('editor');
    const options = { code: CodeBlock, pre: Pre }

    const allIcons = Object.keys(Icons);

    const router = useRouter();
    const form = useForm<FormFields>({
        resolver: zodResolver(addTemplateFormSchema),
        defaultValues: {
            name: template.name,
            description: template.description,
            githubUrl: template.githubUrl,
            content: template.content,
        },
    })

    const createTemplate = api.template.createTemplate.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/templates");
            toast("Template created successfully!");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const onSubmit = (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        createTemplate.mutate(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="githubUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>GitHub URL</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <div className="col-span-full">
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="col-span-full">
                    <div className="flex gap-4 mb-5">
                        <Button
                            type="button"
                            onClick={() => setContentView("editor")}
                            variant={contentView === "editor" ? "secondary" : "outline"}
                        >
                            Editor
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setContentView("preview")}
                            variant={contentView === "preview" ? "secondary" : "outline"}
                        >
                            Preview
                        </Button>
                    </div>

                    {/* Markdown editor */}
                    <div className={contentView === "editor" ? "block" : "hidden"}>
                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content Editor</FormLabel>
                                <FormControl>
                                    <Textarea {...field} className="min-h-[400px]" />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>

                    {/* Markdown Preview */}
                    <div className={contentView === "preview" ? "block" : "hidden"}>
                        <FormField control={form.control} name="content" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content Preview</FormLabel>
                                <article className='w-full pt-5 pl-6 min-h-[400px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background'>
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
                                        {field.value}
                                    </Markdown>
                                </article>
                            </FormItem>
                        )} />
                    </div>
                </div>

                <div className="col-span-full flex gap-6 justify-end">
                    <Button type="submit" className="col-span-2">
                        <Icons.create className="w-4 h-4 mr-2" />Update Template</Button>
                </div>
            </form>
        </Form>
    )
}

export default EditTemplateForm;
