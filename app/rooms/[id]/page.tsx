"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const roomsData: Record<number, any> = {
  1: {
    id: 1,
    name: "Deluxe Room",
    price: 199,
    image: "/luxury-deluxe-hotel-room.jpg",
    description:
      "Experience comfort and elegance in our spacious Deluxe Room. Perfect for business travelers and leisure guests alike.",
    beds: 1,
    guests: 2,
    size: "35 m²",
    amenities: [
      "King-size bed",
      "Free Wi-Fi",
      "Air conditioning",
      "42-inch Smart TV",
      "Marble bathroom",
      "Rainfall shower",
      "Premium toiletries",
      "Mini bar",
    ],
  },
  2: {
    id: 2,
    name: "Deluxe Suite",
    price: 299,
    image: "/spacious-suite-with-living-area.jpg",
    description:
      "Indulge in our Deluxe Suite featuring a separate living area and modern amenities for the ultimate comfort.",
    beds: 1,
    guests: 4,
    size: "55 m²",
    amenities: [
      "King-size bedroom",
      "Spacious living area",
      "Kitchenette",
      "Free Wi-Fi",
      "Premium entertainment system",
      "Marble bathroom with soaking tub",
      "Separate shower",
      "Butler service",
    ],
  },
  3: {
    id: 3,
    name: "Presidential Suite",
    price: 599,
    image: "/presidential-luxury-suite-penthouse.jpg",
    description:
      "The pinnacle of luxury. Our Presidential Suite offers unparalleled elegance with panoramic city views.",
    beds: 2,
    guests: 6,
    size: "120 m²",
    amenities: [
      "Two king-size bedrooms",
      "Executive living room",
      "Dining area",
      "Full kitchen",
      "Premium entertainment",
      "Marble spa bathroom",
      "Jacuzzi tub",
      "24/7 concierge",
      "Private butler",
    ],
  },
  4: {
    id: 4,
    name: "Ocean View Room",
    price: 399,
    image: "/ocean-view-bedroom-with-balcony.jpg",
    description: "Wake up to breathtaking ocean views from your private balcony in our exclusive Ocean View Room.",
    beds: 1,
    guests: 2,
    size: "45 m²",
    amenities: [
      "King-size bed",
      "Private ocean-facing balcony",
      "Free Wi-Fi",
      "Premium mini bar",
      "Smart TV",
      "Rainfall shower",
      "Complimentary beach access",
      "Telescope for stargazing",
    ],
  },
  5: {
    id: 5,
    name: "Twin Deluxe Room",
    price: 229,
    image: "/twin-beds-hotel-room-modern.jpg",
    description: "Comfortable accommodation with two beds, ideal for friends, colleagues, or small families.",
    beds: 2,
    guests: 3,
    size: "42 m²",
    amenities: [
      "Two full-size beds",
      "Free Wi-Fi",
      "Work desk",
      "32-inch TV",
      "Modern bathroom",
      "Shower",
      "Hair dryer",
      "Safe",
    ],
  },
  6: {
    id: 6,
    name: "Penthouse Suite",
    price: 799,
    image: "/penthouse-suite-city-skyline-view.jpg",
    description:
      "The ultimate luxury experience with three bedrooms and panoramic skyline views from the rooftop terrace.",
    beds: 3,
    guests: 8,
    size: "200 m²",
    amenities: [
      "Three king-size bedrooms",
      "Executive living room",
      "Formal dining area",
      "Full gourmet kitchen",
      "Rooftop terrace",
      "Spa with sauna",
      "Multiple entertainment zones",
      "Personal chef service",
      "Dedicated concierge",
    ],
  },
}

export default function RoomDetailsPage({ params }: { params: { id: string } }) {
  const roomId = Number.parseInt(params.id)
  const room = roomsData[roomId]
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [guests, setGuests] = useState(1)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Room not found</h1>
          <Link href="/rooms">
            <Button>Back to Rooms</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link href="/rooms" className="flex items-center gap-2 text-primary hover:opacity-80 transition">
            <ArrowLeft size={20} />
            Back to Rooms
          </Link>
        </div>

        {/* Room Image and Booking */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image and Details */}
            <div className="lg:col-span-2">
              <div
                className="w-full h-96 md:h-[500px] bg-cover bg-center rounded-lg mb-8"
                style={{ backgroundImage: `url(${room.image})` }}
              />

              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-2">{room.name}</h1>
                <p className="text-muted-foreground text-lg mb-4">{room.description}</p>

                <div className="flex gap-6 text-sm mb-6">
                  <span className="font-semibold">
                    Size: <span className="text-primary">{room.size}</span>
                  </span>
                  <span className="font-semibold">
                    Beds: <span className="text-primary">{room.beds}</span>
                  </span>
                  <span className="font-semibold">
                    Max Guests: <span className="text-primary">{room.guests}</span>
                  </span>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Room Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <span className="text-primary">✓</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">${room.price}</CardTitle>
                  <p className="text-sm text-muted-foreground">per night</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-in</label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full border border-border rounded-lg p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-out</label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full border border-border rounded-lg p-2 bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Guests</label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(Number.parseInt(e.target.value))}
                        className="w-full border border-border rounded-lg p-2 bg-background"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} guest{n > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="font-semibold">${room.price}</span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Reserve Now
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-3">You won't be charged yet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
