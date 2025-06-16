import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Water Splash Windshield Wipe Animation */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-0">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-10">
          <Image src="/hero-bg.png" alt="Hero Background" fill priority className="object-cover w-full h-full" />
          <div className="absolute inset-0 opacity-10 animate-slide"></div>
        </div>
      
        
        {/* Main Content */}
        <div className="relative z-30 container mx-auto px-4 flex-1 flex flex-col justify-center items-center text-center pt-24 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black leading-tight animate-pulse">
            Immanco Commercial Cleaning
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold mb-6 text-black leading-tight">
            Commited to exceptional service

          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-xl text-[#6E675F]">
            Discover the difference with Immanco Cleaning and said experience the highest stands of cleanliness and hygiene. 
          </p>
          
          <a href="tel:+14436081634" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg mb-8 shadow-lg inline-block">
            Book Now
          </a>
          {/* Film Roll Image Strip */}
          <div className="relative z-10 w-full flex justify-center gap-6 -mt-24 mt-8 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="film-roll flex items-center gap-6 animate-filmroll">
                <Image src="/hero1.png" alt="Cleaning 1" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero2.png" alt="Cleaning 2" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero3.png" alt="Cleaning 3" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero4.png" alt="Cleaning 4" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero6.png" alt="Cleaning 6" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero7.png" alt="Cleaning 7" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero8.png" alt="Cleaning 8" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero9.png" alt="Cleaning 9" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero10.png" alt="Cleaning 10" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero11.png" alt="Cleaning 11" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero12.png" alt="Cleaning 12" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero14.png" alt="Cleaning 14" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero15.png" alt="Cleaning 15" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                

                {/* Repeat for seamless loop */}
                <Image src="/hero1.png" alt="Cleaning 1" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero2.png" alt="Cleaning 2" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero3.png" alt="Cleaning 3" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero4.png" alt="Cleaning 4" width={180} height={120} className="rounded-lg shadow-md object-cover" />
                <Image src="/hero5.png" alt="Cleaning 5" width={180} height={120} className="rounded-lg shadow-md object-cover" />
              </div>
              <h2 className="text-3xl md:text-3xl mt-12 font-bold mb-6 text-black leading-tight text-center">
              Our innovation provides consistent quality service. 

             </h2>
             <div className="flex justify-center">
                <p className="text-xl md:text-2xl mb-8 max-w-xl text-[#6E675F] text-center">
                  Real-time issue reporting through photos. 
                  <br />
                  Instant Zoom check-ins. 
                  <br />
                  Total oversight of on-site crews. 
                  <br />
                  <br />
                  <b>
                    Trust drives our innovation and quality consistency.
                  </b>
                  
                </p>
              </div>
              
            </div>
              
              
          </div>
          {/* Service Cards - now part of the same section */}
          <div className="w-full flex justify-center pb-12 pt-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch justify-center">
                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Office Cleaning</h3>
                  <p className="text-gray-600 text-center">
                  We dust and clean desks, empty trashcans, and vacuum the office floors with our specialized equipment.
                  </p>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Commercial Building</h3>
                  <p className="text-gray-600 text-center">
                  Professional cleaning for retail spaces, offices, and mixed-use facilities, including floor maintenance and dust control.             </p>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Healthcare Facilities</h3>
                  <p className="text-gray-600 text-center">
                  Medical-grade sanitization with hospital-grade disinfectants, following strict compliance protocols.                  </p>
                </div>

              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-12 items-stretch justify-center">
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Education Building</h3>
                  <p className="text-gray-600 text-center">
                  Specialized cleaning for schools - from classrooms to cafeterias - ensuring safety and cleanliness for students and staff.
                  </p>
                </div>

                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Manufacturing Warehouse:</h3>
                  <p className="text-gray-600 text-center">
                  Industrial cleaning focusing on floor maintenance and dust control to comply with safety standards.
                  </p>
                </div>

                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Government Facility</h3>
                  <p className="text-gray-600 text-center">
                  Security-cleared cleaning services with strict confidentiality protocols for government buildings. 
                  </p>
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-xl flex flex-col items-center hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">Floor Cleaning / Carpet Cleaning</h3>
                  <p className="text-gray-600 text-center">
                    We clean hard floors like marble, granite, concrete, terrazzo, and tile. We also restore natural stone, restore hard surfaces, and strip & wax VCT. 
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          
          <div className="text-center">
            <p className="text-2xl text-gray-600 text-center mb-6">
              <b>We always provide consistent quality service.</b>
            </p>
          </div>
          
          <div className="text-center mb-10">
            <p className="text-xl text-gray-600 text-center">
              Every broom stroke 🧹 is a strive for your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-[#423E37]">Professional and trained cleaning experts</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Using safe and sustainable cleaning products</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Licensed, bonded, and insured for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[url('/cleaner.png')] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and enjoy a cleaner, healthier space tomorrow.
          </p>
          <a href="tel:+14436081634" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block">
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
