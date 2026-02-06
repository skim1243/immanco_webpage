import React from 'react'
import Image from 'next/image'
import { HeroRotatingBackground } from '@/components/HeroRotatingBackground'
import { UnderlineOnScroll } from '@/components/UnderlineOnScroll'
import { FadeInOnScroll } from '@/components/FadeInOnScroll'

const UNUSED_HERO_IMAGES = [
  '/hero3.png', '/hero6.png', '/hero7.png', '/hero9.png',
  '/hero10.png', '/hero11.png', '/hero12.png', '/hero14.png', '/hero15.png',
  '/new_pics_02052026/IMG_3704.jpeg', '/new_pics_02052026/IMG_3730.jpeg',
  '/new_pics_02052026/IMG_3731.jpeg', '/new_pics_02052026/IMG_3734.jpeg',
  '/new_pics_02052026/IMG_4567.jpeg', '/new_pics_02052026/IMG_4568.jpeg',
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section: rotating photos, headline, Book Now */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <HeroRotatingBackground />
        <div className="relative z-30 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-24 pb-16">
          <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
            <Image src="/logo.png" alt="Immanco Cleaning Services" width={400} height={300} className="w-64 md:w-80 lg:w-96 h-auto" priority />
            <div className="bg-white rounded-2xl shadow-xl px-8 py-8 md:px-10 md:py-10 w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-center md:text-left">
                Immanco Commercial Cleaning
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/90 shadow-md px-6 py-5 mb-4 inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                Committed to <span className="underline-exceptional">exceptional</span> service
              </h2>
              <p className="mt-6 text-lg md:text-xl mb-6 text-[#6E675F]">
              Discover the difference with Immanco Cleaning and experience the highest standards of cleanliness and hygiene.
            </p>
            <a href="tel:+14436081634" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg shadow-lg inline-block">
              Book Now
            </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section id="innovation" className="py-16 bg-white">
        <FadeInOnScroll>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-black leading-tight text-center">
              Our innovation provides consistent quality service.
            </h2>
            <p className="text-xl md:text-2xl text-[#6E675F] text-center font-semibold my-10">Established in 2022, we are a team of dedicated cleaning professionals serving various cleaning needs across the DMV area.</p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch mb-8">
              <FadeInOnScroll delay={100} className="flex-1 min-w-0">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-14 h-14 mb-4 text-[#423E37]" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path fillRule="evenodd" d="M19.5 9.5h-1.25a.75.75 0 0 0-.75.75v.75h-7.5v-.75A.75.75 0 0 0 9.75 9.5H8.5v-.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v.75H2.25A2.25 2.25 0 0 0 0 11.75v6.5A2.25 2.25 0 0 0 2.25 20.5h15A2.25 2.25 0 0 0 19.5 18.25v-6.5a2.25 2.25 0 0 0-2.25-2.25Zm-15 1.5v6.5a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H5.5v-.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v.75H5.25a.75.75 0 0 0-.75.75Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-[#6E675F]">Real-time issue reporting through photos.</p>
              </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={200} className="flex-1 min-w-0">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-14 h-14 mb-4 text-[#423E37]" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM14.25 8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V8.25Z" />
                  <path d="M19.5 8.25h-1.5v6.75h1.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75Z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-[#6E675F]">Instant Zoom check-ins.</p>
              </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={300} className="flex-1 min-w-0">
              <div className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="w-14 h-14 mb-4 text-[#423E37]" aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-[#6E675F]">Total oversight of on-site crews.</p>
              </div>
              </FadeInOnScroll>
            </div>
            <p className="text-xl md:text-2xl text-[#6E675F] text-center font-semibold">
              <UnderlineOnScroll>Trust</UnderlineOnScroll> drives our innovation and quality consistency.
            </p>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-yellow-200">
        <FadeInOnScroll>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black leading-tight text-center">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-[#6E675F] text-center font-semibold my-10">No matter the space, our top class team leads with care. </p>
          <div className="w-full flex justify-center">
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
                  <h3 className="text-xl font-bold mb-4">Manufacturing Warehouse</h3>
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
          {/* Unused hero photos - film roll infinite loop */}
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-6 w-max animate-film-roll">
              {[...UNUSED_HERO_IMAGES, ...UNUSED_HERO_IMAGES].map((src, i) => (
                <div key={`${src}-${i}`} className="w-28 sm:w-32 md:w-36 aspect-[3/4] rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={src}
                    alt="Immanco cleaning"
                    width={144}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </FadeInOnScroll>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <FadeInOnScroll>
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
            <FadeInOnScroll delay={0}><div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-[#423E37]">Professional and trained cleaning experts</p>
            </div></FadeInOnScroll>

            <FadeInOnScroll delay={80}><div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Using safe and sustainable cleaning products</p>
            </div></FadeInOnScroll>

            <FadeInOnScroll delay={160}><div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all services</p>
            </div></FadeInOnScroll>

            <FadeInOnScroll delay={240}><div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105 hover:bg-blue-50">
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
              <p className="text-gray-600">Licensed, bonded, and insured for your peace of mind</p>
            </div></FadeInOnScroll>
          </div>
        </div>
        </FadeInOnScroll>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[url('/cleaner.png')] text-white">
        <FadeInOnScroll>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your cleaning service today and enjoy a cleaner, healthier space tomorrow.
          </p>
          <a href="tel:+14436081634" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-block">
            Get a Free Quote
          </a>
        </div>
        </FadeInOnScroll>
      </section>
    </div>
  )
}
