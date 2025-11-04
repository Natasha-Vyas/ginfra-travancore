export default function CoreCapabilities() {
  const capabilities = [
    {
      title: "Cartridge Case Manufacturing",
      description: "23mm to 155mm metallic and combustible cartridge cases for autocannons, tank guns, and artillery systems",
      icon: "🔨"
    },
    {
      title: "Advanced Material Processing",
      description: "High-strength alloy steel, brass, aluminum alloys, and nitrocellulose-based composites with specialized coatings",
      icon: "⚙️"
    },
    {
      title: "Modular Charge Systems",
      description: "BMCS M91/M92 modular propellant charges for scalable range control and clean-burning performance",
      icon: "🔧"
    },
    {
      title: "Mechanical Fuse Systems",
      description: "Point-detonating, proximity/timed, and programmable airburst fuses with multi-redundant safety features",
      icon: "💻"
    },
    {
      title: "Precision Manufacturing",
      description: "CNC-machined geometry for exact tolerances, specialized surface treatments, and environmental durability",
      icon: "🔬"
    },
    {
      title: "Combat-Proven Standards",
      description: "MIL-STD and NATO STANAG compliance with full material traceability and end-to-end quality assurance",
      icon: "📋"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core Capabilities
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized defense manufacturing for high-performance ammunition components supporting air defense, armor defeat, fortification breach, naval point-defense, and indirect fire support missions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Value Proposition
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Multi-Platform Compatibility</h4>
              <p className="text-gray-600 text-sm">GAU-8/A, M777, PzH 2000, Leopard 2, M1A1 Abrams, T-72, T-90, and naval CIWS systems</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Extreme Performance</h4>
              <p className="text-gray-600 text-sm">Operating pressures up to 450 MPa, muzzle velocities 240-1,800 m/s, temperature range -40°C to +55°C</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Extended Service Life</h4>
              <p className="text-gray-600 text-sm">10-15+ years sealed storage life with corrosion protection and environmental hardening</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}