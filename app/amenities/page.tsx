import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { headers } from "next/headers";
// UTILS: slug generator
function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

// AMENITIES DATA
const amenities = [
  { name: "Swimming Pool", description: "Olympic-sized heated pool"  , photo:"https://images.unsplash.com/photo-1591285713698-598d587de63e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dpbW1pbmclMjBwb29sfGVufDB8fDB8fHww"},
  { name: "Fine Dining", description: "5-star restaurant and bar" , photo:"https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50fGVufDB8fDB8fHww" },
  {  name: "Spa & Wellness", description: "Full-service luxury spa" , photo:"https://plus.unsplash.com/premium_photo-1723867490491-10519f8ed969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwYXxlbnwwfHwwfHx8MA%3D%3D"},
  {  name: "Fitness Center", description: "State-of-the-art gym" , photo:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"},
  {  name: "Meeting Hall", description: "Full conference facilities" , photo:"https://plus.unsplash.com/premium_photo-1724753995718-83ed84459556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVldGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D"},
  {  name: "Valet Parking", description: "Complimentary valet service" , photo:"https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsZXQlMjBwYXJraW5nfGVufDB8fDB8fHww" },
].map((item) => ({ ...item, slug: slugify(item.name) }));

export default function Amenities() {
  return (
    <>
    
    <section id="amenities" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Amenities</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need for an unforgettable stay
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {amenities.map((amenity) => (
           <Link key={amenity.slug} href={`/amenities/${amenity.slug}`} className="group">
  <Card
    className="py-10 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 origin-center hover:border-black"
    style={{
      backgroundImage: `url(${amenity.photo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <CardHeader>
      <CardTitle className="flex flex-col">
        <span className="text-[25px] text-white font-extrabold [text-shadow:0_3px_8px_rgba(0,0,0,0.9)]">
          {amenity.name}
        </span>

       <span className="text-[17px] text-white  font-semibold [text-shadow:0_3px_8px_rgba(0,0,0,0.9)]">
  {amenity.description}
</span>

      </CardTitle>
    </CardHeader>
  </Card>
</Link>

          ))}
        </div>
      </div>
    </section>
  
    </>
  );
}
