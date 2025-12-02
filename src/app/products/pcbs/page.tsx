import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PCBs | GInfra Travancore - Defense-Grade Electronic Assemblies',
  description: 'Defense-grade PCBs and electronic assemblies for military applications. Multi-layer boards, ruggedized designs, RF/communication systems, and power electronics.',
  keywords: 'PCBs, printed circuit boards, defense electronics, military PCBs, ruggedized PCBs, RF PCBs, power electronics, electronic assemblies',
  openGraph: {
    title: 'PCBs | GInfra Travancore',
    description: 'Defense-grade PCBs and electronic assemblies for military applications',
    type: 'website',
  },
}

export default function PCBsPage() {
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
                Defense-Grade Electronic Solutions
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">PCBs & Electronics</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">for Defense</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Advanced electronic assemblies for <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">mission-critical applications</span> with superior performance and reliability.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCB & Electronics Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                GInfra Travancore specializes in designing and manufacturing defense-grade printed circuit boards (PCBs) and electronic assemblies that meet the stringent requirements of military and aerospace applications. Our PCBs are engineered to operate reliably in harsh environments, from extreme temperatures to high-vibration conditions.
              </p>
              <p className="text-lg leading-relaxed">
                We provide comprehensive solutions from concept to production, including multi-layer boards, ruggedized designs, RF/microwave circuits, power electronics, and complete electronic assemblies for defense systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Capabilities</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Multi-Layer PCB Design */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Multi-Layer PCB Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced multi-layer PCB designs with up to 32 layers, featuring controlled impedance, blind/buried vias, and high-density interconnects for complex defense electronics.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-density interconnect (HDI) technology</li>
                <li>• Controlled impedance design</li>
                <li>• Advanced via structures</li>
                <li>• Signal integrity optimization</li>
              </ul>
            </div>

            {/* Ruggedized Designs */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ruggedized Designs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Military-grade PCBs designed to withstand extreme environmental conditions including shock, vibration, temperature cycling, and electromagnetic interference.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• MIL-STD-810 environmental testing</li>
                <li>• Conformal coating applications</li>
                <li>• Thermal management solutions</li>
                <li>• EMI/EMC compliance</li>
              </ul>
            </div>

            {/* RF & Communication Systems */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">RF & Communication Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized RF and microwave PCBs for communication systems, radar applications, and electronic warfare platforms with precise impedance control and low-loss materials.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• High-frequency design expertise</li>
                <li>• Low-loss dielectric materials</li>
                <li>• Antenna integration</li>
                <li>• Signal isolation techniques</li>
              </ul>
            </div>

            {/* Power Electronics */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Power Electronics</h3>
              </div>
              <p className="text-gray-600 mb-4">
                High-power PCB designs for power conversion, motor control, and energy management systems with advanced thermal management and current-carrying capabilities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Heavy copper PCBs (up to 10oz)</li>
                <li>• Thermal interface materials</li>
                <li>• Power distribution networks</li>
                <li>• Isolation and safety features</li>
              </ul>
            </div>

            {/* Electronic Assembly */}
            <div className="bg-white rounded-xl shadow-lg p-8 lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Complete Electronic Assembly</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Full-service electronic assembly including surface mount technology (SMT), through-hole assembly, cable harnesses, and system integration with comprehensive testing and quality assurance.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• Surface mount technology (SMT)</li>
                  <li>• Through-hole component assembly</li>
                  <li>• Ball grid array (BGA) assembly</li>
                  <li>• Fine-pitch component placement</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cable harness manufacturing</li>
                  <li>• System-level integration</li>
                  <li>• Automated optical inspection (AOI)</li>
                  <li>• In-circuit testing (ICT)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defense-Specific Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Defense-Specific Advantages</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security Compliance</h3>
              <p className="text-gray-600">ITAR compliance and secure manufacturing processes</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Prototyping</h3>
              <p className="text-gray-600">Fast turnaround for prototype and low-volume production</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">AS9100 and ISO 9001 certified quality management</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored designs for specific mission requirements</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Supply Chain Security</h3>
              <p className="text-gray-600">Trusted component sourcing and traceability</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Long-Term Support</h3>
              <p className="text-gray-600">Extended product lifecycle management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Applications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electronic Fuzes</h3>
              <p className="text-gray-600 mb-4">Advanced PCBs for programmable fuze systems with precise timing control and safety mechanisms.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Timing circuit boards</li>
                <li>• Safety and arming systems</li>
                <li>• Sensor interface boards</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fire-Control Systems</h3>
              <p className="text-gray-600 mb-4">High-reliability PCBs for weapon control systems requiring real-time processing and fail-safe operation.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Ballistic computers</li>
                <li>• Target tracking systems</li>
                <li>• Weapon interface modules</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">UAV Control Systems</h3>
              <p className="text-gray-600 mb-4">Lightweight, ruggedized PCBs for unmanned aerial vehicle flight control and payload management.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Flight control computers</li>
                <li>• Navigation systems</li>
                <li>• Payload control boards</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication Systems</h3>
              <p className="text-gray-600 mb-4">RF and digital communication PCBs for secure military communication networks and data links.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Radio transceivers</li>
                <li>• Encryption modules</li>
                <li>• Antenna control units</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Power Distribution</h3>
              <p className="text-gray-600 mb-4">High-current PCBs for power management and distribution in military vehicles and platforms.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Power converters</li>
                <li>• Battery management systems</li>
                <li>• Load distribution panels</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sensor Systems</h3>
              <p className="text-gray-600 mb-4">Precision PCBs for various sensor applications including radar, sonar, and electro-optical systems.</p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Radar signal processing</li>
                <li>• Sonar arrays</li>
                <li>• Optical sensor interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Specifications</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Specification</th>
                    <th className="px-6 py-4 text-left">Standard PCB</th>
                    <th className="px-6 py-4 text-left">Ruggedized PCB</th>
                    <th className="px-6 py-4 text-left">RF/Microwave</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Layer Count</td>
                    <td className="px-6 py-4 text-gray-600">2-16 layers</td>
                    <td className="px-6 py-4 text-gray-600">4-32 layers</td>
                    <td className="px-6 py-4 text-gray-600">2-20 layers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Operating Temperature</td>
                    <td className="px-6 py-4 text-gray-600">-40°C to +85°C</td>
                    <td className="px-6 py-4 text-gray-600">-55°C to +125°C</td>
                    <td className="px-6 py-4 text-gray-600">-40°C to +85°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Copper Weight</td>
                    <td className="px-6 py-4 text-gray-600">0.5-2oz</td>
                    <td className="px-6 py-4 text-gray-600">1-10oz</td>
                    <td className="px-6 py-4 text-gray-600">0.5-2oz</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Minimum Via Size</td>
                    <td className="px-6 py-4 text-gray-600">0.1mm</td>
                    <td className="px-6 py-4 text-gray-600">0.15mm</td>
                    <td className="px-6 py-4 text-gray-600">0.1mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Frequency Range</td>
                    <td className="px-6 py-4 text-gray-600">DC-1GHz</td>
                    <td className="px-6 py-4 text-gray-600">DC-1GHz</td>
                    <td className="px-6 py-4 text-gray-600">DC-40GHz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our PCBs */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose GInfra PCBs?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Military Standards</h3>
              <p className="text-gray-600">MIL-STD and IPC compliance for defense applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art manufacturing and design capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Manufacturing</h3>
              <p className="text-gray-600">ITAR-compliant facilities and processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated engineering support throughout the project lifecycle</p>
            </div>
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
                Partner with GInfra Travancore for precision PCB solutions that exceed expectations.
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