"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]

const platformLinks = [
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
]

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-auto">
            <Container className="py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                                Horayzan
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                            A unified platform for launching and scaling high-impact digital tools. Built for the modern builder.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40">Navigation</h4>
                        <ul className="space-y-4">
                            {navigationLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-muted-foreground hover:text-primary transition-colors inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Platform */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40">Platform</h4>
                        <ul className="space-y-4">
                            {platformLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-muted-foreground hover:text-primary transition-colors inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground/60">
                        &copy; {new Date().getFullYear()} Horayzan. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {/* Placeholder for social links if needed in future */}
                        <div className="h-1 w-1 rounded-full bg-primary/20" />
                        <div className="h-1 w-1 rounded-full bg-primary/20" />
                        <div className="h-1 w-1 rounded-full bg-primary/20" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}
