"use client"

import { useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
      {!isLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse">Loading video...</div>
        </div>
      )}
      <iframe
        className={`w-full h-full ${isLoaded ? "opacity-100" : "opacity-0"}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
      ></iframe>
    </div>
  )
}
