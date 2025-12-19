"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    category: "standard",
    price: 199,
    image: "/luxury-deluxe-hotel-room.jpg",
    beds: 1,
    guests: 2,
    size: "35 m²",
  },
  {
    id: 2,
    name: "Deluxe Suite",
    category: "suite",
    price: 299,
    image: "/spacious-suite-with-living-area.jpg",
    beds: 1,
    guests: 4,
    size: "55 m²",
  },
  {
    id: 3,
    name: "Presidential Suite",
    category: "presidential",
    price: 599,
    image: "/presidential-luxury-suite-penthouse.jpg",
    beds: 2,
    guests: 6,
    size: "120 m²",
  },
  {
    id: 4,
    name: "Ocean View Room",
    category: "oceanview",
    price: 399,
    image: "/ocean-view-bedroom-with-balcony.jpg",
    beds: 1,
    guests: 2,
    size: "45 m²",
  },
  {
    id: 5,
    name: "Twin Deluxe Room",
    category: "standard",
    price: 239,
    image: "/twin-beds-hotel-room-modern.jpg",
    beds: 2,
    guests: 3,
    size: "42 m²",
  },
  {
    id: 6,
    name: "Penthouse Suite",
    category: "presidential",
    price: 799,
    image: "/penthouse-suite-city-skyline-view.jpg",
    beds: 2,
    guests: 8,
    size: "200 m²",
  },
]

const categories = [
  { id: "all", label: "All Rooms" },
  { id: "standard", label: "Standard" },
  { id: "suite", label: "Suite" },
  { id: "oceanview", label: "Ocean View" },
  { id: "presidential", label: "Presidential" },
]

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredRooms =
    selectedCategory === "all" ? allRooms : allRooms.filter((room) => room.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms & Suites</h1>
            <p className="text-lg opacity-90">Discover the perfect accommodation for your stay</p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg transition ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room) => (
                <Card key={room.id} className="overflow-hidden hover:shadow-xl transition">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }} />
                  <CardHeader>
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription>{room.size}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>Beds: {room.beds}</span>
                        <span>Guests: {room.guests}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <span className="text-2xl font-bold text-primary">${room.price}</span>
                        <Link href={`/rooms/${room.id}`}>
                          <Button>View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
