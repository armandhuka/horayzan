"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import Link from "next/link"

export function Hero() {
    return (
        <Section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-48 border-b border-border/40">
            <Container className="text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl font-bold tracking-tight sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] text-balance leading-[1.05]"
                        >
                            Everything You Need.
                            <br />
                            <span className="text-primary">Nothing You Don&apos;t.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mx-auto max-w-2xl text-lg text-muted-foreground/90 md:text-xl lg:text-2xl leading-relaxed font-normal"
                        >
                            Horayzan is the definitive technology ecosystem for visionaries ready to launch, manage, and scale high-impact digital solutions without the friction.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                    >
                        <Link href="/explore">
                            <Button size="lg" className="rounded-full px-12 h-16 text-base font-semibold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-1">
                                Explore the Platform
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="rounded-full px-12 h-16 text-base font-medium border-border/60 hover:bg-muted/50 transition-all duration-500 hover:-translate-y-1">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
