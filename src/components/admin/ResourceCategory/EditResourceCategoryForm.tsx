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

const editResourceCategoryFormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters long",
    }),
    icon: z.string(),
    slug: z.string().min(3, {
        message: "Slug must be at least 3 characters long",
    }),
})

type FormFields = z.infer<typeof editResourceCategoryFormSchema>

interface EditResourceFormProps {
    resourceCategory: {
        name: string;
        description: string;
        slug: string;
        id: number;
        icon: string;
    }
}

const EditResourceCategoryForm = ({ resourceCategory }: EditResourceFormProps) => {
    const router = useRouter();
    const form = useForm<FormFields>({
        resolver: zodResolver(editResourceCategoryFormSchema),
        defaultValues: {
            name: resourceCategory.name,
            description: resourceCategory.description,
            icon: resourceCategory.icon,
            slug: resourceCategory.slug,
        },
    })

    const updateResourceCategory = api.resource.updateResourceCategory.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource Category updated successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const deleteResourceCategory = api.resource.deleteResourceCategory.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource Category deleted successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const onSubmit = (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        updateResourceCategory.mutate({ ...data, id: resourceCategory.id });
    }

    const handleDeleteResourceCategory = (event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        deleteResourceCategory.mutate({ id: resourceCategory.id });
    }

    const allIcons = Object.keys(Icons);

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
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="icon"
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
                                    {allIcons.map((icon) => {
                                        const IconComponent = Icons[icon as keyof typeof Icons];

                                        return (
                                            <SelectItem key={icon} value={icon}>
                                                <div className="flex items-center">
                                                    <IconComponent className="w-4 h-4 text-muted-foreground mr-2" />
                                                    {icon}
                                                </div>
                                            </SelectItem>
                                        )
                                    })}
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
                    <Button type="button" variant="destructive" onClick={handleDeleteResourceCategory}><Icons.delete className="w-4 h-4 mr-2" />Delete Resource Category</Button>
                    <Button type="submit" className="col-span-2"><Icons.update className="w-4 h-4 mr-2" /> Update Resource Category</Button>
                </div>
            </form>
        </Form>
    )
}

export default EditResourceCategoryForm;