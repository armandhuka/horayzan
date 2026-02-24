"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { FastForward, ShieldCheck, Box, Lightbulb, Code2, Rocket } from "lucide-react"

const features = [
    {
        icon: FastForward,
        title: "Fast",
        description: "Built for speed. Low latency, high throughput, and instant interactions.",
    },
    {
        icon: ShieldCheck,
        title: "Secure",
        description: "End-to-end encryption and compliance ready for the most sensitive operations.",
    },
    {
        icon: Box,
        title: "Modular",
        description: "Plug and play infrastructure that allows you to scale components independently.",
    },
    {
        icon: Lightbulb,
        title: "Intelligent",
        description: "Integrated AI capabilities that provide actionable insights across the platform.",
    },
    {
        icon: Code2,
        title: "Developer-Friendly",
        description: "Extensive APIs and documentation designed for rapid integration and testing.",
    },
    {
        icon: Rocket,
        title: "Enterprise-Ready",
        description: "Reliability and support that matches the standards of global corporations.",
    },
]

export function Features() {
    return (
        <Section className="bg-muted/30">
            <Container>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex items-start gap-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                <feature.icon className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-xl leading-none">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
