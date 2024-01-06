"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"

import { useRouter } from 'next/navigation';

const signInSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const AuthForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof signInSchema>, event: any) => {
        event.preventDefault();

        try {
            // * Sign in the user
            const response = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            })

            if (response?.error) {
                throw new Error(response.error)
            }

            // * Redirect to profile page
            router.push('/profile');
            router.refresh();

        } catch (error: any) {
            console.error("Authentication error:", error.message);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" autoComplete="off">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="info@coderepo.dev" {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="********" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormDescription>
                    <a href="#" className="text-red-500 hover:underline">
                        Forgot password?
                    </a>
                </FormDescription>
                <Button type="submit" className="w-full" variant="secondary">Sign In</Button>

                <FormDescription className="text-center">
                    Don&apos;t have an account?{" "}
                    <a href="/signup" className="text-red-500 hover:underline">
                        Sign up
                    </a>
                </FormDescription>
            </form>
        </Form>
    )
}

export default AuthForm
