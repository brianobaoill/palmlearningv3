"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample tales data (in a real app, this would come from the database)
const sampleTales = [
  {
    id: "1",
    title: "Hansel and Gretel",
    description: "A brother and sister find themselves lost in the forest and discover a house made of candy...",
    image: "/images/grimm-fairy-tales.jpeg",
    slug: "hansel-and-gretel",
  },
  {
    id: "2",
    title: "Snow White",
    description:
      "A princess with skin as white as snow escapes her jealous stepmother and finds refuge with seven dwarfs...",
    image: "/placeholder.svg?key=snow-white",
    slug: "snow-white",
  },
  {
    id: "3",
    title: "Cinderella",
    description:
      "A young woman forced into servitude by her stepmother and stepsisters gets a chance to attend the royal ball...",
    image: "/placeholder.svg?key=cinderella",
    slug: "cinderella",
  },
  {
    id: "4",
    title: "Rapunzel",
    description:
      "A young woman with extremely long hair is kept locked in a tower by a witch until a prince discovers her...",
    image: "/placeholder.svg?key=rapunzel",
    slug: "rapunzel",
  },
]

export default function GrimmTalesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const tales = sampleTales

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tales.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tales.length) % tales.length)
  }

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
          aria-label="Previous tale"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        <div className="w-full md:flex">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image
              src={tales[currentIndex].image || "/placeholder.svg"}
              alt={tales[currentIndex].title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tales[currentIndex].title}</h3>
            <p className="text-gray-600 mb-6">{tales[currentIndex].description}</p>
            <Link
              href={`/grimm-tales/${tales[currentIndex].slug}`}
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Read this tale
            </Link>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
          aria-label="Next tale"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {tales.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-indigo-600" : "bg-gray-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
