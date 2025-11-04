import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">GInfra Travancore</span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-gray-300 animate-fade-in-up delay-200">Pvt. Ltd.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Specialized defense manufacturer for <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">High-Performance Ammunition Components</span> • <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">Cartridge Cases</span> • <span className="text-blue-400 font-semibold hover:text-cyan-400 transition-colors duration-300">Advanced Fusing Solutions</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <Link
              href="/services"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="flex items-center">
                View Capabilities
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                Contact Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Link>
          </div>
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
  )
}