'use client'
import React, { useState } from 'react'
import { Phone, Instagram, Facebook } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Page = () => {
  const [selectedType, setSelectedType] = useState('Review')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    // ✅ Frontend validation
    if (!name || !mail || !message) {
      setError('Please fill all fields')
      return
    }

    if (!mail.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    try {
      setLoading(true)

      const res = await fetch('/api/getContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          mail,
          type: selectedType,
          message,
        }),
      })

      if (!res.ok) throw new Error('Failed')

      setSuccess(true)
      setName('')
      setMail('')
      setMessage('')
      setSelectedType('Review')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />

      <div
        className="relative min-h-[500px] flex items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1400&h=800&s=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/50" />

        <div className="relative w-full max-w-3xl rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/30 shadow-2xl">
          <h1 className="text-3xl font-bold text-[#3d2e70] text-center mb-8">
            Contact Me
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <label className="sr-only">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-[#3d2e70]"
              />

              {/* Type */}
              <div className="flex rounded-lg bg-white/40 text-blue-900 justify-between gap-2 p-1">
                {['Review', 'Query', 'Issue'].map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-selected={selectedType === item}
                    onClick={() => setSelectedType(item)}
                    className={`flex-1 rounded-lg p-3 transition font-medium
                      ${
                        selectedType === item
                          ? 'bg-white text-[#3d2e70]'
                          : 'bg-white/40 hover:bg-white'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Email */}
              <label className="sr-only">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-[#3d2e70]"
              />

              {/* Message */}
              <label className="sr-only">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/40 text-blue-900 hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-[#3d2e70]"
              />

              {/* Error */}
              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              {/* Success */}
              {success && (
                <p className="text-green-700 text-sm font-medium">
                  Message sent successfully!
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#362864] text-white py-3 rounded-lg
                hover:bg-[#3d2e70] transition font-semibold disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* SOCIAL LINKS */}
            <div className="flex flex-col justify-center gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 hover:bg-white transition"
              >
                <Phone className="text-[#3d2e70]" />
                <span className="font-medium text-[#3d2e70]">WhatsApp</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 hover:bg-white transition"
              >
                <Instagram className="text-[#3d2e70]" />
                <span className="font-medium text-[#3d2e70]">Instagram</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 hover:bg-white transition"
              >
                <Facebook className="text-[#3d2e70]" />
                <span className="font-medium text-[#3d2e70]">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Page
