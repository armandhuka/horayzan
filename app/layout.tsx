import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Horayzan - Fullstack Platform Foundation",
    template: "%s | Horayzan",
  },
  description: "A clean, scalable Next.js + Supabase fullstack foundation for modern SaaS platforms.",
  openGraph: {
    title: "Horayzan",
    description: "Modern Fullstack Foundation",
    url: "https://horayzan.com",
    siteName: "Horayzan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horayzan",
    description: "Modern Fullstack Foundation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
