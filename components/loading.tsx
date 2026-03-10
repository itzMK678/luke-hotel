'use client'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src="/loading.gif"
        alt="Loading..."
        width={40}
        height={40}
        priority
      />
    </div>
  )
}