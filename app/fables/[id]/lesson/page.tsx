"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import FableLessonForm from "@/components/fable-lesson-form"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
}

interface Lesson {
  id: string
  title: string
  description: string
  discussion_questions: string[]
  activities: string[]
  learning_objectives: string[]
  emotional_themes: string[]
}

export default function CreateLessonPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [fable, setFable] = useState<Fable | null>(null)
  const [existingLesson, setExistingLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        router.push("/auth/login")
        return
      }

      try {
        // Fetch the fable
        const { data: fableData, error: fableError } = await supabase
          .from("fables")
          .select("id, title, description, moral")
          .eq("id", params.id)
          .single()

        if (fableError) throw fableError

        setFable(fableData)

        // Check if the teacher already has a lesson for this fable
        const { data: lessonData, error: lessonError } = await supabase
          .from("fable_lessons")
          .select("*")
          .eq("fable_id", params.id)
          .eq("teacher_id", user.id)
          .maybeSingle()

        if (lessonError) throw lessonError

        if (lessonData) {
          setExistingLesson(lessonData)
        }
      } catch (error: any) {
        console.error("Error fetching data:", error)
        setError(error.message || "An error occurred while loading the page")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id, user, router])

  const handleSave = () => {
    router.push("/dashboard/lessons")
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
          <Link href="/fables" className="text-[#007B5F] hover:underline">
            Return to Fables
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link
          href={`/fables/${params.id}`}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Fable
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">{existingLesson ? "Edit" : "Create"} Lesson Plan</h1>
      <p className="text-gray-600 mb-6">
        {existingLesson
          ? "Update your existing lesson plan for this fable."
          : "Create a new lesson plan based on this fable to use with your students."}
      </p>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{fable.title}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{fable.description}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-none">
            <h4 className="text-base font-medium text-gray-900">Moral of the Story</h4>
            <p className="text-gray-600">{fable.moral}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Lesson Plan Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Fill out the form below to create a lesson plan for your students.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <FableLessonForm fable={fable} existingLesson={existingLesson || undefined} onSave={handleSave} />
        </div>
      </div>
    </div>
  )
}
