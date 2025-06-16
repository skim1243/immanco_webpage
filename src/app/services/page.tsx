import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen py-12 bg-[url('/hero-bg.png')]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Cleaning Services</h1>
        
        {/* Residential Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Residential Cleaning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Regular Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Our regular cleaning service includes dusting, vacuuming, mopping, and sanitizing all surfaces.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Dusting and wiping all surfaces</li>
                <li>Vacuuming carpets and floors</li>
                <li>Mopping hard floors</li>
                <li>Cleaning bathrooms</li>
                <li>Kitchen cleaning</li>
              </ul>
              <p className="font-bold text-blue-600">Starting at $120</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Deep Cleaning</h3>
              <p className="text-gray-600 mb-4">
                A thorough cleaning service that reaches every corner of your home.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>All regular cleaning services</li>
                <li>Inside cabinets and drawers</li>
                <li>Baseboards and corners</li>
                <li>Window sills and tracks</li>
                <li>Detailed bathroom cleaning</li>
              </ul>
              <p className="font-bold text-blue-600">Starting at $250</p>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Commercial Cleaning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Office Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Professional cleaning services for your workplace.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Daily/Weekly cleaning</li>
                <li>Common areas maintenance</li>
                <li>Restroom sanitization</li>
                <li>Kitchen/break room cleaning</li>
                <li>Trash removal</li>
              </ul>
              <p className="font-bold text-blue-600">Custom pricing based on size</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Retail Space Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleaning for retail environments.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Floor maintenance</li>
                <li>Display cleaning</li>
                <li>Window cleaning</li>
                <li>Restroom maintenance</li>
                <li>Storage area cleaning</li>
              </ul>
              <p className="font-bold text-blue-600">Custom pricing based on size</p>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-blue-600">Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Move In/Out Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning for moving transitions.
              </p>
              <p className="font-bold text-blue-600">Starting at $300</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Post-Construction</h3>
              <p className="text-gray-600 mb-4">
                Detailed cleaning after construction or renovation.
              </p>
              <p className="font-bold text-blue-600">Custom pricing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Event Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Pre and post-event cleaning services.
              </p>
              <p className="font-bold text-blue-600">Custom pricing</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6">
            Contact us for a personalized quote tailored to your specific needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Request a Quote
          </button>
        </section>
      </div>
    </div>
  )
} 