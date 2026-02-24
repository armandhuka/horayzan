"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"

export function Vision() {
    return (
        <Section className="overflow-hidden">
            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Vision</span>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Built as a Technology Launchpad
                            </h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Horayzan is the parent ecosystem powering multiple independent tools via subdomains.
                            We provide the specialized infrastructure that allows each product to stand alone
                            with its own identity, while benefiting from the collective intelligence of a
                            unified platform.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Each product stands alone. Together they create exponential value for businesses,
                            developers, and strategists worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted/30 shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4 p-8">
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [0, -10, 0],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 3 + i,
                                                repeat: Infinity,
                                                delay: i * 0.5,
                                            }}
                                            className="h-20 w-32 rounded-lg bg-primary/10 border border-primary/20"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
