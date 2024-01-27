"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";

const addResourceFormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters long",
    }),
    url: z.string().url({
        message: "URL must be a valid URL",
    }),
    categoryId: z.string(),
})

type FormFields = z.infer<typeof addResourceFormSchema>

interface AddResourceFormProps {
    resourceCategories: {
        name: string;
        description: string;
        slug: string;
        id: number;
        icon: string;
    }[];
}

const AddResourceForm = ({ resourceCategories }: AddResourceFormProps) => {
    const router = useRouter();
    const form = useForm<FormFields>({
        resolver: zodResolver(addResourceFormSchema),
        defaultValues: {
            name: "",
            description: "",
            url: "",
            categoryId: "",
        },
    })

    const createResource = api.resource.createResource.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource created successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const onSubmit = (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        createResource.mutate({ ...data, categoryId: parseInt(data.categoryId) });
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
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a Resource Category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent {...field}>
                                    {resourceCategories.map((category) => (
                                        <SelectItem key={category.id} value={`${category.id}`}>{category.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="col-span-2">Add Resource</Button>
            </form>
        </Form>
    )
}

export default AddResourceForm;