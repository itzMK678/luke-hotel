"use client";

import Image from "next/image";

type Room = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export default function Detail({ room }: { room: Room }) {
  const handleBook = () => {
    alert("✅ Room booked successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-foreground">
          {room.name}
        </h1>

        <p className="mt-4 text-muted-foreground text-lg">
          {room.description}
        </p>

        <div className="mt-6 text-2xl font-semibold text-primary">
          ${room.price} / night
        </div>

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
