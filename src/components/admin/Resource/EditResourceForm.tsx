"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Icons } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";

const editResourceFormSchema = z.object({
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

type FormFields = z.infer<typeof editResourceFormSchema>

interface EditResourceFormProps {
    resourceCategories: {
        name: string;
        description: string;
        slug: string;
        id: number;
        icon: string;
    }[];
    resource: {
        id: number;
        name: string;
        description: string;
        url: string;
        category: {
            id: number;
        };
    };
}

const EditResourceForm = ({ resourceCategories, resource }: EditResourceFormProps) => {
    const router = useRouter();
    const form = useForm<FormFields>({
        resolver: zodResolver(editResourceFormSchema),
        defaultValues: {
            name: resource.name,
            description: resource.description,
            url: resource.url,
            categoryId: JSON.stringify(resource.category.id),
        },
    })

    const updateResource = api.resource.updateResource.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource updated successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const deleteResource = api.resource.deleteResource.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource deleted successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const onSubmit = (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        updateResource.mutate({ ...data, categoryId: parseInt(data.categoryId), id: resource.id });
    }

    const handleDeleteResource = (event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        deleteResource.mutate({ id: resource.id });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-6">
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
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="col-span-full flex gap-6 justify-end">
                    <Button type="button" variant="destructive" onClick={handleDeleteResource}><Icons.delete className="w-4 h-4 mr-2" />Delete Resource</Button>
                    <Button type="submit" className="col-span-2"><Icons.update className="w-4 h-4 mr-2" /> Update Resource </Button>
                </div>
            </form>
        </Form>
    )
}

export default EditResourceForm;