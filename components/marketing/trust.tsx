"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Layers, Shield, Cpu, Zap } from "lucide-react"

const trustItems = [
    {
        icon: Layers,
        title: "Unified Ecosystem",
        description: "Experience seamless integration across our specialized tools designed to work in perfect harmony.",
    },
    {
        icon: Cpu,
        title: "Scalable Architecture",
        description: "Built on enterprise-grade infrastructure that grows with your business and technical demands.",
    },
    {
        icon: Shield,
        title: "Secure Infrastructure",
        description: "Enterprise-level security protocols ensure your data and operations are always protected.",
    },
    {
        icon: Zap,
        title: "Performance First",
        description: "Highly optimized codebase for near-instant responses and ultra-fast loading across all products.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Trust() {
    return (
        <Section className="bg-card/50">
            <Container>
                <div className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            The Foundation for Modern Digital Work
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {trustItems.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="group relative rounded-2xl border bg-background p-8 transition-all hover:shadow-lg hover:border-primary/20"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
