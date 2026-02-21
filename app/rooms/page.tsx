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
        <section className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Top-left large hero */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg sm:col-span-2 lg:col-span-3 aspect-[3/2]">
              <Image
                src={RoomImage}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Hero Room"
              />
            </div>

            {/* Top-right small */}
            <div className="relative rounded-2xl overflow-hidden h-[400px] top-30 shadow-md ">
              <Image
                src={RoomImage2}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 2"
              />
            </div>

            {/* Bottom-left small */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[1/1]">
              <Image
                src={RoomImage5}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 5"
              />
            </div>

            {/* Bottom row - three images */}
            <div className="relative rounded-2xl w-[370px] overflow-hidden shadow-sm ">
              <Image
                src={RoomImage4}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 4"
              />
            </div>

            <div className="relative left-20 rounded-2xl overflow-hidden shadow-sm w-[470px]">
              <Image
                src={RoomImage3}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 3"
              />
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[2/1] sm:col-span-2 lg:col-span-2">
              <Image
                src={RoomImage6}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 6"
              />
            </div>

            {/* Optional additional image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[2/1] sm:col-span-2 lg:col-span-2">
              <Image
                src={RoomImage7}
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                alt="Room 7"
              />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}