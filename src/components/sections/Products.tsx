import Link from 'next/link'

export default function Products() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced defense products engineered for mission-critical applications with precision, reliability, and superior performance
          </p>
        </div>
        
        <div className="flex justify-center gap-8">
          <Link href="/products/fuzes" className="group w-80">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition-colors duration-300">Fuzes</div>
              <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Advanced fuze systems for 23MM, 30MM, and 40MM ammunition</div>
            </div>
          </Link>

          <Link href="/products/cartridge-cases" className="group w-80">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">Cartridge Cases</div>
              <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">High-performance ammunition cases from 23mm to 155mm</div>
            </div>
          </Link>

          <Link href="/products/pcbs" className="group w-80">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 cursor-pointer h-48 flex flex-col justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-cyan-600 mb-2 group-hover:text-cyan-700 transition-colors duration-300">PCBs</div>
              <div className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">Defense-grade electronic assemblies and circuit boards</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}