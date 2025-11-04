'use client'
import { useState } from 'react'

export default function TechnicalSpecs() {
  const [activeTab, setActiveTab] = useState('process')

  const processFlow = [
    "Material Selection — High-strength alloy steel, brass, aluminum alloys, and nitrocellulose composites",
    "CNC Precision Machining — Exact tolerances for wall thickness, extraction groove depth, and case length",
    "Surface Treatment — Specialized coatings, friction welders, and corrosion-resistant treatments",
    "Environmental Hardening — Waterproof lacquers, anti-fungal coatings, and anti-static treatments",
    "Pressure Testing — Validation up to 450 MPa operating pressures for various calibers",
    "Dimensional Inspection — CMM verification of critical dimensions and tolerances",
    "Live-Fire Validation — Muzzle velocity testing from 240 m/s to 1,800 m/s depending on application",
    "Environmental Testing — Performance validation from -40°C to +55°C operating temperatures",
    "Quality Certification — MIL-STD and NATO STANAG compliance verification and documentation"
  ]

  const equipment = [
    {
      category: "Cartridge Case Production",
      items: ["Multi-axis CNC turning centers", "Precision boring machines", "Case forming presses", "Extraction groove machining"]
    },
    {
      category: "Material Processing",
      items: ["High-strength alloy steel processing", "Brass and aluminum forming", "Nitrocellulose composite handling", "Laminated cloth processing"]
    },
    {
      category: "Surface Treatment",
      items: ["Specialized coating systems", "Friction welding equipment", "Corrosion-resistant treatment baths", "Environmental sealing stations"]
    },
    {
      category: "Testing & Validation",
      items: ["High-pressure test chambers (up to 450 MPa)", "Ballistic testing facilities", "Environmental chambers (-40°C to +55°C)", "Muzzle velocity measurement systems"]
    },
    {
      category: "Fuse Manufacturing",
      items: ["Mechanical fuse assembly lines", "Safety & arming device production", "Detonator integration systems", "Multi-redundant safety testing"]
    },
    {
      category: "Quality Assurance",
      items: ["MIL-STD compliance verification", "NATO STANAG certification systems", "Material traceability systems", "Combat-proven design validation"]
    }
  ]

  const qualityProtocols = [
    {
      title: "Material Standards",
      description: "High-strength alloy steel, hardened steel, brass, aluminum alloys, and specialized nitrocellulose composites meeting defense specifications"
    },
    {
      title: "Performance Validation",
      description: "Operating pressures 250-450 MPa, muzzle velocities 240-1,800 m/s, temperature range -40°C to +55°C, storage life 10-15+ years"
    },
    {
      title: "Platform Compatibility",
      description: "GAU-8/A, MK44 Bushmaster, MK19, GMG, Bofors, L7, M68, M777, PzH 2000, Leopard 2, M1A1 Abrams, T-72, T-90 systems"
    },
    {
      title: "Combat Applications",
      description: "Air defense, armor defeat, fortification breach, naval point-defense, indirect fire support, and area suppression missions"
    },
    {
      title: "Compliance Standards",
      description: "MIL-STD and NATO STANAG compliant with full material traceability, end-to-end quality assurance, and combat-proven designs"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Detailed specifications for our complete range of ammunition components from 23mm autocannon rounds to 155mm artillery systems.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 border-b">
          <button
            onClick={() => setActiveTab('process')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'process' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Process Flow
          </button>
          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'equipment' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Equipment
          </button>
          <button
            onClick={() => setActiveTab('quality')}
            className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
              activeTab === 'quality' 
                ? 'text-blue-600 border-blue-600' 
                : 'text-gray-500 border-transparent hover:text-gray-700'
            }`}
          >
            Quality Assurance
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'process' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Manufacturing Process Flow (Ammunition Components)
              </h3>
              <div className="grid gap-4">
                {processFlow.map((step, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'equipment' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Specialized Manufacturing Equipment
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {equipment.map((category, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quality' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications & Standards
              </h3>
              <div className="space-y-6">
                {qualityProtocols.map((protocol, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">
                      {protocol.title}
                    </h4>
                    <p className="text-gray-700">
                      {protocol.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timeline Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Estimated Timelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Small Caliber Systems (23mm-40mm)</h4>
              <p className="text-gray-600 text-sm">Autocannon and anti-aircraft ammunition for rapid-fire applications</p>
              <div className="mt-2 font-bold text-gray-900">Rates: 240-2,000+ RPM</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-blue-600 mb-2">Large Caliber Systems (105mm-155mm)</h4>
              <p className="text-gray-600 text-sm">Tank gun and artillery ammunition for long-range precision strikes</p>
              <div className="mt-2 font-bold text-gray-900">Range: 40+ km</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}