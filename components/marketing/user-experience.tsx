"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { MousePointer2 } from "lucide-react"

export function UserExperience() {
    return (
        <Section className="py-24 md:py-32">
            <Container>
                <div className="grid gap-20 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10"
                    >
                        <div className="h-14 w-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
                            <MousePointer2 className="h-7 w-7" />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl leading-[1.15]">
                                A Seamless Experience
                                <br />
                                <span className="text-muted-foreground/60">Defined by Unity.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-normal">
                                Navigating Horayzan feels like a single, liquid experience. We eliminate the learning curve by maintaining a strict, shared design language across every single platform node.
                            </p>
                        </div>
                        <ul className="grid gap-5 text-foreground/80 font-medium">
                            {[
                                "Native Single Sign-On (SSO)",
                                "Unified Billing & Consumption Engine",
                                "Shared Global Data Workspace",
                                "Harmonious Component Architecture"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-[4/3] rounded-[3.5rem] bg-muted/30 overflow-hidden border border-border/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-2">
                                <p className="text-muted-foreground/30 font-mono text-xs tracking-[0.2em] uppercase">
                                    Interface System
                                </p>
                                <div className="h-px w-10 bg-border/40 mx-auto" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
