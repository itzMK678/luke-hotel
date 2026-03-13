"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
export default function AboutPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[440px] flex items-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white  md:px-12 pb-32">
        <div className="relative z-10 max-w-xl">
          <p className="text-yellow-400 uppercase tracking-widest mb-4 text-sm">
            About Our Hotel
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-light mb-6">
           <p className="text-amber-300 text-5xl md:text-7xl ">LUXE</p> Where <em className="text-blue-200 italic">Elegance</em>
            <br />
            Meets the Sea
          </h1>

          <p className="text-white/70 text-lg md:text-xl">
            Nestled along the sapphire coastline, Luxe Hotel has been a haven
            of refined luxury and impeccable service since 1968.
          </p>
        </div>

        {/* Floating Circle */}
        <div className="absolute top-1/3 right-10 md:right-16 w-28 h-28 md:w-32 md:h-32 rounded-full border border-yellow-400/50 flex flex-col items-center justify-center bg-blue-900/40 backdrop-blur-sm">
          <div className="text-yellow-400 text-2xl font-serif">1968</div>
          <div className="text-white/60 text-xs uppercase mt-1">Est.</div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-gray-100 border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center">
          
          <div className="py-6">
            <div className="text-3xl font-serif text-blue-800 mb-2">56</div>
            <div className="uppercase text-xs tracking-widest text-gray-500">
              Years of Legacy
            </div>
          </div>

          <div className="py-6">
            <div className="text-3xl font-serif text-blue-800 mb-2">148</div>
            <div className="uppercase text-xs tracking-widest text-gray-500">
              Luxury Suites
            </div>
          </div>

          <div className="py-6">
            <div className="text-3xl font-serif text-blue-800 mb-2">5</div>
            <div className="uppercase text-xs tracking-widest text-gray-500">
              Restaurants
            </div>
          </div>

          <div className="py-6">
            <div className="text-3xl font-serif text-blue-800 mb-2">4.9</div>
            <div className="uppercase text-xs tracking-widest text-gray-500">
              Guest Satisfaction
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-24 px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
      >
        <div className="reveal opacity-0 translate-y-8 transition duration-700">
          <span className="text-blue-500 uppercase tracking-widest text-xs mb-2 block">
            Our Story
          </span>

          <h2 className="text-4xl font-serif font-light mb-6">
            A Sanctuary Born of{" "}
            <em className="text-blue-500 italic">Passion</em> & Vision
          </h2>

          <p className="text-gray-700 mb-4">
            Luxe Hotel was conceived not merely as a place to rest, but as a
            living expression of architectural grace and hospitality.
          </p>

          <p className="text-gray-700">
            Over more than five decades, the hotel has welcomed artists,
            travelers, and visionaries from around the world.
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition duration-700">
          <img
            src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80"
            alt="Hotel"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center py-24 px-6">
        <span className="text-blue-200 uppercase tracking-widest text-sm mb-4 block">
          Begin Your Journey
        </span>

        <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
          Reserve Your Stay at{" "}
          <em className="text-blue-200 italic">Luxe Hotel</em>
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Whether for a romantic retreat or a luxury holiday, we are ready to
          welcome you.
        </p>

          <Link
          href="/rooms"
          className="bg-yellow-400 text-blue-900 px-10 py-4 uppercase tracking-widest font-medium rounded-lg shadow hover:bg-yellow-300 transition"
        >
          Book a Suite
        </Link>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}