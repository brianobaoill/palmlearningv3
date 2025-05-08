"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { BookOpen, Edit, Trash2, Plus, Loader2 } from "lucide-react"

interface Lesson {
  id: string
  title: string
  description: string
  fable: {
    id: string
    title: string
  }
  created_at: string
}

export default function LessonsPage() {
  const { user } = useAuth()
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLessons = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("fable_lessons")
          .select(`
            id,
            title,
            description,
            created_at,
            fable:fables (
              id,
              title
            )
          `)
          .eq("teacher_id", user.id)
          .order("created_at", { ascending: false })

        if (error) throw error

        setLessons(data || [])
      } catch (error: any) {
        console.error("Error fetching lessons:", error)
        setError(error.message || "An error occurred while loading lessons")
      } finally {
        setLoading(false)
      }
    }

    fetchLessons()
  }, [user])

  const handleDeleteLesson = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lesson plan?")) {
      return
    }

    try {
      const { error } = await supabase.from("fable_lessons").delete().eq("id", id)

      if (error) throw error

      setLessons(lessons.filter((lesson) => lesson.id !== id))
    } catch (error: any) {
      console.error("Error deleting lesson:", error)
      alert("Error deleting lesson: " + error.message)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-[#007B5F]" />
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Fable Lesson Plans</h1>
        <Link
          href="/fables"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create New Lesson
        </Link>
      </div>

      {error && (
        <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {lessons.length === 0 ? (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md p-6 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No lesson plans yet</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating a new lesson plan.</p>
          <div className="mt-6">
            <Link
              href="/fables"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
            >
              <Plus className="h-4 w-4 mr-2" />
              Browse Fables
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-[#007B5F] truncate">{lesson.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 truncate">{lesson.description || "No description"}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <BookOpen className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>Based on: {lesson.fable.title}</span>
                        <span className="mx-2">&middot;</span>
                        <span>Created on {formatDate(lesson.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href={`/fables/${lesson.fable.id}/lesson`}
                        className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDeleteLesson(lesson.id)}
                        className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
