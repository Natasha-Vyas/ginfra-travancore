export default function ProductionRoadmap() {
  const stages = [
    {
      stage: "Stage 1",
      title: "Small Caliber Cartridge Cases",
      description: "23mm and 30mm metallic cases for autocannons and anti-aircraft systems (GAU-8/A, MK44 Bushmaster)",
      timeline: "9-12 months",
      status: "active"
    },
    {
      stage: "Stage 2",
      title: "Medium Caliber Systems",
      description: "40mm cases for grenade launchers and naval CIWS (MK19, GMG, Bofors 40mm L/60, L/70)",
      timeline: "6-9 months",
      status: "planned"
    },
    {
      stage: "Stage 3",
      title: "Large Caliber Artillery",
      description: "105mm and 155mm metallic and combustible cases for tank guns and howitzers (L7, M68, M777, PzH 2000)",
      timeline: "6-9 months",
      status: "planned"
    },
    {
      stage: "Stage 4",
      title: "Tank Gun Ammunition",
      description: "120mm and 125mm combustible cartridge cases for FSAPDS and HESH rounds (Leopard 2, M1A1, T-72, T-90)",
      timeline: "6-9 months",
      status: "planned"
    },
    {
      stage: "Stage 5",
      title: "Modular Charge Systems",
      description: "BMCS M91/M92 modular propellant charges for 155mm artillery with scalable range control",
      timeline: "6-9 months",
      status: "planned"
    },
    {
      stage: "Stage 6",
      title: "Mechanical Fuse Systems",
      description: "Point-detonating, proximity/timed, and programmable airburst fuses for 23mm, 30mm, and 40mm ammunition",
      timeline: "6-9 months",
      status: "planned"
    }
  ]

  const futureExpansion = [
    "Advanced surface treatments and specialized coatings for extreme environmental conditions",
    "Expanded caliber range including naval and aerospace applications",
    "Next-generation programmable ammunition systems with electronic fuzing",
    "Lightweight composite materials for enhanced ballistic performance"
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Staged Production Roadmap
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach covers the complete spectrum of ammunition components from small caliber autocannon rounds to large caliber artillery systems, ensuring comprehensive defense manufacturing capabilities.
          </p>
        </div>

        <div className="space-y-8">
          {stages.map((stage, index) => (
            <div key={index} className={`relative ${stage.status === 'active' ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-white border-l-4 border-gray-300'} p-6 rounded-r-lg shadow-sm`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${stage.status === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      {stage.stage}
                    </span>
                    {stage.status === 'active' && (
                      <span className="ml-3 inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Timeline</div>
                    <div className="font-semibold text-blue-600">{stage.timeline}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Future Turnkey Expansion
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futureExpansion.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                <div className="flex items-center">
                  <div className="text-orange-400 mr-3">🚀</div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              All products meet MIL-STD and NATO STANAG standards with full material traceability and combat-proven designs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}