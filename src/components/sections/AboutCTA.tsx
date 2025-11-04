import Link from 'next/link'

export default function AboutCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-6">
              About GInfra Travancore
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a leading precision manufacturing company specializing in defence components, 
              aerospace parts, and advanced robotics. With state-of-the-art facilities in Telangana, 
              we deliver excellence through innovation and quality.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to precision, quality, and technological advancement makes us a trusted 
              partner for critical applications across multiple industries.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">ISO 9001</div>
              <div className="text-gray-600">Quality Certified</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">AS9100</div>
              <div className="text-gray-600">Aerospace Standard</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Manufacturing Facilities</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}