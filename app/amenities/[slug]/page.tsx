import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

// UTILS
function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

// AMENITIES (UPDATED)
const amenities = [
  {
    name: "Swimming Pool",
    description: "Olympic-sized heated pool",
    photo: "https://images.unsplash.com/photo-1591285713698-598d587de63e",
    opening: "06:00 AM",
    closing: "10:00 PM",
    qualities: [
      "Temperature controlled",
      "Certified lifeguards",
      "Children-friendly zone",
      "Poolside café service"
    ],
    reviews: [
      { user: "Sarah K.", rating: 5, comment: "Amazing experience! Very clean and relaxing." },
      { user: "Michael D.", rating: 4, comment: "Great pool but can get busy on weekends." }
    ],
  },
  {
    name: "Fine Dining",
    description: "5-star restaurant and bar",
    photo: "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b",
    opening: "12:00 PM",
    closing: "11:00 PM",
    qualities: [
      "Gourmet international cuisine",
      "Signature cocktails",
      "Private dining rooms",
      "Outdoor terrace"
    ],
    reviews: [
      { user: "Anna L.", rating: 5, comment: "Delicious food and excellent service!" },
      { user: "David M.", rating: 4, comment: "Elegant ambiance, worth the visit." }
    ],
  },
  {
    name: "Spa & Wellness",
    description: "Full-service luxury spa",
    photo: "https://plus.unsplash.com/premium_photo-1723867490491-10519f8ed969",
    opening: "09:00 AM",
    closing: "09:00 PM",
    qualities: [
      "Massages and treatments",
      "Sauna and steam rooms",
      "Luxury skincare products",
      "Relaxation lounge"
    ],
    reviews: [
      { user: "Emily R.", rating: 5, comment: "The spa was heavenly and very peaceful." },
      { user: "John S.", rating: 4, comment: "Great therapists, very professional staff." }
    ],
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art gym",
    photo: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77",
    opening: "05:00 AM",
    closing: "11:00 PM",
    qualities: [
      "Modern cardio and weight equipment",
      "Personal training available",
      "Yoga & group classes",
      "Locker and shower facilities"
    ],
    reviews: [
      { user: "Laura P.", rating: 5, comment: "Top-notch gym, very clean and spacious." },
      { user: "Tom B.", rating: 4, comment: "Equipment variety is excellent." }
    ],
  },
  {
    name: "Meeting Hall",
    description: "Full conference facilities",
    photo: "https://plus.unsplash.com/premium_photo-1724753995718-83ed84459556",
    opening: "08:00 AM",
    closing: "08:00 PM",
    qualities: [
      "Audio-visual equipment",
      "High-speed WiFi",
      "Flexible seating arrangements",
      "Catering available"
    ],
    reviews: [
      { user: "Nancy T.", rating: 5, comment: "Perfect for business events and conferences." },
      { user: "Mark W.", rating: 4, comment: "Professional staff and facilities." }
    ],
  },
  {
    name: "Valet Parking",
    description: "Complimentary valet service",
    photo: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98",
    opening: "24 Hours",
    closing: "24 Hours",
    qualities: [
      "Secure and convenient",
      "Quick vehicle retrieval",
      "Friendly staff",
      "Free for hotel guests"
    ],
    reviews: [
      { user: "Oliver H.", rating: 5, comment: "Extremely convenient and safe." },
      { user: "Sophia K.", rating: 4, comment: "Staff is polite and fast." }
    ],
  },
].map((item) => ({ ...item, slug: slugify(item.name) }));

export default async function AmenityDetail({ params }) {
  const { slug } = await params;
  const amenity = amenities.find((a) => a.slug === slug);

  if (!amenity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Amenity Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Header />

      {/* MAIN PAGE */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* HEADING */}
        <h1 className="text-5xl font-bold text-center mb-6">
          {amenity.name}
        </h1>

        {/* HERO IMAGE */}
        <div
          className="w-full h-[300px] rounded-2xl shadow-lg mb-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${amenity.photo})` }}
        ></div>

        {/* DESCRIPTION */}
       

        {/* QUALITIES / FEATURES */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
           <p className="text-2xl font-semibold text-black text-center max-w-3xl mx-auto">
          {amenity.description}
        </p>
          
          <h2 className="text-lg   font-semibold mb-4">Key Features</h2>

          <ul className="space-y-2">
            {amenity.qualities.map((q, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600 font-bold">✔</span> {q}
              </li>
            ))}
          </ul>
        </div>

        {/* HOURS */}
        <div className="bg-white rounded-xl p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Opening Hours</h2>
          <p className="text-gray-700 text-lg">
            <strong>Opens:</strong> {amenity.opening}
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Closes:</strong> {amenity.closing}
          </p>
        </div>

        {/* REVIEWS SECTION */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Guest Reviews</h2>

          <div className="space-y-4">
            {amenity.reviews.map((rev, i) => (
              <div key={i} className="border-b pb-4">
                <p className="font-bold">{rev.user}</p>
                <p className="text-yellow-500">{"★".repeat(rev.rating)}</p>
                <p className="text-gray-700">{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="text-center bg-red-700 p-4 rounded-lg">
          <Link href="/#amenities" className="text-white hover: text-lg">
             Back to Amenities
          </Link>
        </div>

      </div>

      <Footer />
    </>
  );
}
