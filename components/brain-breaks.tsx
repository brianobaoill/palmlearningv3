"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

const brainBreaks = [
  {
    id: "breathe",
    title: "Breathing Exercise",
    description: "Take deep breaths in and out, following the animation.",
    color: "bg-blue-100",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    hoverColor: "hover:bg-blue-50",
    duration: 60,
    image: "/placeholder.svg?key=q7wqu",
  },
  {
    id: "stretch",
    title: "Stretch Break",
    description: "Simple stretches to relax your body and mind.",
    color: "bg-green-100",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    hoverColor: "hover:bg-green-50",
    duration: 90,
    image: "/placeholder.svg?key=l5n6o",
  },
  {
    id: "visualize",
    title: "Peaceful Place",
    description: "Imagine a calm, peaceful place that makes you feel safe.",
    color: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    hoverColor: "hover:bg-purple-50",
    duration: 120,
    image: "/placeholder.svg?key=6nafs",
  },
  {
    id: "gratitude",
    title: "Gratitude Moment",
    description: "Think of three things you're thankful for today.",
    color: "bg-yellow-100",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
    hoverColor: "hover:bg-yellow-50",
    duration: 60,
    image: "/placeholder.svg?key=r8ia2",
  },
  {
    id: "bodyaware",
    title: "Body Scan",
    description: "Notice how each part of your body feels, from toes to head.",
    color: "bg-pink-100",
    textColor: "text-pink-700",
    borderColor: "border-pink-200",
    hoverColor: "hover:bg-pink-50",
    duration: 120,
    image: "/placeholder.svg?key=01nav",
  },
  {
    id: "focus",
    title: "Focus Game",
    description:
      "Find five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.",
    color: "bg-indigo-100",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    hoverColor: "hover:bg-indigo-50",
    duration: 90,
    image: "/placeholder.svg?height=200&width=200&query=child using five senses, colorful illustration",
  },
]

export default function BrainBreaks() {
  const [activeBreak, setActiveBreak] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)

  const handleSelectBreak = (id: string) => {
    const selectedBreak = brainBreaks.find((b) => b.id === id)
    setActiveBreak(id)
    setTimeRemaining(selectedBreak?.duration || 60)
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    const selectedBreak = brainBreaks.find((b) => b.id === activeBreak)
    setTimeRemaining(selectedBreak?.duration || 60)
    setIsPlaying(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const selectedBreak = brainBreaks.find((b) => b.id === activeBreak)

  return (
    <div className="w-full">
      {!activeBreak ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brainBreaks.map((breakItem) => (
            <motion.div
              key={breakItem.id}
              className={`rounded-xl border ${breakItem.borderColor} ${breakItem.color} ${breakItem.hoverColor} p-6 cursor-pointer transition-all duration-200`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSelectBreak(breakItem.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4 rounded-full overflow-hidden">
                  <Image
                    src={breakItem.image || "/placeholder.svg"}
                    alt={breakItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${breakItem.textColor}`}>{breakItem.title}</h3>
                <p className="text-gray-600">{breakItem.description}</p>
                <p className="mt-2 text-sm text-gray-500">{Math.floor(breakItem.duration / 60)} min</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setActiveBreak(null)}
            className="mb-6 text-purple-600 font-medium hover:underline flex items-center"
          >
            ← Back to all brain breaks
          </button>

          <div className={`rounded-xl border ${selectedBreak?.borderColor} ${selectedBreak?.color} p-8`}>
            <div className="flex flex-col items-center text-center">
              <h3 className={`text-2xl font-semibold mb-4 ${selectedBreak?.textColor}`}>{selectedBreak?.title}</h3>

              <div className="w-48 h-48 relative mb-6 rounded-full overflow-hidden">
                <Image
                  src={selectedBreak?.image || ""}
                  alt={selectedBreak?.title || ""}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-700 mb-6 max-w-md">{selectedBreak?.description}</p>

              <div className="text-4xl font-bold mb-8 tabular-nums">{formatTime(timeRemaining)}</div>

              <div className="flex space-x-4">
                <button
                  onClick={handlePlayPause}
                  className={`flex items-center justify-center p-3 rounded-full ${
                    isPlaying ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
                  }`}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>

                <button
                  onClick={handleReset}
                  className="flex items-center justify-center p-3 rounded-full bg-blue-100 text-blue-600"
                >
                  <RefreshCw size={24} />
                </button>
              </div>

              <div className="mt-8 text-gray-600">
                <p>Find a comfortable position and follow along with the activity.</p>
                <p className="mt-2">Remember, there's no right or wrong way to do this!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
