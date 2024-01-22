"use client"

import { ResourceCategory } from "@/types/resources";
import { createResourceCategory, getResourceCategoryBySlug } from "@/utils/resources";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const editResourceCategorySchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
    // slug: z.string().min(3, {
    //     message: "Slug must be at least 3 characters.",
    // }),
    icon: z.string()
})

export default function ResourceSinglePage({
    params,
}: {
    params: { slug: string };
}) {
    const router = useRouter()
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof editResourceCategorySchema>>({
        resolver: zodResolver(editResourceCategorySchema),
        defaultValues: {
            name: "",
            description: "",
            icon: "",
        },
    })

    const {
        error,
        data,
        mutate,
    } = useMutation({
        mutationKey: ["add-new-resource-category", params.slug],
        mutationFn: async (variables: z.infer<typeof editResourceCategorySchema>) => await createResourceCategory(variables),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['resource-categories'] })
        }
    });

    const onSubmit = async (formData: z.infer<typeof editResourceCategorySchema>, event: any) => {
        event.preventDefault();

        try {
            // * Create new resource category
            const response = mutate(formData);

            // if (response?.error) {
            //     throw new Error(response.error)
            // }

            router.push('/profile/admin/resources');
        } catch (error: any) {
            console.error("Authentication error:", error.message);
        }
    };

    // const {
    //     isLoading,
    //     error,
    //     data: resourceCategory,
    // } = useQuery<ResourceCategory>({
    //     queryKey: ["resource-category", params.slug],
    //     queryFn: async () => await getResourceCategoryBySlug(params.slug),
    // });

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // if (!resourceCategory) {
    //     return <div>No Resources Found</div>;
    // }

    return (
        <main className="">
            <h1 className="text-3xl font-semibold">Add Resource Category</h1>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6 mt-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />

                    {/* <FormField
                        control={form.control}
                        name="slug"
                        defaultValue={resourceCategory.slug}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Slug</FormLabel>
                                <FormControl>
                                    <Input placeholder="Slug" {...field} defaultValue={resourceCategory.slug} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    /> */}

                    <FormField
                        control={form.control}
                        name="icon"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Icon</FormLabel>
                                <FormControl>
                                    <Input placeholder="Icon" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />



                    <div className="col-span-2">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />
                    </div>


                    <div className="col-span-2 flex justify-end">
                        <Button type="submit">Add Resource Category</Button>
                    </div>
                </form>
            </Form>
        </main>
    );
}