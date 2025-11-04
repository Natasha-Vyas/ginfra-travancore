export default function Overview() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">
            Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-animate-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a specialized defense manufacturer dedicated to the design, engineering, and production of high-performance ammunition components for land, sea, and air platforms. Our product portfolio includes <span className="font-semibold text-blue-600">metallic and combustible cartridge cases (23mm-155mm)</span>, <span className="font-semibold text-blue-600">BMCS M91/M92 modular charge systems</span>, and <span className="font-semibold text-blue-600">advanced mechanical fusing solutions</span>, all built to meet the stringent demands of modern combat operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our manufacturing capabilities integrate <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">CNC precision machining</span>, advanced material processing, and controlled-environment assembly lines, ensuring every component meets or exceeds <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300">MIL-STD and NATO STANAG standards</span>. From <span className="font-semibold text-blue-600">23mm autocannon rounds</span> to <span className="font-semibold text-blue-600">155mm artillery systems</span>, we deliver combat-proven ammunition components with full material traceability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 scroll-animate-right">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift hover-glow transition-all duration-300 reveal-on-scroll stagger-delay-0">
              <div className="text-3xl font-bold text-blue-600 mb-2">23mm-155mm</div>
              <div className="text-gray-600">Cartridge Range</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift hover-glow transition-all duration-300 reveal-on-scroll stagger-delay-1">
              <div className="text-3xl font-bold text-blue-600 mb-2">450 MPa</div>
              <div className="text-gray-600">Max Operating Pressure</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift hover-glow transition-all duration-300 reveal-on-scroll stagger-delay-2">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+ Years</div>
              <div className="text-gray-600">Storage Life</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift hover-glow transition-all duration-300 reveal-on-scroll stagger-delay-3">
              <div className="text-3xl font-bold text-blue-600 mb-2">NATO</div>
              <div className="text-gray-600">STANAG Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}