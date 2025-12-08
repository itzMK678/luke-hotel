export default function Hero() {
  return (
    <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://media.istockphoto.com/id/636778074/photo/modern-building-gate.jpg?s=612x612&w=0&k=20&c=no61rYa99IZRROmhki6YqiplW6qPznUHvUnvwARjoc4=)",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Welcome to Luxe Hotel</h1>
        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto">
          Experience luxury redefined with world-class service and stunning accommodations
        </p>
        <button className="bg-red-600 hover:bg-red-900 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition cursor-pointer">
          Explore Rooms
        </button>
      </div>
    </section>
  )
}
