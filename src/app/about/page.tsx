import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Sparkle & Shine</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a family-owned cleaning company dedicated to providing exceptional cleaning services
            with a personal touch. Our commitment to quality and customer satisfaction has made us
            the trusted choice for homes and businesses in our community.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Sparkle & Shine began with a simple mission: to provide reliable,
                high-quality cleaning services that make a difference in people's lives. What started
                as a small team of dedicated cleaners has grown into a full-service cleaning company
                serving hundreds of satisfied customers.
              </p>
              <p className="text-gray-600">
                Our success is built on our commitment to excellence, attention to detail, and
                personalized service. We believe that a clean space is essential for a healthy and
                productive environment, and we take pride in helping our clients achieve that.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              {/* Add company image here */}
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our cleaning services, using eco-friendly
                products and proven techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our clients through
                reliable service and clear communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmental responsibility, using eco-friendly products and
                sustainable practices.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in the cleaning industry, John leads our team
                with passion and expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-4">Operations Manager</p>
              <p className="text-gray-600">
                Sarah ensures smooth operations and maintains our high standards of service
                quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-blue-600 mb-4">Customer Relations</p>
              <p className="text-gray-600">
                Michael works closely with our clients to ensure their needs are met and
                expectations exceeded.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Sparkle & Shine Difference?</h2>
          <p className="mb-6">
            Join our growing list of satisfied customers and let us take care of your cleaning needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
        </section>
      </div>
    </div>
  )
} 