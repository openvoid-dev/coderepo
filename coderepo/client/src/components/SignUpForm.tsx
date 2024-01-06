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
import signUp from "@/lib/auth"

const signUpSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    username: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const SignUpForm = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            username: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof signUpSchema>, event: any) => {
        event.preventDefault();

        try {
            // * Create the user
            const response = await signUp(data);

            console.log(response);

            // if (!response.ok) {
            //     throw new Error(await response.text())
            // }

            console.log("signup response", response)

            // * Sign in the user
            const signInResponse = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            })

            if (signInResponse?.error) {
                throw new Error(signInResponse.error)
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
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="coderepo" {...field} />
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
                <FormDescription />
                <Button type="submit" className="w-full" variant="secondary">Sign Up</Button>

                <FormDescription className="text-center">
                    Already have an account?{" "}
                    <a href="/signin" className="text-red-500 hover:underline">
                        Sign in
                    </a>
                </FormDescription>
            </form>
        </Form>
    )
}

export default SignUpForm