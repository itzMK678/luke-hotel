'use client'
import React from 'react'
import { Phone, Instagram, Facebook } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <>
      <Header />

      <div
        className="relative min-h-[500px] flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1400&h=800&s=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-900/50"></div>

        {/* Glass Card */}
        <div className="relative w-full max-w-3xl rounded-2xl p-8
          bg-white/10 backdrop-blur-sm
          border border-white/30 shadow-2xl">

          <h1 className="text-3xl font-bold text-[#3d2e70]  text-center mb-8">
            Contact Me
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                  focus:outline-none focus:ring-2 focus:ring-[#3d2e70] "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                  focus:outline-none focus:ring-2 focus:ring-[#3d2e70] "
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                  focus:outline-none focus:ring-2 focus:ring-[#3d2e70] "
              />

              <button className="w-full bg-[#362864]  text-white py-3 rounded-lg
                hover:bg-[#3d2e70]  transition font-semibold">
                Send Message
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl
                bg-white/40 hover:bg-white transition cursor-pointer">
                <Phone className="text-[#3d2e70] " />
                <span className="font-medium text-[#3d2e70] ">WhatsApp</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl
                bg-white/40 hover:bg-white transition cursor-pointer">
                <Instagram className="text-[#3d2e70] " />
                <span className="font-medium text-[#3d2e70] ">Instagram</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl
                bg-white/40 hover:bg-white transition cursor-pointer">
                <Facebook className="text-[#3d2e70] " />
                <span className="font-medium text-[#3d2e70] ">Facebook</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
