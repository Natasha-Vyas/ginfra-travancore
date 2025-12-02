import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Cartridge Cases - GInfra Travancore | High-Performance Ammunition Components",
  description: "Comprehensive range of metallic and combustible cartridge cases (23mm-155mm) for land, air, and naval combat platforms. NATO STANAG compliant with MIL-STD certification for extreme pressure environments.",
  keywords: "cartridge cases, ammunition components, metallic cartridge cases, combustible cartridge cases, 23mm, 30mm, 40mm, 105mm, 155mm, 120mm, 125mm, FSAPDS, HESH, BMCS, NATO STANAG, MIL-STD",
  openGraph: {
    title: "Cartridge Cases Manufacturing - GInfra Travancore",
    description: "High-performance ammunition cartridge cases engineered for extreme pressure environments and combat operations.",
    url: "https://ginfra-travancore-liard.vercel.app/services/cartridge-cases",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfra-travancore-liard.vercel.app/services/cartridge-cases",
  },
}

export default function CartridgeCases() {
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
                High-Performance Ammunition Components for Combat Platforms
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cartridge</span>
              <span className="text-xl md:text-3xl font-medium text-gray-300 ml-3">Cases</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              GInfra Travancore manufactures a full range of high-performance ammunition cartridge cases engineered for 
              <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300"> land, air, and naval</span> combat platforms. 
              Built from high-strength materials and optimized for extreme pressure environments.
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">Combat-Ready Performance</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our cartridge cases deliver reliable ignition, stable chamber performance, and exceptional durability even under the harshest operational conditions. 
                Our portfolio includes 23mm, 30mm, 40mm, 105mm, 155mm metallic cartridge cases, as well as combustible cartridge cases for 120mm and 125mm rounds.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">High-Strength Materials</h3>
                    <p className="text-gray-700">Steel, brass, aluminum alloy, and advanced combustible materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">CNC Precision Manufacturing</h3>
                    <p className="text-gray-700">Precision forming & machining for optimal chamber integrity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pressure-Tested Safety</h3>
                    <p className="text-gray-700">Rigorous testing for chamber integrity and operational safety</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Standards Compliance</h3>
                    <p className="text-gray-700">MIL-STD and NATO-STANAG compliant across all platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Metrics</h3>
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
                  <div className="text-sm text-gray-700">Service Life</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">-40°C to +63°C</div>
                  <div className="text-sm text-gray-700">Operating Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Product Gallery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Cartridge Case Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-performance ammunition cartridge cases for various calibers and combat applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/72950692-38eb-4123-a177-c7ae7d8722df_125mm_APFSDS_shell_of_T-72_Tank.jpg"
                  alt="125mm APFSDS Shell for T-72 Tank"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">125mm APFSDS Shell</h3>
                <p className="text-gray-600 mb-3">High-velocity armor-piercing fin-stabilized discarding sabot shell for T-72 tank applications</p>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Tank Main Gun Systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/6d9cf34b-b9c2-4226-8090-355c051b33fa_165-HEIT.webp"
                  alt="165mm HEIT Cartridge"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">165mm HEIT Cartridge</h3>
                <p className="text-gray-600 mb-3">High-explosive incendiary tracer cartridge for heavy artillery applications</p>
                <div className="flex items-center text-sm text-cyan-600">
                  <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
                  Heavy Artillery Systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/72180194-8ca1-4dbe-9d97-2606e85e4efd_Ammo_23mm_cannon%20%281%29.jpg"
                  alt="23mm Cannon Ammunition"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">23mm Cannon Ammunition</h3>
                <p className="text-gray-600 mb-3">High-performance 23mm cannon ammunition for air defense and ground attack systems</p>
                <div className="flex items-center text-sm text-purple-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Air Defense Systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/ead651b0-562b-45b1-a675-fda1bf0f37bc_e44fa198-b23f-4625-9032-51d0a78dfd1b.jpg"
                  alt="Artillery Shell Components"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Artillery Shell Components</h3>
                <p className="text-gray-600 mb-3">Precision-manufactured artillery shell components and cartridge case assemblies</p>
                <div className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Component Manufacturing
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/918f0621-5a5a-4114-a987-d6d287435c94_n5cXPeossV05XNZLyxYcdoFAV0m2HTObq1bSSrz8HjO0vZPbbjIwoMC222XKRBTnLuNixNXcvxnTIkuUcCGKRS6iuCDAxcNF8RuxoFBAMKpdJF9GcLASqqFGD_CbzRPE8fqWVcu35U_h8QZxDI4UbA.jpg"
                  alt="Large Caliber Ammunition"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Large Caliber Ammunition</h3>
                <p className="text-gray-600 mb-3">Heavy artillery ammunition systems for main battle tanks and field artillery</p>
                <div className="flex items-center text-sm text-orange-600">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                  Main Battle Tank Systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0eecae55-3d85-4051-911e-a0fac0d1384a_NGAC.png"
                  alt="NGAC Cartridge System"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">NGAC Cartridge System</h3>
                <p className="text-gray-600 mb-3">Next-generation artillery cartridge system with advanced propellant technology</p>
                <div className="flex items-center text-sm text-red-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Advanced Artillery Systems
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <img
                  src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/3b187acd-c9ea-4cce-b827-34c918cdb339_original.jpg"
                  alt="Precision Cartridge Manufacturing"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Manufacturing</h3>
                <p className="text-gray-600 mb-3">State-of-the-art manufacturing processes for high-precision cartridge cases</p>
                <div className="flex items-center text-sm text-indigo-600">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  CNC Manufacturing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Complete Product Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Cartridge Cases Range</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of metallic and combustible cartridge cases for all combat platforms
            </p>
          </div>

          {/* Small Caliber Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Small Caliber Cartridge Cases</h3>
                <p className="text-blue-100">High-rate-of-fire autocannons for air defense and light armor engagement</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* 23mm */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">23mm Cartridge Case</h4>
                    <p className="text-gray-700 mb-4">
                      Designed for high-rate-of-fire autocannons where reliability, structural strength, and resistance to corrosion are critical. 
                      Manufactured from high-strength steel to withstand rapid pressure cycles.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Air-defence against low-flying aircraft
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Engagement of unmanned aerial vehicles
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Suppression of light armored vehicles
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Convoy protection
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Specifications:</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><span className="font-medium">Material:</span> Steel</div>
                        <div><span className="font-medium">Caliber:</span> 23mm</div>
                        <div><span className="font-medium">Operating Temp:</span> −40°C to +55°C</div>
                        <div><span className="font-medium">Service Life:</span> 10+ years</div>
                        <div className="col-span-2"><span className="font-medium">Compliance:</span> MIL-STD, NATO STANAG</div>
                      </div>
                    </div>
                  </div>

                  {/* 30mm */}
                  <div className="border-l-4 border-cyan-500 pl-6">
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">30mm Cartridge Case</h4>
                        <p className="text-gray-700 mb-4">
                          Engineered for medium-caliber autocannons used in aircraft, naval vessels, and armored vehicles.
                          CNC-machined from steel or brass, ensuring high ballistic performance and exceptional destructive capability.
                        </p>
                      </div>
                      <div className="lg:w-48 flex-shrink-0">
                        <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-12 h-12 text-cyan-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <p className="text-sm text-gray-600 font-medium">30mm Cartridge Case</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                        Anti-armor capability
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                        Air-defense performance
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                        Naval point-defense efficiency
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Specifications:</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div><span className="font-medium">Material:</span> Brass or hardened steel</div>
                        <div><span className="font-medium">Compatible:</span> 2A42, Bushmaster II, M230</div>
                        <div><span className="font-medium">Muzzle Velocity:</span> &gt;1,000 m/s</div>
                        <div><span className="font-medium">Service Life:</span> 15+ years</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium & Large Caliber Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Medium & Large Caliber Cases</h3>
                <p className="text-purple-100">High-explosive, armor-piercing, and artillery systems</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* 40mm */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">40mm Cartridge Case</h4>
                    <p className="text-gray-700 mb-4">
                      Supports high-explosive, airburst, and armor-piercing munitions for infantry, vehicle-mounted, and naval grenade launchers. 
                      Larger volume allows optimized payload capacity.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Area suppression
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Anti-vehicle engagement
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        Close-range naval defense
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Specifications:</h5>
                      <div className="text-sm space-y-1">
                        <div><span className="font-medium">Material:</span> Aluminum alloy or steel</div>
                        <div><span className="font-medium">Caliber:</span> 40×53mm</div>
                        <div><span className="font-medium">Compatible:</span> Mk19, H&K GMG, Bofors L/70</div>
                        <div><span className="font-medium">Temp Range:</span> −40°C to +63°C</div>
                      </div>
                    </div>
                  </div>

                  {/* 105mm */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">105mm Cartridge Case</h4>
                    <p className="text-gray-700 mb-4">
                      Designed for main battle tank guns and artillery direct-fire platforms. 
                      Handles high-energy propellant charges for extreme velocities and long-range penetration.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Armor penetration
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Long-range fire support
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Specifications:</h5>
                      <div className="text-sm space-y-1">
                        <div><span className="font-medium">Material:</span> High-strength alloy steel</div>
                        <div><span className="font-medium">Compatible:</span> M68, L118, L119</div>
                        <div><span className="font-medium">Muzzle Velocity:</span> ~1,450–1,500 m/s</div>
                        <div><span className="font-medium">Primer:</span> Integrated in-base</div>
                      </div>
                    </div>
                  </div>

                  {/* 155mm */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">155mm Cartridge Case</h4>
                    <p className="text-gray-700 mb-4">
                      Used in heavy artillery systems, available in both metallic and combustible configurations. 
                      Designed to withstand extreme chamber pressures with optimal gas-tight sealing.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Optimal gas-tight sealing
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Minimal residue in chamber
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        High reliability in tactical conditions
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Specifications:</h5>
                      <div className="text-sm space-y-1">
                        <div><span className="font-medium">Compatible:</span> M777, FH77B, PzH 2000</div>
                        <div><span className="font-medium">Operating Temp:</span> −40°C to +63°C</div>
                        <div><span className="font-medium">Compliance:</span> NATO-STANAG</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Combustible Cartridge Cases Section */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Combustible Cartridge Cases</h3>
                <p className="text-red-100">Advanced tank ammunition for extreme velocities and efficient propellant burning</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* 120mm & 125mm FSAPDS */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">120mm & 125mm FSAPDS</h4>
                    <p className="text-gray-700 mb-4">
                      Developed for Fin-Stabilized Armor-Piercing Discarding Sabot tank ammunition, 
                      enabling extreme velocities and efficient propellant burning.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        120mm CCC: NATO-standard smoothbore guns
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        125mm CCC: Russian-standard guns
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Laminated nitrocellulose structure
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Minimal residue after firing
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Compatible Systems:</h5>
                      <div className="text-sm space-y-1">
                        <div>Leopard 2, Arjun Mk-II (120mm)</div>
                        <div>T-72, T-90 variants (125mm)</div>
                      </div>
                    </div>
                  </div>

                  {/* 120mm HESH */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">120mm HESH</h4>
                    <p className="text-gray-700 mb-4">
                      The 120mm HESH cartridge case is optimized for fortification breaching, 
                      bunker neutralization, and light armor defeat.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Fortification breaching
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Bunker neutralization
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Light armor defeat
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Features:</h5>
                      <div className="text-sm space-y-1">
                        <div>Multi-layered cellulose tubes</div>
                        <div>Precise ignition</div>
                        <div>Clean pressure curves</div>
                        <div>Safe residue-free combustion</div>
                      </div>
                    </div>
                  </div>

                  {/* Modular Charge System */}
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">155mm M91 & M92 BMCS</h4>
                    <p className="text-gray-700 mb-4">
                      The 155mm BMCS is a modern artillery propellant system offering scalable range control 
                      and clean-burning performance.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        M91 (Zones 1–3): Granular propellant
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        M92 (Zones 4–7): Higher energy formulation
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Scalable range control
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        Clean-burning performance
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Applications:</h5>
                      <div className="text-sm space-y-1">
                        <div>Short- to mid-range engagements (M91)</div>
                        <div>Extended-range artillery fire (M92)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Excellence in Manufacturing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4">Why Choose GInfra Cartridge Cases?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven performance across land, sea & air weapon systems with uncompromising quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Strength Materials</h3>
              <p className="text-gray-700">High-strength steels, alloys, and advanced combustible materials for maximum durability</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CNC Precision</h3>
              <p className="text-gray-700">CNC precision forming & machining for optimal dimensional accuracy and consistency</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pressure-Tested Safety</h3>
              <p className="text-gray-700">Pressure-tested for chamber integrity and safety under extreme operational conditions</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standards Compliance</h3>
              <p className="text-gray-700">Designed to meet MIL-STD and NATO-STANAG compliance across all weapon systems</p>
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
                Partner with Excellence
              </div>
            </div>
            
            {/* Enhanced main title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-200">
              <span className="block text-white mb-2 drop-shadow-2xl">Ready for</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Mission-Critical Performance?
              </span>
            </h2>
            
            {/* Enhanced description */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
                Experience the reliability and precision of GInfra Travancore cartridge cases.
                <span className="text-blue-400 font-bold"> Contact us</span> to discuss your ammunition component requirements and discover how our
                <span className="text-cyan-400 font-bold"> advanced manufacturing capabilities</span> can support your mission success.
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
                  Request Quote
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/services/defence"
                className="relative inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 backdrop-blur-sm cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  View All Defence Products
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
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