"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, BookOpen, Heart } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
  audio_url: string
  image_url: string
  duration: number
  transcript?: string
  age_range?: string
}

interface FableCardProps {
  fable: Fable
}

export default function FableCard({ fable }: FableCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState<{ listened: boolean } | null>(null)

  // Format duration from seconds to MM:SS format
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  // Fetch progress when component mounts
  useState(() => {
    const fetchProgress = async () => {
      // Get the current user's ID from local storage or session
      const studentId = localStorage.getItem("studentId")

      if (studentId) {
        try {
          const { data } = await supabase
            .from("student_fable_progress")
            .select("listened")
            .eq("student_id", studentId)
            .eq("fable_id", fable.id)
            .maybeSingle()

          setProgress(data)
        } catch (error) {
          console.error("Error fetching progress:", error)
        }
      }
    }

    fetchProgress()
  }, [fable.id])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={fable.image_url || "/placeholder.svg"} alt={fable.title} fill className="object-cover" />
        {progress?.listened && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Completed
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{fable.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{fable.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDuration(fable.duration)}</span>
          </div>
          {fable.age_range && (
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Ages {fable.age_range}</span>
          )}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/fable-library/${fable.id}`}
            className="text-[#007B5F] hover:text-[#006B4F] text-sm font-medium flex items-center"
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Read & Listen
          </Link>
          <div className="flex items-center text-sm text-gray-500">
            <Heart className="h-4 w-4 mr-1" />
            <span>Moral Lesson</span>
          </div>
        </div>
      </div>
    </div>
  )
}
