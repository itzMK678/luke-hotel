"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allRooms = [
  {
    id: 1,
    name: "2-Person Room",
    category: "2-Person Room",
    price: 199,
    image: "/luxury-deluxe-hotel-room.jpg",
    beds: 1,
    guests: 2,
    size: "35 m²",
  },
  {
    id: 2,
    name: "3-Person Room",
    category: "3-Person Room",
    price: 299,
    image: "/spacious-suite-with-living-area.jpg",
    beds: 2,
    guests: 3,
    size: "55 m²",
  },
  {
    id: 3,
    name: "6-Person Room",
    category: "6-Person Room",
    price: 599,
    image: "/presidential-luxury-suite-penthouse.jpg",
    beds: 3,
    guests: 6,
    size: "120 m²",
  },
]

const categories = [
  { id: "2-Person Room", label: "2-Person Room" },
  { id: "3-Person Room", label: "3-Person Room" },
  { id: "6-Person Room", label: "6-Person Room" },
  { id: "all", label: "All Rooms" },
]

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filter rooms based on selected category
  const filteredRooms =
    selectedCategory === "all"
      ? allRooms
      : allRooms.filter((room) => room.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      {/* Page Title */}
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
                {/* Room Image */}
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                {/* Room Header */}
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.size}</CardDescription>
                </CardHeader>

                {/* Room Details */}
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Beds: {room.beds}</span>
                      <span>Guests: {room.guests}</span>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">${room.price} / night</span>

                      {/* Link with Button */}
                      <Button asChild>
                        <Link href={`/rooms/${room.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredRooms.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground">
                No rooms available for this category.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
