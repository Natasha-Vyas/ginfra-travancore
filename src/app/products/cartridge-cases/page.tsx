import { Metadata } from 'next'
import Link from 'next/link'

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
            {/* Subtitle with pill-style UI */}
            <div className="mb-4 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                High-Performance Ammunition Cases
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cartridge</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">Cases</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              High-performance <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">ammunition cartridge cases</span> engineered for extreme pressure environments with exceptional reliability.
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl order-2 lg:order-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Cartridge Case Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">MIL-STD & NATO STANAG Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Operating Temperature: -40°C to +63°C</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Service Life: 10-15+ years</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Pressure-Tested for Safety</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">High-Strength Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">CNC Precision Manufacturing</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Cartridge Cases</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                High-performance ammunition cartridge cases engineered for land, air, and naval combat platforms. Built from high-strength materials and optimized for extreme pressure environments with reliable ignition and exceptional durability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Metallic Cartridge Cases</h3>
                    <p className="text-gray-700">23mm, 30mm, 40mm, 105mm, 155mm steel and brass cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Combustible Cases</h3>
                    <p className="text-gray-700">120mm and 125mm FSAPDS and HESH configurations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Modular Charge Systems</h3>
                    <p className="text-gray-700">155mm M91 & M92 artillery propellant systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Advanced Materials</h3>
                    <p className="text-gray-700">High-strength steels, alloys, and combustible materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Product Gallery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Cartridge Case Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-performance ammunition cartridge cases for various calibers and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/72950692-38eb-4123-a177-c7ae7d8722df_125mm_APFSDS_shell_of_T-72_Tank.jpg"
                  alt="125mm APFSDS Shell for T-72 Tank"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">125mm APFSDS Shell</h3>
                <p className="text-gray-600">High-velocity armor-piercing fin-stabilized discarding sabot shell for T-72 tank applications</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6d9cf34b-b9c2-4226-8090-355c051b33fa_165-HEIT.webp"
                  alt="165mm HEIT Cartridge"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">165mm HEIT Cartridge</h3>
                <p className="text-gray-600">High-explosive incendiary tracer cartridge for heavy artillery applications</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/72180194-8ca1-4dbe-9d97-2606e85e4efd_Ammo_23mm_cannon%20%281%29.jpg"
                  alt="23mm Cannon Ammunition"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">23mm Cannon Ammunition</h3>
                <p className="text-gray-600">High-performance 23mm cannon ammunition for air defense and ground attack systems</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ead651b0-562b-45b1-a675-fda1bf0f37bc_e44fa198-b23f-4625-9032-51d0a78dfd1b.jpg"
                  alt="Artillery Shell Components"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Artillery Shell Components</h3>
                <p className="text-gray-600">Precision-manufactured artillery shell components and cartridge case assemblies</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/918f0621-5a5a-4114-a987-d6d287435c94_n5cXPeossV05XNZLyxYcdoFAV0m2HTObq1bSSrz8HjO0vZPbbjIwoMC222XKRBTnLuNixNXcvxnTIkuUcCGKRS6iuCDAxcNF8RuxoFBAMKpdJF9GcLASqqFGD_CbzRPE8fqWVcu35U_h8QZxDI4UbA.jpg"
                  alt="Large Caliber Ammunition"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Large Caliber Ammunition</h3>
                <p className="text-gray-600">Heavy artillery ammunition systems for main battle tanks and field artillery</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0eecae55-3d85-4051-911e-a0fac0d1384a_NGAC.png"
                  alt="NGAC Cartridge System"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">NGAC Cartridge System</h3>
                <p className="text-gray-600">Next-generation artillery cartridge system with advanced propellant technology</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3b187acd-c9ea-4cce-b827-34c918cdb339_original.jpg"
                  alt="Precision Cartridge Manufacturing"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Manufacturing</h3>
                <p className="text-gray-600">State-of-the-art manufacturing processes for high-precision cartridge cases</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/def47e2d-7965-4fde-8a71-3a78c967db6f_M107_M795_M483A1.jpg"
                  alt="M107 M795 M483A1 Artillery Shells"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">M107/M795/M483A1 Artillery</h3>
                <p className="text-gray-600">Advanced 155mm artillery shells including high-explosive and precision-guided munitions</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-transparent">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6b9a1627-498d-43d7-a671-00e457e0a024_MK53_fuze.jpg"
                  alt="MK53 Fuze System"
                  className="w-full h-[35vh] md:h-64 object-contain group-hover:scale-105 transition-transform duration-300 bg-transparent"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">MK53 Fuze System</h3>
                <p className="text-gray-600">Advanced proximity fuze system for enhanced artillery effectiveness and target engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Capabilities */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Materials & Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Materials & Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced materials and manufacturing capabilities for ammunition cartridge cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Cartridge Types</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 23mm Steel Cases</li>
                <li>• 30mm Brass/Steel Cases</li>
                <li>• 40mm Aluminum/Steel Cases</li>
                <li>• 105mm High-Strength Alloy</li>
                <li>• 155mm Metallic/Combustible</li>
                <li>• 120mm/125mm Combustible</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Manufacturing Processes</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• CNC Precision Forming</li>
                <li>• Deep Drawing Operations</li>
                <li>• Heat Treatment & Annealing</li>
                <li>• Surface Treatments</li>
                <li>• Pressure Testing</li>
                <li>• Quality Inspection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Quality Standards</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• MIL-STD Compliance</li>
                <li>• NATO STANAG Conformance</li>
                <li>• Chamber Integrity Testing</li>
                <li>• Pressure Cycle Validation</li>
                <li>• Material Traceability</li>
                <li>• Environmental Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Testing & Validation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Testing & Validation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing protocols to ensure cartridge case reliability and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Performance Testing</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pressure Testing</h4>
                    <p className="text-gray-700">Chamber pressure validation and safety verification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Extraction Testing</h4>
                    <p className="text-gray-700">Case extraction force and reliability validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dimensional Accuracy</h4>
                    <p className="text-gray-700">Precise dimensional and tolerance verification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ballistic Testing</h4>
                    <p className="text-gray-700">Live-fire performance and reliability validation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">Environmental Testing</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Temperature Cycling</h4>
                    <p className="text-gray-700">Extreme temperature performance validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Corrosion Resistance</h4>
                    <p className="text-gray-700">Long-term storage and environmental protection</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vibration Testing</h4>
                    <p className="text-gray-700">Transportation and handling stress validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Storage Life Testing</h4>
                    <p className="text-gray-700">Long-term reliability and shelf-life validation</p>
                  </div>
                </div>
              </div>
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
                Partner with GInfra Travancore for precision cartridge cases that exceed expectations.
                <span className="text-blue-400 font-bold"> Let's discuss</span> how we can bring your vision to life with
                <span className="text-cyan-400 font-bold"> cutting-edge technology</span> and
                <span className="text-purple-400 font-bold"> unmatched expertise</span>.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500 relative z-10">
              <Link
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
              </Link>
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
    </main>
  )
}