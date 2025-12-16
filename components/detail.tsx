"use client";

import Image from "next/image";

export default function RoomDetailPage( {id}: {id: any} ) {
  const handleBook = () => {
    alert("✅ Room booked successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          src={id.image} // place image in public/room.jpg
          alt="Deluxe Suite"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-foreground">
        {id.name}
        </h1>

        <p className="mt-4 text-muted-foreground text-lg">
        {id.description}
        </p>

        <div className="mt-6 text-2xl font-semibold text-primary">
          ${id.price} / night
        </div>

        {/* Book Button */}
        <button
          onClick={handleBook}
          className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg hover:opacity-90 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
