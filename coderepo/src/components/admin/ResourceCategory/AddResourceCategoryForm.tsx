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

const addResourceCategoryFormSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters long",
    }),
    icon: z.string()
})

type FormFields = z.infer<typeof addResourceCategoryFormSchema>

const AddResourceCategoryForm = () => {
    const router = useRouter();
    const form = useForm<FormFields>({
        resolver: zodResolver(addResourceCategoryFormSchema),
        defaultValues: {
            name: "",
            description: "",
            icon: "",
        },
    })

    const createResourceCategory = api.resource.createResourceCategory.useMutation({
        onSuccess: () => {
            router.push("/profile/admin/resources");
            toast("Resource Category created successfully");
        },
        onError: (error) => {
            toast(error.message);
        },
    })

    const onSubmit = (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();
        createResourceCategory.mutate({ ...data });
    }

    const allIcons = Object.keys(Icons);

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
                    name="icon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Icon</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select an Icon " />
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

                <Button type="submit" className="col-span-2">Add Resource</Button>
            </form>
        </Form>
    )
}

export default AddResourceCategoryForm;