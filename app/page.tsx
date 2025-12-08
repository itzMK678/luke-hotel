import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturedRooms from "@/components/featured-rooms"
import Footer from "@/components/footer"
import Amenities from "./amenities/page"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedRooms />
      <Amenities />
      <Footer />
    </main>
  )
}
