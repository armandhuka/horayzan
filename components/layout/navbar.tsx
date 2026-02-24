"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/container"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePlatformStore } from "@/lib/store/use-platform-store"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Tools", href: "/explore" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = usePlatformStore()
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-border/40 bg-background/80 backdrop-blur-md py-3"
                    : "bg-transparent py-5"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="group flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                                Horayzan
                            </span>
                        </Link>
                    </div>

                    {/* Center: Navigation */}
                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3 lg:gap-4">
                        <div className="hidden sm:flex items-center gap-2 lg:gap-4">
                            <ThemeToggle />
                            <Link href="/login">
                                <Button variant="ghost" size="sm" className="font-medium hover:text-primary">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button
                                    size="sm"
                                    className="rounded-full px-6 font-semibold shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile controls */}
                        <div className="sm:hidden flex items-center gap-2">
                            <ThemeToggle />
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden hover:bg-transparent"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto", display: "block" },
                    closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
                }}
                className="md:hidden border-t bg-background/95 backdrop-blur-md overflow-hidden"
            >
                <nav className="flex flex-col p-6 gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="outline" className="w-full rounded-full" size="lg">Login</Button>
                        </Link>
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                            <Button className="w-full rounded-full" size="lg">Sign Up</Button>
                        </Link>
                    </div>
                </nav>
            </motion.div>
        </header>
    )
}
