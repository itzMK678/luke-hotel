"use client"
import React from "react";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    review:
      "Amazing stay! The rooms were clean, staff was friendly, and the view was beautiful. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Williams",
    rating: 4,
    review:
      "Great experience overall. Breakfast was delicious and the location is perfect for tourists.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    rating: 5,
    review:
      "One of the best hotels I've stayed at. The service was outstanding and very comfortable rooms.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-10">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <div className="flex text-yellow-400">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
              </div>

              <p className="text-gray-600">{item.review}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Reviews;