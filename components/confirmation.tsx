"use client";

import React, { useState } from "react";

const Confirmation = () => {
  const [vip, setVip] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    number: "",
    date: "",
    person: 2,
  });

  const handleChange = (e) => {
    setFormData({e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          VIP: vip,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("✅ Booking Confirmed!");
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <h2 className="text-2xl font-extrabold text-blue-950 mb-6 text-center">
          Confirm Your Booking
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border rounded-lg p-3"
            required
          />

          <input
            name="mail"
            type="email"
            value={formData.mail}
            onChange={handleChange}
            placeholder="Email Address"
            className="border rounded-lg p-3"
            required
          />

          <input
            name="number"
            type="tel"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded-lg p-3"
            required
          />

          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            name="person"
            type="number"
            min={1}
            value={formData.person}
            placeholder="persons"
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          {/* VIP Toggle */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setVip(false)}
              className={`flex-1 py-2 rounded-lg ${
                !vip ? "bg-gray-800 text-white" : "bg-gray-100"
              }`}
            >
              No VIP
            </button>

            <button
              type="button"
              onClick={() => setVip(true)}
              className={`flex-1 py-2 rounded-lg ${
                vip ? "bg-yellow-500 text-white" : "bg-gray-100"
              }`}
            >
              VIP
            </button>
          </div>

          <button
            disabled={loading}
            className="bg-green-500 text-white p-3 rounded-lg font-semibold"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Confirmation;