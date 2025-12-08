"use client"
import Image from "next/image"

export default function Profile() {
  // Sample data - replace with your actual data or fetch from an API
  const profileData = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    profileImage: "/profile-avatar.png",
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background to-card">
      <div className="flex flex-col items-center gap-6 p-8 bg-card rounded-lg shadow-lg border border-border max-w-sm w-full">
        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md">
          <Image
            src={profileData.profileImage || "/placeholder.svg"}
            alt={profileData.name}
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold text-foreground text-center text-pretty">{profileData.name}</h1>

        {/* Gmail/Email */}
        <div className="flex items-center gap-2">
          <span className="text-foreground/60 text-sm">Email:</span>
          <a href={`mailto:${profileData.email}`} className="text-primary hover:underline font-medium truncate">
            {profileData.email}
          </a>
        </div>
      </div>
    </div>
  )
}
