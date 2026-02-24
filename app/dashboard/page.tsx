"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    LayoutDashboard,
    User,
    Wrench,
    History,
    Settings,
    LogOut,
    ExternalLink
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { type User as SupabaseUser } from "@supabase/supabase-js"

export default function DashboardPage() {
    const supabase = createClient()
    const [user, setUser] = React.useState<SupabaseUser | null>(null)

    React.useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()
    }, [supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        window.location.href = "/login"
    }

    return (
        <div className="p-6 md:p-12 space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-1"
                >
                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-2">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Overview</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground text-lg">
                        Welcome to Horayzan. Your unified technology ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3"
                >
                    <Button variant="outline" className="rounded-full gap-2 border-border/60">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                    </Button>
                    <Button variant="destructive" onClick={handleLogout} className="rounded-full gap-2 shadow-lg shadow-destructive/10">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                    </Button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Account Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-1 p-8 rounded-[2rem] border border-border/40 bg-card shadow-xl shadow-primary/5 space-y-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <User className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold">Account</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Email</p>
                            <p className="font-medium truncate">{user?.email || "Loading..."}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                            <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Name</p>
                            <p className="font-medium">{user?.user_metadata?.full_name || "Horayzan User"}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Tools Access */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 p-8 rounded-[2rem] border border-border/40 bg-card shadow-xl shadow-primary/5 space-y-6"
                >
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Wrench className="h-5 w-5" />
                            </div>
                            <h2 className="text-xl font-bold">Platform Tools</h2>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/5 font-bold rounded-full">
                            Browse All
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ToolCard
                            title="Explore Platform"
                            description="Discover new possibilities with our ecosystem."
                            icon={<LayoutDashboard className="h-5 w-5" />}
                        />
                        <ToolCard
                            title="Latest Insights"
                            description="Read our newest blog entries and growth tips."
                            icon={<History className="h-5 w-5" />}
                        />
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-3 p-8 rounded-[2rem] border border-border/40 bg-card shadow-xl shadow-primary/5 space-y-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <History className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold">Recent Activity</h2>
                    </div>

                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                        <div className="h-12 w-12 rounded-full border-2 border-dashed border-border flex items-center justify-center text-muted-foreground">
                            <History className="h-6 w-6 opacity-30" />
                        </div>
                        <div>
                            <p className="font-semibold text-muted-foreground">No recent activity</p>
                            <p className="text-sm text-muted-foreground/60">Your interactions with the platform will appear here.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

function ToolCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="group p-5 rounded-2xl border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-3">
                <div className="h-10 w-10 rounded-xl bg-muted group-hover:bg-primary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                    {icon}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary/60" />
            </div>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    )
}
