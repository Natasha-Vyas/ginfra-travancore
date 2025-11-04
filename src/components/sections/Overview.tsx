export default function Overview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Overview
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a specialized defense manufacturer dedicated to the design, engineering, and production of high-performance ammunition components for land, sea, and air platforms. Our product portfolio includes metallic and combustible cartridge cases, modular charge systems, and advanced fusing solutions, all built to meet the stringent demands of modern combat operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our manufacturing capabilities integrate <span className="font-semibold text-blue-600">CNC precision machining</span>, advanced material processing, and controlled-environment assembly lines, ensuring every component meets or exceeds <span className="font-semibold text-blue-600">MIL-STD and NATO STANAG standards</span>. With an in-house R&D team, we continuously innovate in the areas of lightweight materials, improved ballistics, and enhanced safety mechanisms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Assurance</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Production Capability</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
              <div className="text-gray-600">Certified Standards</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ToT</div>
              <div className="text-gray-600">Technology Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}