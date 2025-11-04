import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Statistics from '@/components/sections/Statistics'
import Technologies from '@/components/sections/Technologies'
import Features from '@/components/sections/Features'
import Certifications from '@/components/sections/Certifications'
import AboutCTA from '@/components/sections/AboutCTA'
import CallToAction from '@/components/sections/CallToAction'
import ContactCTA from '@/components/sections/ContactCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "GInfra Travancore - Precision Manufacturing for Defence, Aerospace & Advanced Robotics",
  description: "Leading precision manufacturing company in Telangana, India. We specialize in defence components, aerospace parts, and advanced robotics with ISO 9001 & AS9100 certifications. Located in Cherlapally and EMC Maheshwaram.",
  keywords: "precision manufacturing, defence components, aerospace manufacturing, advanced robotics, CNC machining, artillery fuzes, electronics integration, ISO 9001, AS9100, Telangana, India",
  openGraph: {
    title: "GInfra Travancore - Precision Manufacturing Excellence",
    description: "Leading precision manufacturing company specializing in defence, aerospace, and advanced robotics components in Telangana, India.",
    url: "https://ginfratravancore.com",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Statistics />
      <Technologies />
      <Features />
      <Certifications />
      <AboutCTA />
      <CallToAction />
      <ContactCTA />
    </main>
  )
}
