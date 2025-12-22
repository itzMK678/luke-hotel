import Detail from "@/components/detail";
import { notFound } from "next/navigation";
const allRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 199,
    image: "/luxury-deluxe-hotel-room.jpg",
    description: "A comfortable deluxe room with modern amenities.",
  },
  {
    id: 2,
    name: "Deluxe Suite",
    price: 299,
    image: "/spacious-suite-with-living-area.jpg",
    description: "Spacious suite with a separate living area.",
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: 599,
    image: "/presidential-luxury-suite-penthouse.jpg",
    description: "Luxury penthouse suite with premium services.",
  },
];

type PageProps = {
  params: Promise<{ id: string }>;
};


export default async function RoomDetailPage({ params }: PageProps) {
  const id = Number((await params).id);

  if (isNaN(id)) {
    return notFound();
  }

  const room = allRooms.find((room) => room.id === id);

  if (!room) {
    return notFound();
  }

  return <Detail room={room} />;
}