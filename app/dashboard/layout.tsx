"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Wrench,
    User,
    LogOut,
    Menu,
    X,
    ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
    const pathname = usePathname()
    const supabase = createClient()

    const navItems = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Tools", href: "/dashboard/tools", icon: Wrench },
        { name: "Account", href: "/dashboard/account", icon: User },
    ]

    const handleLogout = async () => {
        await supabase.auth.signOut()
        window.location.href = "/login"
    }

    return (
        <div className="flex min-h-screen bg-muted/30">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border/40 transition-transform duration-300 md:relative md:translate-x-0",
                    !isSidebarOpen && "-translate-x-full md:w-20"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Header/Logo area */}
                    <div className="h-20 flex items-center px-6 border-b border-border/40">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                                H
                            </div>
                            {isSidebarOpen && (
                                <span className="text-xl font-black tracking-tighter">Horayzan</span>
                            )}
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 py-6 px-3 space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                                            : "hover:bg-primary/5 text-muted-foreground hover:text-primary"
                                    )}
                                >
                                    <Icon className={cn("h-5 w-5 shrink-0", isActive ? "" : "group-hover:scale-110 transition-transform")} />
                                    {isSidebarOpen && (
                                        <span className="font-semibold text-sm">{item.name}</span>
                                    )}
                                    {isActive && isSidebarOpen && (
                                        <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Footer / Account area */}
                    <div className="p-4 border-t border-border/40">
                        <Button
                            variant="ghost"
                            onClick={handleLogout}
                            className={cn(
                                "w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/5",
                                !isSidebarOpen && "px-3"
                            )}
                        >
                            <LogOut className="h-5 w-5 shrink-0" />
                            {isSidebarOpen && <span className="font-semibold text-sm">Logout</span>}
                        </Button>
                    </div>
                </div>

                {/* Toggle button for desktop */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute -right-3 top-24 h-6 w-6 rounded-full bg-primary text-primary-foreground border-4 border-muted/30 flex items-center justify-center hover:scale-110 transition-transform hidden md:flex"
                >
                    {isSidebarOpen ? <X className="h-3 w-3" /> : <Menu className="h-3 w-3" />}
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-20 bg-card/50 backdrop-blur-xl border-b border-border/40 flex items-center justify-between px-6 md:px-12 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                        <div className="h-8 w-[1px] bg-border/40 hidden md:block" />
                        <span className="text-sm font-bold text-muted-foreground hidden sm:inline-block">
                            Application Workspace
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold ring-2 ring-primary/20">
                            HU
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
