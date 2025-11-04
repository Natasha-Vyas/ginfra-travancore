import Hero from '@/components/sections/Hero'
import Overview from '@/components/sections/Overview'
import CoreCapabilities from '@/components/sections/CoreCapabilities'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <CoreCapabilities />
    </main>
  )
}
