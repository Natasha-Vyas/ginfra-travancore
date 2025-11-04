export default function QualityAssurance() {
  const testingProcesses = [
    {
      title: "Pressure and Leak Testing",
      description: "Ensures the structural integrity of cases under peak chamber pressures and verifies gas-tight seals for maximum ballistic efficiency.",
      icon: "🔧"
    },
    {
      title: "Combustion and Timing Tests",
      description: "Measures propellant burn consistency, ignition delay, and detonation timing to ensure predictable ballistic results.",
      icon: "⚡"
    },
    {
      title: "Dimensional Validation",
      description: "Uses laser measurement systems to confirm every critical dimension within micrometer tolerances.",
      icon: "📏"
    },
    {
      title: "Environmental Conditioning",
      description: "Subjects products to temperature extremes, humidity, and salt-fog exposure to replicate operational climates.",
      icon: "🌡️"
    }
  ]

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Certified quality management system.",
      status: "certified"
    },
    {
      title: "MIL-STD Compliance",
      description: "U.S. military standard adherence for design, materials, and performance.",
      status: "compliant"
    },
    {
      title: "NATO STANAG Conformance",
      description: "Ensures interoperability with allied forces and weapon systems.",
      status: "conformant"
    },
    {
      title: "End-User Certification Support",
      description: "Full documentation packages for defense procurement compliance.",
      status: "supported"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quality Assurance
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Quality Assurance (QA) framework is designed to guarantee that every component 
            leaving our facility performs flawlessly under operational conditions. We employ 
            multi-stage testing protocols, combining precision measurement with live-fire trials 
            to validate real-world performance.
          </p>
        </div>

        {/* Testing & Validation Processes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Testing & Validation Processes
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testingProcesses.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div className="text-3xl mr-4 mt-1">{process.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {process.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Standards
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-blue-600">
                    {cert.title}
                  </h4>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    ✓ {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="bg-blue-50 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Quality Commitment
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Through rigorous inspection, testing, and traceability, we ensure that every 
            <span className="font-semibold text-blue-600"> cartridge case</span>, 
            <span className="font-semibold text-blue-600"> modular charge</span>, and 
            <span className="font-semibold text-blue-600"> fuse component</span> is ready 
            for the most demanding combat environments.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Component Testing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">μm</div>
              <div className="text-gray-600 text-sm">Precision Tolerances</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Quality Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}