"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Calendar, Clock, Tag } from "lucide-react"

import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Blog Posts Dataset
const blogPosts = [
    {
        id: "1",
        title: "The Architecture of Unified Ecosystems",
        summary: "Exploring how integrated infrastructure accelerates the development of specialized digital tools.",
        content: "Detailed insights into the design patterns used to build Horayzan...",
        category: "Platform",
        author: "Alex Rivers",
        date: "Feb 20, 2026",
        readTime: "8 min read",
        isFeatured: true,
    },
    {
        id: "2",
        title: "Maximizing Performance in Next.js 14",
        summary: "Advanced strategies for optimizing Server Components and reducing client-side overhead.",
        category: "Tech",
        author: "Sarah Chen",
        date: "Feb 18, 2026",
        readTime: "6 min read",
        isFeatured: false,
    },
    {
        id: "3",
        title: "The Future of Digital Tool Interaction",
        summary: "How seamless navigation and single identity systems are redefining user experience.",
        category: "Tools",
        author: "Marcus Thorne",
        date: "Feb 15, 2026",
        readTime: "5 min read",
        isFeatured: false,
    },
    {
        id: "4",
        title: "Scaling Your SaaS with Modular Infrastructure",
        summary: "Why a shared foundation is the key to managing multiple products under one umbrella.",
        category: "Growth",
        author: "Elena Vance",
        date: "Feb 12, 2026",
        readTime: "10 min read",
        isFeatured: false,
    },
    {
        id: "5",
        title: "Cybersecurity Pillars for Modern Platforms",
        summary: "Implementing robust identity management and data encryption across distributed nodes.",
        category: "Tech",
        author: "David Kim",
        date: "Feb 10, 2026",
        readTime: "7 min read",
        isFeatured: false,
    },
    {
        id: "6",
        title: "Designing for Unity: A Shared Language",
        summary: "Consistency is more than just colors. It's about a predictable and harmonious user journey.",
        category: "Platform",
        author: "Jamie Lott",
        date: "Feb 05, 2026",
        readTime: "4 min read",
        isFeatured: false,
    },
]

const categories = ["All", "Tech", "Tools", "Platform", "Growth"]

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = React.useState("All")

    const filteredPosts = blogPosts.filter((post) =>
        activeCategory === "All" || post.category === activeCategory
    )

    const featuredPost = blogPosts.find(post => post.isFeatured)
    const otherPosts = filteredPosts.filter(post => !post.isFeatured || activeCategory !== "All")

    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. Hero Section */}
            <Section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border/40">
                <Container className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl"
                    >
                        Horayzan Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-muted-foreground"
                    >
                        Insights on digital tools, technology and platform growth.
                    </motion.p>
                </Container>
            </Section>

            {/* 2. Featured Post & Content Area */}
            <Section className="py-12 md:py-24 bg-muted/30">
                <Container className="space-y-16">
                    {/* Featured Post (Only show if 'All' or if featured post matches category) */}
                    {(activeCategory === "All" || (featuredPost && featuredPost.category === activeCategory)) && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative group"
                        >
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/40 bg-card p-1 shadow-2xl transition-all duration-500 hover:shadow-primary/5">
                                <div className="grid lg:grid-cols-2 items-center">
                                    <div className="aspect-video lg:aspect-square bg-muted/50 rounded-[2rem] m-2 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Sparkles className="h-20 w-20 text-primary/20" />
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12 space-y-6">
                                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                                            <span className="px-3 py-1 bg-primary/10 rounded-full">Featured</span>
                                            <span className="text-muted-foreground/60">{featuredPost?.category}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                                            {featuredPost?.title}
                                        </h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {featuredPost?.summary}
                                        </p>
                                        <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                {featuredPost?.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                {featuredPost?.readTime}
                                            </div>
                                        </div>
                                        <Button size="lg" className="rounded-full px-8 mt-4 group">
                                            Read Article <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 4. Category Filter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-border/40 pb-8">
                        <div className="flex items-center gap-3">
                            <Tag className="h-5 w-5 text-muted-foreground" />
                            <h3 className="text-lg font-bold">Categories</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-sm font-medium transition-all border",
                                        activeCategory === cat
                                            ? "bg-foreground text-background border-foreground"
                                            : "bg-background border-border/60 text-muted-foreground hover:border-primary hover:text-primary"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3. Blog Grid */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {otherPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group flex flex-col p-8 rounded-[2rem] border border-border/40 bg-card hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
                                >
                                    <div className="space-y-4">
                                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                                            {post.category}
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                            {post.summary}
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-border/20 flex items-center justify-between">
                                        <div className="text-sm font-medium text-muted-foreground/60">
                                            {post.date}
                                        </div>
                                        <Button variant="ghost" size="sm" className="rounded-full group/btn">
                                            Read More <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty State */}
                    {otherPosts.length === 0 && (
                        <div className="py-20 text-center space-y-4">
                            <p className="text-xl text-muted-foreground">No articles found in this category.</p>
                            <Button variant="outline" onClick={() => setActiveCategory("All")}>Back to All Articles</Button>
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    )
}

function Sparkles({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    )
}
