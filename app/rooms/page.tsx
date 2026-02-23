"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

import RoomImage from "../../public/gg1.png"
import RoomImage2 from "../../public/gg2.png"
import RoomImage3 from "../../public/gg3.png"
import RoomImage4 from "../../public/gg4.png"
import RoomImage5 from "../../public/gg5.png"
import RoomImage6 from "../../public/luxury-deluxe-hotel-room.jpg"
import RoomImage7 from "../../public/gg6.png"

export default function RoomsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Rooms & Suites
            </h1>
            <p className="text-lg opacity-90">
              Discover the perfect accommodation for your stay
            </p>
          </div>
        </section>

        {/* Responsive Asymmetric Grid */}
       
        <section className="max-w-7xl mx-auto px-4 py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">

    {/* ================= ROW 1 ================= */}
    {[RoomImage, RoomImage2].map((img, i) => (
      <div
        key={i}
        className="group relative h-[270px] rounded-3xl overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <Image
          src={img}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:z-20"
          alt="Luxury Room"
        />

        {/* Hover Card */}
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

    {/* ================= ROW 2 ================= */}
    <div className="group relative h-[270px] rounded-3xl overflow-hidden">
      <Image
        src={RoomImage3}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
        alt="Room"
      />

      {/* Hover Card */}
      <div className="absolute inset-x-6 bottom-6 translate-y-24 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        transition-all duration-500 bg-white/90 backdrop-blur-xl 
        rounded-2xl p-6 shadow-2xl z-30">
        <h3 className="text-xl font-semibold">6 Seater room</h3>
         <p className="text-sm text-muted-foreground mt-2">
    ⭐ 4.5 Rating · Mountain View
  </p>
      </div>
    </div>

    <div className="group relative h-[270px] rounded-3xl overflow-hidden">
      <Image
        src={RoomImage4}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
        alt="Room"
      />

      <div className="absolute inset-x-6 bottom-6 translate-y-24 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        transition-all duration-500 bg-white/90 backdrop-blur-xl 
        rounded-2xl p-6 shadow-2xl z-30">
        <h3 className="text-xl font-semibold">3 Seater Room</h3>
       <p className="text-sm text-muted-foreground mt-2">
    ⭐ 4.5 Rating · Mountain View
  </p>
      </div>
    </div>

    {/* Center Button */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      <button className="px-10 py-4 rounded-full text-lg font-semibold 
        bg-white/80 backdrop-blur-xl shadow-xl 
        hover:bg-primary hover:text-white transition-all duration-300">
        Book Room
      </button>
    </div>

    {/* ================= ROW 3 ================= */}
    {[RoomImage6, RoomImage7].map((img, i) => (
      <div
        key={i}
        className="group relative h-[270px] rounded-3xl overflow-hidden cursor-pointer"
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

  {/* Title + Badge */}
  <div className="flex items-center justify-between">
    <h3 className="text-xl font-semibold text-gray-900">
      Couple Room
    </h3>

    <span className="text-xs font-bold uppercase tracking-wider
      bg-red-600 text-white px-3 py-1 rounded-full">
      VIP
    </span>
  </div>

  {/* Meta */}
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
  )
}