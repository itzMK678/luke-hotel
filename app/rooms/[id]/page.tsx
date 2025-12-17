import Detail from "@/components/detail";

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
  params: {
    id: string;
  };
};

export default function RoomDetailPage({ params }: PageProps) {
  const room = allRooms.find((room) => room.id === Number(params.id));

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Room not found</p>
      </div>
    );
  }

  return <Detail room={room} />;
}
