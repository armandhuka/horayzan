"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { cn } from "@/lib/utils"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. Hero Section */}
            <Section className="relative pt-32 pb-20 md:pt-40 md:pb-32 border-b border-border/40 overflow-hidden">
                <Container className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto space-y-6"
                    >
                        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                            About Horayzan
                        </h1>
                        <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed max-w-2xl mx-auto font-normal">
                            Horayzan is built to simplify how digital tools are created, managed and scaled.
                        </p>
                    </motion.div>
                </Container>
                {/* Subtle background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0,transparent_70%)] pointer-events-none" />
            </Section>

            {/* 2. Who We Are */}
            <Section className="py-24 md:py-32">
                <Container>
                    <div className="mx-auto max-w-3xl text-center space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Who We Are</h2>
                            <div className="h-1 w-20 bg-primary/30 mx-auto rounded-full" />
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                                    Horayzan is not a single product.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    It is a platform designed to support multiple independent digital solutions. We provide the unified orchestration and shared infrastructure that allows specialized tools to exist in a single, high-performance ecosystem.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* 3. Our Vision */}
            <Section className="py-24 md:py-32 bg-muted/30">
                <Container>
                    <div className="mx-auto max-w-3xl text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Vision</h2>
                            <p className="text-2xl md:text-3xl text-foreground/80 leading-snug font-normal text-balance">
                                To create a unified technology ecosystem where individuals and businesses can launch and scale digital tools with ease.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* 4. Our Approach */}
            <Section className="py-24 md:py-32">
                <Container>
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Approach</h2>
                        </motion.div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Simplicity", description: "Reducing complexity through intuitive design and orchestration." },
                                { title: "Scalability", description: "Built to handle growth without compromising on performance." },
                                { title: "Performance", description: "Optimized for speed and reliability at every layer." },
                                { title: "Accessibility", description: "Empowering more people to build and use technology." }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-8 rounded-3xl border border-border/40 bg-card/20 space-y-4"
                                >
                                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 5. What We Believe */}
            <Section className="py-24 md:py-32 bg-muted/10 border-y border-border/10">
                <Container>
                    <div className="mx-auto max-w-4xl space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Believe</h2>
                        </motion.div>

                        <div className="grid gap-10">
                            {[
                                { title: "Technology should be accessible", description: "Powerful tools shouldn't be reserved only for those with deep technical knowledge." },
                                { title: "Tools should work together", description: "Fragmented software is a barrier to progress. We believe in total interoperability." },
                                { title: "Platforms should grow with users", description: "The foundation of a tool should never limit its future potential." }
                            ].map((belief, index) => (
                                <motion.div
                                    key={belief.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className={cn(
                                        "flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left",
                                        index % 2 === 1 && "md:flex-row-reverse md:text-right"
                                    )}
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold tracking-tight">{belief.title}</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                            {belief.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 6. Future Direction */}
            <Section className="py-32 md:py-48 text-center border-t border-border/10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Future Direction</h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-normal">
                            Horayzan is built to evolve into a growing ecosystem of powerful tools. We are constantly expanding our shared infrastructure to support the next era of digital builders.
                        </p>
                        <div className="pt-8">
                            <div className="h-0.5 w-24 bg-primary/20 mx-auto rounded-full" />
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </div>
    )
}
