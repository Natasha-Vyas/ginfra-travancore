export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Specialized defense manufacturing for high-performance ammunition components and advanced fusing solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a specialized defense manufacturer dedicated to the design, engineering, and production of high-performance ammunition components for land, sea, and air platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Defence Manufacturing */}
      <section id="defence" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ammunition Components</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our product portfolio includes metallic and combustible cartridge cases, modular charge systems, and advanced fusing solutions, all built to meet the stringent demands of modern combat operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cartridge Cases (23mm-155mm)</h3>
                    <p className="text-gray-700">Metallic and combustible cases for autocannons, tank guns, and artillery systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Modular Charge Systems</h3>
                    <p className="text-gray-700">BMCS M91/M92 modular propellant charges for scalable range control</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mechanical Fuse Systems</h3>
                    <p className="text-gray-700">Point-detonating, proximity/timed, and programmable airburst fuses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Combat Applications</h3>
                    <p className="text-gray-700">Air defense, armor defeat, fortification breach, naval point-defense, and indirect fire support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">450 MPa</div>
                  <div className="text-sm text-gray-700">Max Operating Pressure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1,800 m/s</div>
                  <div className="text-sm text-gray-700">Max Muzzle Velocity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+ Years</div>
                  <div className="text-sm text-gray-700">Storage Life</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">NATO</div>
                  <div className="text-sm text-gray-700">STANAG Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tank Gun Ammunition */}
      <section id="tankgun" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-lg order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tank Gun Specifications</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">120mm & 125mm Calibers</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">FSAPDS & HESH Rounds</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Combustible Cartridge Cases</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">1,750-1,800 m/s Muzzle Velocity</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tank Gun Ammunition</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Specialized combustible cartridge cases for main battle tank systems, designed for armor penetration and fortification breaching missions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">120mm FSAPDS</h3>
                    <p className="text-gray-700">For NATO systems: Leopard 2, M1A1 Abrams, Arjun MkII</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">125mm FSAPDS</h3>
                    <p className="text-gray-700">For Russian/Allied systems: T-72, T-90 smoothbore guns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">120mm HESH</h3>
                    <p className="text-gray-700">High-explosive squash head for fortification breaching</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clean Burn Technology</h3>
                    <p className="text-gray-700">Combustible cases leave negligible residue, improving operational tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section id="quality" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Quality Assurance</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Quality Assurance framework is designed to guarantee that every component leaving our facility performs flawlessly under operational conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pressure and Leak Testing</h3>
                    <p className="text-gray-700">Structural integrity verification under peak chamber pressures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Combustion and Timing Tests</h3>
                    <p className="text-gray-700">Propellant burn consistency and detonation timing validation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dimensional Validation</h3>
                    <p className="text-gray-700">Laser measurement systems for micrometer-level precision</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Environmental Conditioning</h3>
                    <p className="text-gray-700">Temperature extremes, humidity, and salt-fog exposure testing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">MIL-STD Compliance</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">NATO STANAG Conformance</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">End-User Certification Support</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-sm text-gray-600 italic">
                  Through rigorous inspection, testing, and traceability, we ensure every component is ready for the most demanding combat environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section id="manufacturing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Manufacturing Capabilities</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing processes for high-performance ammunition components with exceptional precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">450 MPa</div>
              <div className="text-gray-700 font-medium mb-2">Max Pressure</div>
              <div className="text-sm text-gray-600">Operating pressure capability</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">μm</div>
              <div className="text-gray-700 font-medium mb-2">Precision</div>
              <div className="text-sm text-gray-600">Micrometer-level tolerances</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">-40°C to +55°C</div>
              <div className="text-gray-700 font-medium mb-2">Temperature Range</div>
              <div className="text-sm text-gray-600">Extreme environment capability</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+ Years</div>
              <div className="text-gray-700 font-medium mb-2">Storage Life</div>
              <div className="text-sm text-gray-600">Long-term reliability</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Materials & Processes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High-strength alloy steel</li>
                <li>• Hardened steel alloys</li>
                <li>• Brass and aluminum alloys</li>
                <li>• Nitrocellulose composites</li>
                <li>• Laminated cloth materials</li>
                <li>• Specialized surface treatments</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• CNC precision machining</li>
                <li>• Case forming and pressing</li>
                <li>• Surface treatment & coating</li>
                <li>• Environmental hardening</li>
                <li>• Fuse assembly & integration</li>
                <li>• Complete system testing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Compatibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GAU-8/A, MK44 Bushmaster</li>
                <li>• MK19, GMG, Bofors systems</li>
                <li>• L7, M68, M777, PzH 2000</li>
                <li>• Leopard 2, M1A1 Abrams</li>
                <li>• T-72, T-90 tank systems</li>
                <li>• Naval CIWS applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our engineering team to discuss your specific requirements and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg"
            >
              Request Quote
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}