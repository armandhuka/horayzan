"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"

export function ExplainPlatform() {
    return (
        <Section className="py-24 md:py-32">
            <Container>
                <div className="mx-auto max-w-4xl text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Beyond a Product.
                                <br />
                                <span className="text-muted-foreground/50">An Infrastructure.</span>
                            </h2>
                            <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
                                Horayzan is the unified pillar supporting the next generation of digital solutions.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-normal">
                                We eliminate the redundant technical overhead of identity, security, and global distribution. By providing a rock-solid foundation, we enable specialized tools to reach their full potential faster than ever before.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
