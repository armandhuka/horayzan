"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ExternalLink, Sparkles, Zap, Shield, AppWindow } from "lucide-react"

import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Tool Dataset
const tools = [
    {
        id: "1",
        name: "Horizon Analytics",
        description: "Real-time traffic monitoring and user behavior insights for your ecosystem.",
        category: "Analytics",
        icon: Zap,
        isPopular: true,
        isNew: false,
    },
    {
        id: "2",
        name: "SecureGate ID",
        description: "Unified identity management and authentication pillar for all Horayzan nodes.",
        category: "Security",
        icon: Shield,
        isPopular: true,
        isNew: false,
    },
    {
        id: "3",
        name: "CloudForge",
        description: "Zero-config deployment engine and automated scaling infrastructure.",
        category: "Infrastructure",
        icon: AppWindow,
        isPopular: false,
        isNew: true,
    },
    {
        id: "4",
        name: "Nexus API",
        description: "Seamless data synchronization and webhooks for third-party integrations.",
        category: "Developer",
        icon: Sparkles,
        isPopular: false,
        isNew: false,
    },
    {
        id: "5",
        name: "Vault Storage",
        description: "Distributed, encrypted object storage for large-scale enterprise data.",
        category: "Storage",
        icon: Shield,
        isPopular: true,
        isNew: true,
    },
    {
        id: "6",
        name: "Flow Builder",
        description: "No-code automation and workflow designer for business operations.",
        category: "Automation",
        icon: Zap,
        isPopular: false,
        isNew: false,
    },
]

const categories = ["All", "Analytics", "Security", "Infrastructure", "Developer", "Storage", "Automation"]
const filters = ["All", "Popular", "New"]

export default function ExplorePage() {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [activeCategory, setActiveCategory] = React.useState("All")
    const [activeFilter, setActiveFilter] = React.useState("All")

    const filteredTools = tools.filter((tool) => {
        const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory === "All" || tool.category === activeCategory
        const matchesFilter = activeFilter === "All" ||
            (activeFilter === "Popular" && tool.isPopular) ||
            (activeFilter === "New" && tool.isNew)

        return matchesSearch && matchesCategory && matchesFilter
    })

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <Section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border/40">
                <Container className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl"
                    >
                        Explore Tools
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-muted-foreground"
                    >
                        Discover specialized tools built within the Horayzan ecosystem to power your digital vision.
                    </motion.p>
                </Container>
            </Section>

            <Section className="py-12 md:py-16 bg-muted/30">
                <Container className="space-y-12">
                    {/* Search & Filter Bar */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search platform tools..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 pl-11 pr-4 rounded-xl border border-border/60 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2 p-1 rounded-xl bg-background/50 border border-border/60 backdrop-blur-sm">
                                {filters.map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setActiveFilter(f)}
                                        className={cn(
                                            "px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all",
                                            activeFilter === f
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Category Selection */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                                    activeCategory === cat
                                        ? "bg-foreground text-background border-foreground"
                                        : "bg-background border-border/60 text-muted-foreground hover:border-primary hover:text-primary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Tool Grid */}
                    <AnimatePresence mode="popLayout">
                        {filteredTools.length > 0 ? (
                            <motion.div
                                layout
                                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                            >
                                {filteredTools.map((tool, index) => (
                                    <motion.div
                                        key={tool.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative flex flex-col p-8 rounded-3xl border border-border/40 bg-card hover:bg-card/80 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <tool.icon className="h-6 w-6 stroke-[1.5]" />
                                            </div>
                                            {(tool.isPopular || tool.isNew) && (
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]",
                                                    tool.isPopular ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                                                )}>
                                                    {tool.isPopular ? "Popular" : "New"}
                                                </span>
                                            )}
                                        </div>
                                        <div className="space-y-2 mb-8">
                                            <h3 className="text-xl font-bold tracking-tight">{tool.name}</h3>
                                            <p className="text-muted-foreground/90 leading-relaxed text-sm line-clamp-2">
                                                {tool.description}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest">{tool.category}</span>
                                            <Button variant="ghost" size="sm" className="rounded-full group/btn hover:bg-primary hover:text-white">
                                                Open Tool <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center space-y-6"
                            >
                                <div className="h-20 w-20 rounded-full bg-muted mx-auto flex items-center justify-center text-muted-foreground/30">
                                    <Filter className="h-10 w-10" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold">No tools found</h3>
                                    <p className="text-muted-foreground">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                                </div>
                                <Button variant="outline" onClick={() => { setSearchQuery(""); setActiveCategory("All"); setActiveFilter("All") }}>
                                    Clear all filters
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </Section>
        </div>
    )
}
