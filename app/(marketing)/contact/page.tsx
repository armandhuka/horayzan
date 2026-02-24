"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle2 } from "lucide-react"

import { Container } from "@/components/shared/container"
import { Section } from "@/components/shared/section"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. Hero Section */}
            <Section className="pt-24 pb-12 md:pt-32 md:pb-20 border-b border-border/40">
                <Container className="text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight sm:text-6xl"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-2xl text-lg text-muted-foreground"
                    >
                        We&apos;re here to help you connect with the Horayzan platform.
                    </motion.p>
                </Container>
            </Section>

            {/* 2 & 3. Contact Form and Info Section */}
            <Section className="py-12 md:py-24 bg-muted/30">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-12 items-start">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="md:col-span-3 space-y-8"
                            >
                                <div className="p-8 md:p-10 rounded-[2.5rem] border border-border/40 bg-card shadow-2xl shadow-primary/5">
                                    {!isSubmitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-semibold ml-1">Name</label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    className="w-full h-12 px-4 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-semibold ml-1">Email</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    className="w-full h-12 px-4 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                                                <textarea
                                                    id="message"
                                                    required
                                                    rows={5}
                                                    placeholder="How can we help?"
                                                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none"
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full h-14 rounded-full font-bold text-base shadow-lg shadow-primary/10 transition-all hover:shadow-primary/20"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                        >
                                                            <Send className="h-4 w-4" />
                                                        </motion.div>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        Send Message <Send className="h-4 w-4" />
                                                    </span>
                                                )}
                                            </Button>
                                        </form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="py-12 text-center space-y-6"
                                        >
                                            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                                <CheckCircle2 className="h-10 w-10" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                                <p className="text-muted-foreground">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                                            </div>
                                            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-full">
                                                Send another message
                                            </Button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="md:col-span-2 space-y-10 py-6"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold tracking-tight">Get in touch</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Have questions about the platform or need technical assistance? Our team is available to support your digital journey.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">Email</p>
                                            <a href="mailto:hello@horayzan.com" className="text-lg font-semibold hover:text-primary transition-colors italic">
                                                hello@horayzan.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-border/40">
                                    <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                                        <p className="text-sm text-primary/80 leading-relaxed font-medium">
                                            Looking for immediate assistance? Check out our <a href="/blog" className="underline font-bold">Blog</a> for platform guides and technical documentation.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
