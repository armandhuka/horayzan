"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
    return (
        <Section className="pb-40 pt-24 border-t border-border/10">
            <Container>
                <div className="mx-auto max-w-4xl text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            Manifest Your Next <br />
                            <span className="text-primary italic font-serif">Horizon.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            The infrastructure is ready. The ecosystem is live. Join the forefront of digital evolution and build without boundaries.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/signup">
                            <Button size="lg" className="rounded-full px-16 h-20 text-xl font-bold shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 active:scale-95 group">
                                Get Started Now
                                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
