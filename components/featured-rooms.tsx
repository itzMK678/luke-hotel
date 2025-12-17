"use client"
import { useState } from "react"
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
    <main className="min-h-screen bg-background">
      <div className="text-center text-3xl pt-6 underline decoration-blue-800 md:text-4xl font-bold">
        Our Best Rooms
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 py-6">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                />
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
                      {/* Correct link to the dynamic room page */}
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
  )
}
