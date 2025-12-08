import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with premium amenities and city view",
    price: "$299",
    image: "/luxury-hotel-deluxe-suite.jpg",
  },
  {
    id: 2,
    name: "Presidential Suite",
    description: "Ultimate luxury with private terrace and 24/7 concierge",
    price: "$599",
    image: "/luxury-hotel-presidential-suite.jpg",
  },
  {
    id: 3,
    name: "Ocean View Room",
    description: "Breathtaking views with direct beach access",
    price: "$399",
    image: "/luxury-hotel-ocean-view-room.jpg",
  },
]

export default function FeaturedRooms() {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Rooms</h2>
          <p className="text-muted-foreground text-lg">
            Discover our collection of elegantly designed rooms and suites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }} />
              <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{room.price}</span>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
