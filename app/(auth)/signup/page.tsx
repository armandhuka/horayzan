"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { UserPlus, ArrowRight } from "lucide-react"
export const dynamic = "force-dynamic"

import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { SocialAuth } from "@/components/auth/social-auth"
import { createClient } from "@/lib/supabase/client"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

export default function SignupPage() {
    const supabase = createClient()
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState<string | null>(null)
    const [success, setSuccess] = React.useState(false)

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            })

            if (signUpError) throw signUpError
            setSuccess(true)
        } catch (err) {
            const message = err instanceof Error ? err.message : "An error occurred during signup"
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }

    if (success) {
        return (
            <div className="flex flex-col min-h-screen">
                <Section className="flex-1 flex items-center justify-center py-12 md:py-24">
                    <Container className="max-w-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center space-y-6 p-10 rounded-[2.5rem] border border-border/40 bg-card shadow-2xl shadow-primary/5"
                        >
                            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                <CheckCircle2 className="h-10 w-10" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tight">Check your email</h1>
                                <p className="text-muted-foreground leading-relaxed">
                                    We&apos;ve sent a confirmation link to <br /><strong className="text-foreground">{email}</strong>.
                                    Please verify your account to continue.
                                </p>
                            </div>
                            <Button variant="outline" onClick={() => setSuccess(false)} className="rounded-full w-full h-12">
                                Back to Signup
                            </Button>
                        </motion.div>
                    </Container>
                </Section>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="flex-1 flex items-center justify-center py-12 md:py-24">
                <Container className="max-w-md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Title Section */}
                        <div className="text-center space-y-2">
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary mb-4">
                                <UserPlus className="h-6 w-6" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight">Create Your Account</h1>
                            <p className="text-muted-foreground">Join the Horayzan ecosystem today</p>
                        </div>

                        {/* Signup Form Card */}
                        <div className="p-8 rounded-[2rem] border border-border/40 bg-card shadow-2xl shadow-primary/5 space-y-8">
                            <SocialAuth />

                            <form className="space-y-6" onSubmit={handleSignup}>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium flex items-center gap-3"
                                    >
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        {error}
                                    </motion.div>
                                )}

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold ml-1">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full h-12 px-4 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold ml-1">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        className="w-full h-12 px-4 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-semibold ml-1">Password</label>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Minimum 6 characters"
                                        className="w-full h-12 px-4 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="w-full h-14 rounded-full font-bold text-base shadow-lg shadow-primary/10 transition-all hover:shadow-primary/20"
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Footer Link */}
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground font-medium">
                                Already have an account?{" "}
                                <Link href="/login" className="text-primary hover:underline font-bold inline-flex items-center gap-1">
                                    Login <ArrowRight className="h-3 w-3" />
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </div>
    )
}
