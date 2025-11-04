import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Defence Components - GInfra Travancore | Ammunition Manufacturing & Military Systems",
  description: "Specialized defence manufacturing for ammunition components (23mm-155mm), cartridge cases, BMCS modular charge systems, and mechanical fusing solutions. NATO STANAG compliant with MIL-STD certification.",
  keywords: "defence components, ammunition manufacturing, cartridge cases, mechanical fuses, BMCS modular charge system, military manufacturing, NATO STANAG, MIL-STD, defence contractor",
  openGraph: {
    title: "Defence Components Manufacturing - GInfra Travancore",
    description: "Specialized ammunition components and military-grade systems manufacturing with NATO STANAG compliance.",
    url: "https://ginfratravancore.com/services/defence",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com/services/defence",
  },
}

export default function DefenceComponents() {
  return (
    <main className="min-h-screen bg-white">
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Defence</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">Components</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Specialized <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">ammunition components</span> and military-grade systems for modern combat operations
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

      {/* Breadcrumb */}
      <section className="py-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <Link href="/services/all" className="text-gray-500 hover:text-gray-700">Services</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">Defence Components</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Ammunition Components</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our product portfolio includes metallic and combustible cartridge cases (23mm-155mm), BMCS M91/M92 modular charge systems, and advanced mechanical fusing solutions, all built to meet the stringent demands of modern combat operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Small Caliber (23mm-30mm)</h3>
                    <p className="text-gray-700">For GAU-8/A, MK44 Bushmaster, naval CIWS - up to 400 MPa operating pressure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Medium Caliber (40mm)</h3>
                    <p className="text-gray-700">MK19, GMG, Bofors systems with programmable airburst capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Large Caliber (105mm-155mm)</h3>
                    <p className="text-gray-700">L7, M68, M777, PzH 2000 artillery systems - 420-450 MPa operating pressure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tank Gun Systems (120mm-125mm)</h3>
                    <p className="text-gray-700">FSAPDS and HESH rounds for Leopard 2, M1A1 Abrams, T-72, T-90</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">450 MPa</div>
                  <div className="text-sm text-gray-700">Max Operating Pressure</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">1,800 m/s</div>
                  <div className="text-sm text-gray-700">Max Muzzle Velocity</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15+ Years</div>
                  <div className="text-sm text-gray-700">Storage Life</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">NATO</div>
                  <div className="text-sm text-gray-700">STANAG Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for our complete range of ammunition components
            </p>
          </div>

          {/* Cartridge Cases Specifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-8 text-center">Cartridge Cases Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Caliber</th>
                    <th className="px-6 py-4 text-left">Material</th>
                    <th className="px-6 py-4 text-left">Compatible Weapons</th>
                    <th className="px-6 py-4 text-left">Operating Pressure</th>
                    <th className="px-6 py-4 text-left">Muzzle Velocity</th>
                    <th className="px-6 py-4 text-left">Storage Life</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">23mm</td>
                    <td className="px-6 py-4">Hardened steel alloy</td>
                    <td className="px-6 py-4">GAU-8/A, Shipunov 2A42, MK44 Bushmaster II</td>
                    <td className="px-6 py-4">Up to 400 MPa</td>
                    <td className="px-6 py-4">970-1,060 m/s</td>
                    <td className="px-6 py-4">10+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">30mm</td>
                    <td className="px-6 py-4">Brass or hardened steel</td>
                    <td className="px-6 py-4">GAU-8/A, Shipunov 2A42, MK44 Bushmaster II</td>
                    <td className="px-6 py-4">Up to 340 MPa</td>
                    <td className="px-6 py-4">1,000-1,080 m/s</td>
                    <td className="px-6 py-4">10+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">40mm</td>
                    <td className="px-6 py-4">Aluminum alloy or brass</td>
                    <td className="px-6 py-4">MK19, GMG, Bofors 40mm L/60, L/70</td>
                    <td className="px-6 py-4">250-400 MPa (system dependent)</td>
                    <td className="px-6 py-4">240 m/s (grenade launcher) - 1,020 m/s (naval)</td>
                    <td className="px-6 py-4">10+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">105mm</td>
                    <td className="px-6 py-4">High-strength alloy steel</td>
                    <td className="px-6 py-4">L7, M68, L118</td>
                    <td className="px-6 py-4">420-450 MPa</td>
                    <td className="px-6 py-4">1,450-1,500 m/s</td>
                    <td className="px-6 py-4">15+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">120mm FSAPDS</td>
                    <td className="px-6 py-4">Laminated cloth with resin</td>
                    <td className="px-6 py-4">Leopard 2, M1A1 Abrams, Arjun MkII</td>
                    <td className="px-6 py-4">High pressure tank gun specification</td>
                    <td className="px-6 py-4">1,750+ m/s</td>
                    <td className="px-6 py-4">10+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">125mm FSAPDS</td>
                    <td className="px-6 py-4">Layered nitrocellulose paper</td>
                    <td className="px-6 py-4">T-72, T-90 smoothbore guns</td>
                    <td className="px-6 py-4">High pressure tank gun specification</td>
                    <td className="px-6 py-4">1,800 m/s</td>
                    <td className="px-6 py-4">10+ years, sealed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-blue-600">155mm</td>
                    <td className="px-6 py-4">Steel/brass or nitrocellulose composite</td>
                    <td className="px-6 py-4">M777, PzH 2000, FH77B</td>
                    <td className="px-6 py-4">420-450 MPa</td>
                    <td className="px-6 py-4">800-1,000 m/s</td>
                    <td className="px-6 py-4">15+ years (metallic), 10+ years (combustible)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-6">
            Ready to Discuss Your Defence Requirements?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our defence manufacturing specialists to discuss your ammunition component needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Request Quote
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Link>
            <Link
              href="/services/all"
              className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View All Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}