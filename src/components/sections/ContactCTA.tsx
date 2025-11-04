import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
          Ready to Get Started?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Contact our Business Development & Technical Team for pilot trials, ToT discussions, or procurement enquiries.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}