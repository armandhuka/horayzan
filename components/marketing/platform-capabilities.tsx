"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Box, Layers, Cloud, Terminal } from "lucide-react"

const capabilities = [
    {
        title: "Modular Tools",
        description: "Plug and play specialized tools into your unified ecosystem.",
        icon: Box,
    },
    {
        title: "Unified Experience",
        description: "Consistent UI and shared data structures across all platform nodes.",
        icon: Layers,
    },
    {
        title: "Cloud-Ready System",
        description: "Edge-optimized infrastructure ready for global deployment.",
        icon: Cloud,
    },
    {
        title: "Developer Foundation",
        description: "Robust APIs and SDKs to extend platform logic with custom code.",
        icon: Terminal,
    },
]

export function PlatformCapabilities() {
    return (
        <Section className="bg-muted/10 py-24 md:py-32">
            <Container>
                <div className="space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Core Capabilities</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            A robust suite of foundational features powering every instance.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -5 }}
                                className="p-10 rounded-3xl bg-card border border-border/40 space-y-4 shadow-sm group hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-7 w-7 stroke-[1.5]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                                    <p className="text-muted-foreground/90 text-[16px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
