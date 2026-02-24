"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { LayoutGrid, TrendingUp, ShieldCheck, Zap } from "lucide-react"

const reasons = [
    {
        title: "Centralized Platform",
        description: "Access and manage all your digital tools from a single, unified dashboard.",
        icon: LayoutGrid,
    },
    {
        title: "Scalable Architecture",
        description: "Built on a foundation that grows seamlessly with your user base and data needs.",
        icon: TrendingUp,
    },
    {
        title: "Secure Access",
        description: "Enterprise-grade security protocols ensuring your data and users are protected.",
        icon: ShieldCheck,
    },
    {
        title: "Performance Focused",
        description: "Optimized for speed and efficiency to provide a world-class user experience.",
        icon: Zap,
    },
]

export function WhyHorayzan() {
    return (
        <Section className="bg-muted/30 py-24 md:py-32 border-y border-border/10">
            <Container>
                <div className="space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Engineered for Excellence</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Our architecture is designed to solve the complexity of fragmented digital operations.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="relative p-10 rounded-[2rem] border border-border/40 bg-card/40 backdrop-blur-sm space-y-6 group transition-colors hover:bg-card hover:border-border/80"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <reason.icon className="h-7 w-7 stroke-[1.5]" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold tracking-tight">{reason.title}</h3>
                                    <p className="text-muted-foreground/90 leading-relaxed text-[17px]">
                                        {reason.description}
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
