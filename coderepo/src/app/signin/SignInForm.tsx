"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button, buttonVariants } from "~/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { signIn } from "next-auth/react"

import { useRouter } from 'next/navigation';
import Link from "next/link"
import { cn } from "~/lib/utils"
import { useState, type BaseSyntheticEvent } from "react"
import { Icons } from "~/components/Icons"
import { toast } from "sonner"

const signInSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

type FormFields = z.infer<typeof signInSchema>

const SignInForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm<FormFields>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: FormFields, event: BaseSyntheticEvent | undefined) => {
        event?.preventDefault();

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

        } catch (error) {
            console.error("Authentication error:", (error as Error).message);
        }
    };

    const onGithubSignIn = async () => {
        setIsLoading(true);

        try {
            await signIn("github", { redirect: true, callbackUrl: "/profile" })
        } catch (error) {
            // TODO: Set error message with toast
            toast("Event has been created.")
        } finally {
            setIsLoading(false);
        }
    }

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
                                <Input placeholder="coderepo@obradovic.dev" {...field} />
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
                    <Link href="#" className="text-muted-foreground hover:underline">
                        Forgot password?
                    </Link>
                </FormDescription>
                <Button type="submit" className="w-full" >Sign In</Button>

                <FormDescription className="text-center">
                    <span className="text-gray-600">or</span>
                </FormDescription>

                <Button className="w-full" variant="secondary" type="button" onClick={onGithubSignIn}>
                    <Icons.gitHub className="w-5 h-5 mr-4" /> Sign in with GitHub
                </Button>

                <FormDescription className="text-center">
                    Don&apos;t have an account?{" "}

                    <Link href="/signup" className={cn(buttonVariants({ variant: "link" }), "p-0")}>
                        Sign up
                    </Link>
                </FormDescription>
            </form>
        </Form>
    )
}

export default SignInForm
