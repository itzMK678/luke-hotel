"use client";

import React, { useState } from "react";

type ConfirmationProps = {
  onClose: () => void;
};

const Confirmation = ({ onClose }: ConfirmationProps) => {
  const [vip, setVip] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    number: "",
    date: "",
    person: 2,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "person" ? Math.max(1, Number(value)) : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.mail || !formData.number || !formData.date) {
      alert("❌ Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/Booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, VIP: vip }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");

      alert("✅ Booking Confirmed!");
      setFormData({ name: "", mail: "", number: "", date: "", person: 2 });
      setVip(false);
      onClose(); // Close modal after success
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full
          
          sm:h-auto
          sm:max-h-[90vh]
          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl max-w-lg  p-8 relative">
      {/* Close X */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-extrabold text-blue-950 mb-6 text-center">
        Confirm Your Booking
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          disabled={loading}
          required
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          name="mail"
          type="email"
          value={formData.mail}
          onChange={handleChange}     
          placeholder="Email Address"
          disabled={loading}
          required
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          name="number"
          type="tel"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          disabled={loading}
          required
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          disabled={loading}
          required
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          name="person"
          type="number"
          min={1}
          value={formData.person}
          onChange={handleChange}
          disabled={loading}
          required
          className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* VIP Toggle */}
        <div className="flex gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => setVip(false)}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              !vip ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            Standard
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() => setVip(true)}
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              vip ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            VIP
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 p-3 rounded-lg font-bold text-white transition-all ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

        {/* Back button */}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 p-3 rounded-lg bg-secondary text-white hover:opacity-90 transition"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default Confirmation;