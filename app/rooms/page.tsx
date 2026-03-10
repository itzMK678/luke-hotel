"use client";

import { useRef, useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

import RoomImage from "../../public/gg1.png";
import RoomImage2 from "../../public/gg2.png";
import RoomImage3 from "../../public/gg3.png";
import RoomImage4 from "../../public/gg4.png";
import RoomImage6 from "../../public/luxury-deluxe-hotel-room.jpg";
import RoomImage7 from "../../public/gg6.png";

import Confirmation from "@/components/confirmation";

export default function RoomsPage() {
  const [expanded, setExpanded] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Ref for the Book Room button
  const bookButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to the button on page load
  useEffect(() => {
    if (bookButtonRef.current) {
      bookButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // center the button vertically
      });
    }
  }, []);

  const handleCloseConfirm = () => {
    setShowConfirm(false);
    setExpanded(false);
  };

  const handleBook = () => {
    setExpanded(true);
    setTimeout(() => {
      setShowConfirm(true);
    }, 400);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="text-center max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Rooms & Suites
            </h1>
            <p className="text-lg opacity-90">
              Discover the perfect accommodation for your stay
            </p>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
            {/* ROW 1 */}
            {[RoomImage, RoomImage2].map((img, i) => (
              <div
                key={i}
                className="group relative h-[270px] rounded-3xl overflow-hidden"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  alt="Luxury Room"
                />
                <div className="absolute inset-x-6 bottom-6 translate-y-24 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 bg-white/90 backdrop-blur-xl
                  rounded-2xl p-6 shadow-2xl z-30">
                  <h3 className="text-xl font-semibold">2 Seater Couple Room</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    ⭐ 4.0 Rating · Mountain View
                  </p>
                </div>
              </div>
            ))}

            {/* ROW 2 */}
            {[RoomImage3, RoomImage4].map((img, i) => (
              <div
                key={i}
                className="group relative h-[270px] rounded-3xl overflow-hidden"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  alt="Room"
                />
                <div className="absolute inset-x-6 bottom-6 translate-y-24 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 bg-white/90 backdrop-blur-xl
                  rounded-2xl p-6 shadow-2xl z-30">
                  <h3 className="text-xl font-semibold">
                    {i === 0 ? "6 Seater Room" : "3 Seater Room"}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    ⭐ 4.5 Rating · Mountain View
                  </p>
                </div>
              </div>
            ))}

            {/* CENTER BUTTON */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <button
                ref={bookButtonRef} // attach ref here
                onClick={handleBook}
                className={`
                  cursor-pointer rounded-full text-lg font-semibold
                  bg-white/80 backdrop-blur-xl shadow-xl
                  hover:bg-primary hover:text-white
                  transition-all duration-400 ease-out
                  ${expanded
                    ? "px-36 py-20 scale-110 opacity-0 pointer-events-none"
                    : "px-10 py-4"
                  }
                `}
              >
                Book Room
              </button>

              {showConfirm && (
                <div
                  className="absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  z-50 animate-confirm"
                >
                  <Confirmation onClose={handleCloseConfirm} />
                </div>
              )}
            </div>

            {/* ROW 3 */}
            {[RoomImage6, RoomImage7].map((img, i) => (
              <div
                key={i}
                className="group relative h-[270px] rounded-3xl overflow-hidden"
              >
                <Image
                  src={img}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  alt="Luxury Room"
                />
                <div className="absolute inset-x-6 bottom-6 translate-y-24 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 bg-white/90 backdrop-blur-xl
                  rounded-2xl p-6 shadow-2xl z-30">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Couple Room</h3>
                    <span className="text-xs font-bold bg-red-600 text-white px-3 py-1 rounded-full">
                      VIP
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    ⭐ 5.0 Rating · Panoramic View
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}