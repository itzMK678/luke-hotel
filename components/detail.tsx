"use client";

import Image from "next/image";
import Confirmation from "./confirmation";
import { useState } from "react";

type Room = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export default function Detail({ room }: { room: Room }) {
  const [show, setShow] = useState(false);

  return (
      <div className="max-w-5xl mx-auto px-4 py-10">
       <button
  onClick={() => window.history.back()}
  className="bg-red-500 text-white mb-4 px-4 py-2 rounded hover:bg-red-600 transition"
>
  Back
</button>
      {/* Room Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Image src={room.image} alt={room.name} fill className="object-cover" priority />
      </div>

      {/* Details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold">{room.name}</h1>
        <p className="mt-4 text-muted-foreground text-lg">{room.description}</p>
        <div className="mt-6 text-2xl font-semibold text-primary">
          ${room.price} per night
        </div>

        {/* Book Now */}
        <button
          onClick={() => setShow(true)}
          className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg hover:opacity-90 transition"
        >
          Book Now
        </button>

        {/* Toggle button (optional) */}
        {/* <button
          onClick={() => setShow(!show)}
          className="mt-4 ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:opacity-90 transition"
        >
          Toggle Confirmation
        </button> */}
      </div>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Confirmation onClose={() => setShow(false)} />
        </div>
      )}
    </div>
  );
}