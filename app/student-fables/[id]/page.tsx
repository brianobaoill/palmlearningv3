"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { ArrowLeft, Loader2, ThumbsUp } from "lucide-react"
import FablePlayer from "@/components/fable-player"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
  audio_url: string
  image_url?: string
  duration: number
  transcript?: string
}

export default function StudentFablePage() {
  const params = useParams()
  const router = useRouter()
  const [fable, setFable] = useState<Fable | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [completed, setCompleted] = useState(false)
  const [studentId, setStudentId] = useState<string | null>(null)

  useEffect(() => {
    // Get student ID from local storage (would be set during student login)
    const storedStudentId = localStorage.getItem("studentId")
    setStudentId(storedStudentId)

    const fetchFable = async () => {
      try {
        const { data, error } = await supabase.from("fables").select("*").eq("id", params.id).single()

        if (error) throw error

        setFable(data)

        // Check if student has already listened to this fable
        if (storedStudentId) {
          const { data: progressData } = await supabase
            .from("student_fable_progress")
            .select("listened")
            .eq("student_id", storedStudentId)
            .eq("fable_id", params.id)
            .maybeSingle()

          if (progressData?.listened) {
            setCompleted(true)
          }
        }
      } catch (error: any) {
        console.error("Error fetching fable:", error)
        setError(error.message || "An error occurred while loading the fable")
      } finally {
        setLoading(false)
      }
    }

    fetchFable()
  }, [params.id])

  const handleComplete = async () => {
    if (!studentId || !fable) return

    try {
      // Record that the student has listened to this fable
      const { error } = await supabase.from("student_fable_progress").upsert(
        {
          student_id: studentId,
          fable_id: fable.id,
          listened: true,
          listened_at: new Date().toISOString(),
        },
        { onConflict: "student_id,fable_id" },
      )

      if (error) throw error

      setCompleted(true)
    } catch (error) {
      console.error("Error recording progress:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-[#007B5F]" />
      </div>
    )
  }

  if (error || !fable) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error || "Fable not found"}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/student-dashboard" className="text-[#007B5F] hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/student-dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Link>
      </div>

      <FablePlayer
        title={fable.title}
        audioUrl={fable.audio_url || ""}
        imageUrl={fable.image_url}
        duration={fable.duration || 180} // Add fallback duration if not provided
        onComplete={handleComplete}
      />

      {completed && (
        <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <ThumbsUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">Great job! You've completed this fable.</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">About this Fable</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-none">
            <p>{fable.description}</p>

            <div className="mt-6 flex items-start">
              <div className="flex-shrink-0">
                <ThumbsUp className="h-6 w-6 text-[#007B5F]" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">What I Learned</h4>
                <p className="mt-1 text-gray-600">{fable.moral}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
