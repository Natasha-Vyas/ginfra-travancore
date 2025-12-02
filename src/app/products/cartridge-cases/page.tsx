import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cartridge Cases | GInfra Travancore - High-Performance Ammunition Cases',
  description: 'High-performance ammunition cartridge cases for 23mm, 30mm, 40mm, 105mm, 155mm. Metallic and combustible cartridge cases for land, air, and naval combat platforms.',
  keywords: 'cartridge cases, ammunition cases, 23mm cartridge, 30mm cartridge, 40mm cartridge, 105mm cartridge, 155mm cartridge, combustible cartridge cases, metallic cartridge cases',
  openGraph: {
    title: 'Cartridge Cases | GInfra Travancore',
    description: 'High-performance ammunition cartridge cases for defense applications',
    type: 'website',
  },
}

export default function CartridgeCasesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                High-Performance Ammunition Cases
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cartridge Cases</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">for Combat Platforms</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Engineered for <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">extreme pressure environments</span> with reliable ignition and exceptional durability.
            </p>
          </div>
        </div>
        
        {/* Enhanced decorative elements with animations */}
        <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-spin-slow"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border border-cyan-400/30 rounded-full animate-bounce-slow"></div>
        <div className="hidden md:block absolute top-1/2 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/50 rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/50 rounded-full animate-float delay-1000"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                GInfra Travancore manufactures a full range of high-performance ammunition cartridge cases engineered for land, air, and naval combat platforms. Built from high-strength materials and optimized for extreme pressure environments, our cartridge cases deliver reliable ignition, stable chamber performance, and exceptional durability even under the harshest operational conditions.
              </p>
              <p className="text-lg leading-relaxed">
                Our portfolio includes 23mm, 30mm, 40mm, 105mm, 155mm metallic cartridge cases, as well as combustible cartridge cases for 120mm and 125mm rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range - Metallic Cases */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Metallic Cartridge Cases</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 23mm Cartridge Case */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">23mm Cartridge Case</h3>
              <p className="text-gray-600 mb-6">
                Designed for high-rate-of-fire autocannons where reliability, structural strength, and resistance to corrosion are critical. Manufactured from high-strength steel to withstand rapid pressure cycles.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Air-defence against low-flying aircraft</li>
                  <li>• Engagement of unmanned aerial vehicles</li>
                  <li>• Suppression of light armored vehicles</li>
                  <li>• Convoy protection</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Material:</strong> Steel</li>
                  <li><strong>Caliber:</strong> 23mm</li>
                  <li><strong>Operating Temp:</strong> −40°C to +55°C</li>
                  <li><strong>Service Life:</strong> 10+ years, corrosion-protected</li>
                  <li><strong>Compliance:</strong> MIL-STD, NATO STANAG</li>
                </ul>
              </div>
            </div>

            {/* 30mm Cartridge Case */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">30mm Cartridge Case</h3>
              <p className="text-gray-600 mb-6">
                Engineered for medium-caliber autocannons used in aircraft, naval vessels, and armored vehicles. CNC-machined from steel or brass, ensuring high ballistic performance and exceptional destructive capability.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Capabilities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Anti-armor capability</li>
                  <li>• Air-defense performance</li>
                  <li>• Naval point-defense efficiency</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Material:</strong> Brass or hardened steel</li>
                  <li><strong>Compatible Weapons:</strong> 2A42, Bushmaster II, M230 Chain Gun</li>
                  <li><strong>Muzzle Velocity:</strong> &gt;1,000 m/s</li>
                  <li><strong>Service Life:</strong> 15+ years</li>
                </ul>
              </div>
            </div>

            {/* 40mm Cartridge Case */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">40mm Cartridge Case</h3>
              <p className="text-gray-600 mb-6">
                Supports high-explosive, airburst, and armor-piercing munitions for infantry, vehicle-mounted, and naval grenade launchers. Its larger volume allows optimized payload capacity.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Used for:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Area suppression</li>
                  <li>• Anti-vehicle engagement</li>
                  <li>• Close-range naval defense</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Material:</strong> Aluminum alloy or steel</li>
                  <li><strong>Caliber:</strong> 40×53mm</li>
                  <li><strong>Compatible Weapons:</strong> Mk19, H&K GMG, Bofors L/70</li>
                  <li><strong>Temperature Range:</strong> −40°C to +63°C</li>
                </ul>
              </div>
            </div>

            {/* 105mm Cartridge Case */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">105mm Cartridge Case</h3>
              <p className="text-gray-600 mb-6">
                Designed for main battle tank guns and artillery direct-fire platforms. Handles high-energy propellant charges for extreme velocities and long-range penetration.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Capabilities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Armor penetration</li>
                  <li>• Long-range fire support</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Material:</strong> High-strength alloy steel</li>
                  <li><strong>Compatible Weapons:</strong> M68, L118, L119</li>
                  <li><strong>Muzzle Velocity:</strong> ~1,450–1,500 m/s</li>
                  <li><strong>Primer:</strong> Integrated in-base</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 155mm Cartridge Case */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">155mm Cartridge Case</h3>
            <p className="text-gray-600 mb-6">
              Used in heavy artillery systems, available in both metallic and combustible configurations. Designed to withstand extreme chamber pressures, ensuring optimal gas-tight sealing, minimal residue in chamber, and high reliability in tactical and training conditions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li><strong>Compatible Weapons:</strong> M777 howitzer, FH77B, PzH 2000</li>
                  <li><strong>Operating Temp:</strong> −40°C to +63°C</li>
                  <li><strong>Compliance:</strong> NATO-STANAG</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Optimal gas-tight sealing</li>
                  <li>• Minimal chamber residue</li>
                  <li>• High tactical reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combustible Cartridge Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Combustible Cartridge Cases</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 120mm & 125mm FSAPDS */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">120mm & 125mm FSAPDS</h3>
              <p className="text-gray-600 mb-6">
                Developed for Fin-Stabilized Armor-Piercing Discarding Sabot (FSAPDS) tank ammunition, these combustible cartridge cases enable extreme velocities and efficient propellant burning.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Configurations:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>120mm CCC:</strong> NATO-standard smoothbore guns (Leopard 2, Arjun Mk-II)</li>
                  <li><strong>125mm CCC:</strong> Russian-standard guns (T-72, T-90 variants)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Laminated nitrocellulose structure</li>
                  <li>• Minimal residue after firing</li>
                  <li>• Stable combustion under high pressure</li>
                </ul>
              </div>
            </div>

            {/* 120mm HESH */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">120mm HESH</h3>
              <p className="text-gray-600 mb-6">
                The 120mm HESH cartridge case is optimized for fortification breaching, bunker neutralization, and light armor defeat. Made from multi-layered cellulose tubes.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fortification breaching</li>
                  <li>• Bunker neutralization</li>
                  <li>• Light armor defeat</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Precise ignition</li>
                  <li>• Clean pressure curves</li>
                  <li>• Safe residue-free combustion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Charge System */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Modular Charge System – 155mm M91 & M92</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-8 text-center">
              The 155mm BMCS is a modern artillery propellant system offering scalable range control and clean-burning performance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">M91 (Zones 1–3)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Granular propellant</li>
                  <li>• Suitable for short- to mid-range engagements</li>
                  <li>• Optimized for tactical operations</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">M92 (Zones 4–7)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Higher energy formulation</li>
                  <li>• Enables extended-range artillery fire</li>
                  <li>• Enhanced ballistic performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cartridge Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose GInfra Cartridge Cases?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High-Strength Materials</h3>
              <p className="text-gray-600">Advanced steels, alloys, and combustible materials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CNC Precision</h3>
              <p className="text-gray-600">Precision forming & machining</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pressure Tested</h3>
              <p className="text-gray-600">Chamber integrity and safety validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Standards</h3>
              <p className="text-gray-600">MIL-STD and NATO-STANAG compliance</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven performance across land, sea & air weapon systems with designs optimized for chamber integrity, safety, and operational reliability in the most demanding environments.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Let's Build Together
              </div>
            </div>
            
            {/* Enhanced main title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="block text-white mb-2 drop-shadow-2xl">Ready to Start</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Your Next Project?
              </span>
            </h2>
            
            {/* Enhanced description */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                Partner with GInfra Travancore for precision cartridge cases that exceed expectations.
                <span className="text-blue-400 font-bold"> Let's discuss</span> how we can bring your vision to life with
                <span className="text-cyan-400 font-bold"> cutting-edge technology</span> and
                <span className="text-purple-400 font-bold"> unmatched expertise</span>.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 relative z-10">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-purple-600 hover:to-pink-600 text-white hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Get Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="mailto:info@ginfratravancore.com"
                className="relative inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 backdrop-blur-sm cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-bounce-slow"></div>
        <div className="hidden md:block absolute top-1/2 left-20 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping delay-1000"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-blue-400/40 rounded-full animate-float delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400/40 rounded-full animate-float delay-700"></div>
        </div>
      </section>
    </div>
  )
}