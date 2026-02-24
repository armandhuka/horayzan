import { Hero } from "@/components/marketing/hero"
import { ExplainPlatform } from "@/components/marketing/explain-platform"
import { WhyHorayzan } from "@/components/marketing/why-horayzan"
import { WhoItIsFor } from "@/components/marketing/who-it-is-for"
import { PlatformCapabilities } from "@/components/marketing/platform-capabilities"
import { UserExperience } from "@/components/marketing/user-experience"
import { CTA } from "@/components/marketing/cta"

export default function RedesignedHomePage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <ExplainPlatform />
            <WhyHorayzan />
            <WhoItIsFor />
            <PlatformCapabilities />
            <UserExperience />
            <CTA />
        </div>
    )
}
