export default function CoreCapabilities() {
  const capabilities = [
    {
      title: "Small Caliber Cartridge Cases",
      description: "23mm and 30mm metallic cases for GAU-8/A, MK44 Bushmaster, and naval CIWS systems with up to 400 MPa operating pressure",
      icon: "🎯"
    },
    {
      title: "Medium Caliber Systems",
      description: "40mm cases for MK19, GMG, and Bofors systems with programmable airburst fuses and area suppression capabilities",
      icon: "💥"
    },
    {
      title: "Large Caliber Artillery",
      description: "105mm and 155mm metallic/combustible cases for L7, M68, M777, PzH 2000 with 420-450 MPa operating pressure",
      icon: "🚀"
    },
    {
      title: "Tank Gun Ammunition",
      description: "120mm and 125mm combustible cartridge cases for FSAPDS and HESH rounds (Leopard 2, M1A1, T-72, T-90)",
      icon: "🛡️"
    },
    {
      title: "BMCS Modular Charges",
      description: "M91/M92 155mm modular propellant charges with scalable range control and negligible combustion residue",
      icon: "⚡"
    },
    {
      title: "Mechanical Fuse Systems",
      description: "23mm, 30mm, 40mm point-detonating, proximity/timed, and programmable airburst fuses with safety mechanisms",
      icon: "🔧"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">
            Core Capabilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete ammunition component manufacturing from 23mm autocannon rounds to 155mm artillery systems, supporting air defense, armor defeat, fortification breach, naval point-defense, and indirect fire support missions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className={`bg-gray-50 p-8 rounded-xl hover:shadow-lg hover-lift hover-glow transition-all duration-300 reveal-on-scroll stagger-delay-${index}`}>
              <div className="text-4xl mb-4 hover-scale transition-transform duration-300">{capability.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl scroll-animate-scale">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-4 text-center">
            Value Proposition
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="reveal-on-scroll hover-lift transition-transform duration-300 stagger-delay-0">
              <h4 className="font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300">Combat Applications</h4>
              <p className="text-gray-600 text-sm">Air defense against aircraft and UAVs, armor defeat, fortification breach, naval point-defense, indirect fire support</p>
            </div>
            <div className="reveal-on-scroll hover-lift transition-transform duration-300 stagger-delay-1">
              <h4 className="font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300">Technical Performance</h4>
              <p className="text-gray-600 text-sm">Operating pressures up to 450 MPa, muzzle velocities 970-1,800 m/s, temperature range -40°C to +55°C</p>
            </div>
            <div className="reveal-on-scroll hover-lift transition-transform duration-300 stagger-delay-2">
              <h4 className="font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors duration-300">Quality Standards</h4>
              <p className="text-gray-600 text-sm">ISO 9001:2015, MIL-STD, NATO STANAG compliant with 15+ years storage life and full traceability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}