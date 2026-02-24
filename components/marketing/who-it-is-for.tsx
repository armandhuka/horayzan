"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { UserCircle, Building2, Code2 } from "lucide-react"

const audiences = [
    {
        title: "Creators",
        description: "Launch your personal brand and manage digital assets with ease.",
        icon: UserCircle,
    },
    {
        title: "Businesses",
        description: "Scale your operations and unify your company's digital infrastructure.",
        icon: Building2,
    },
    {
        title: "Developers",
        description: "Build on top of our robust foundation and extend platform capabilities.",
        icon: Code2,
    },
]

export function WhoItIsFor() {
    return (
        <Section className="py-24 md:py-32">
            <Container>
                <div className="space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Built for the Modern Builder</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            No matter your stage, Horayzan provides the power to manifest your digital vision.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {audiences.map((audience, index) => (
                            <motion.div
                                key={audience.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -10 }}
                                className="group flex flex-col items-center text-center p-12 rounded-[2.5rem] border border-border/40 bg-card/20 backdrop-blur-sm space-y-8 transition-all duration-500 hover:bg-card hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20"
                            >
                                <div className="h-20 w-20 rounded-[1.5rem] bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                                    <audience.icon className="h-10 w-10 stroke-[1]" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight">{audience.title}</h3>
                                    <p className="text-muted-foreground/90 leading-relaxed text-lg">
                                        {audience.description}
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
