"use client"

import * as React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

export function SocialAuth() {
    const supabase = createClient()
    const [isLoading, setIsLoading] = React.useState<string | null>(null)

    const handleSocialLogin = async (provider: 'google' | 'facebook') => {
        setIsLoading(provider)
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            })
            if (error) throw error
        } catch (error) {
            console.error(`Error logging in with ${provider}:`, error)
        } finally {
            setIsLoading(null)
        }
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                    variant="outline"
                    className="rounded-full h-12 font-semibold border-border/60 hover:bg-muted/50 transition-all active:scale-[0.98]"
                    onClick={() => handleSocialLogin('google')}
                    disabled={!!isLoading}
                >
                    <GoogleIcon className="mr-2 h-4 w-4" />
                    {isLoading === 'google' ? "Connecting..." : "Google"}
                </Button>
                <Button
                    variant="outline"
                    className="rounded-full h-12 font-semibold border-border/60 hover:bg-muted/50 transition-all active:scale-[0.98]"
                    onClick={() => handleSocialLogin('facebook')}
                    disabled={!!isLoading}
                >
                    <FacebookIcon className="mr-2 h-4 w-4 fill-[#1877F2]" />
                    {isLoading === 'facebook' ? "Connecting..." : "Facebook"}
                </Button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/40" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-4 text-muted-foreground font-bold tracking-widest">
                        OR
                    </span>
                </div>
            </div>
        </div>
    )
}

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C40.483,35.58,44,30.357,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
    )
}

function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
            <path fill="#3f51b5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.762,0-5-2.238-5-5V11c0-2.762,2.238-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
            <path fill="#fff" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0-3.088,2.126-5.59,5.62-5.59c1.681,0,3.12,0.126,3.54,0.183v4.07h-2.405c-1.498,0-1.788,0.712-1.788,1.757V21h4.411L34.368,25z" />
        </svg>
    )
}
