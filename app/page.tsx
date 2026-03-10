"use client"

import { useEffect, useState } from "react"

import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedRooms from "@/components/featured-rooms"
import Footer from "@/components/footer"
import Amenities from "./amenities/page"
import Reviews from "@/components/review"
import Loading from "@/components/loading"

export default function Home() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  if (loader) return <Loading />

  return (
    <main>
      <Header />
      <Hero />
      <FeaturedRooms />
      <Amenities />
      <Reviews />
      <Footer />
    </main>
  )
}