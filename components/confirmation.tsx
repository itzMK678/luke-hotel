import React, { useState } from 'react'

const Confirmation = () => {
  const [vip, setVip] = useState('none') // selected VIP option

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">&times;</button>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-blue-950 mb-6 text-center">
          Confirm Your Booking
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Seater Dropdown */}
          <select
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select Seater
            </option>
            <option value="2">2 Seater</option>
            <option value="4">4 Seater</option>
            <option value="6">6 Seater</option>
          </select>

          {/* VIP Treatment as clickable buttons */}
          <div className="flex gap-2">
            {['none', 'standard', 'premium'].map((option) => (
              <div
                key={option}
                onClick={() => setVip(option)}
                className={`flex-1 text-center py-2 rounded-lg cursor-pointer transition 
                  ${vip === option ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
                  hover:bg-blue-400 hover:text-white`}
              >
                {option === 'none' ? 'No VIP' : option.charAt(0).toUpperCase() + option.slice(1) + ' VIP'}
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 font-semibold transition"
          >
            Confirm Booking
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          You will receive a confirmation email shortly.
        </p>
      </div>
    </div>
  )
}

export default Confirmation