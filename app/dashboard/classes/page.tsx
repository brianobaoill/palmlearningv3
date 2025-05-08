"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { Plus, Edit, Trash2, Users, BookOpen } from "lucide-react"

interface Class {
  id: string
  name: string
  description: string
  created_at: string
  student_count?: number
}

export default function Classes() {
  const { user } = useAuth()
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClasses = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("classes")
          .select("*")
          .eq("teacher_id", user.id)
          .order("created_at", { ascending: false })

        if (error) throw error

        // Get student counts for each class
        const classesWithStudentCounts = await Promise.all(
          (data || []).map(async (cls) => {
            const { count } = await supabase
              .from("students")
              .select("*", { count: "exact", head: true })
              .eq("class_id", cls.id)

            return {
              ...cls,
              student_count: count || 0,
            }
          }),
        )

        setClasses(classesWithStudentCounts)
      } catch (error) {
        console.error("Error fetching classes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchClasses()
  }, [user])

  const handleDeleteClass = async (id: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this class? This will also delete all associated students and check-ins.",
      )
    ) {
      return
    }

    try {
      const { error } = await supabase.from("classes").delete().eq("id", id)

      if (error) throw error

      setClasses(classes.filter((cls) => cls.id !== id))
    } catch (error) {
      console.error("Error deleting class:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
        <Link
          href="/dashboard/classes/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Class
        </Link>
      </div>

      {classes.length === 0 ? (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md p-6 text-center">
          <p className="text-gray-500">You haven't created any classes yet.</p>
          <Link
            href="/dashboard/classes/new"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#007B5F] bg-[#e5f3ff] hover:bg-[#d5e9fa] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create your first class
          </Link>
        </div>
      ) : (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {classes.map((cls) => (
              <li key={cls.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e5f3ff] flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-[#007B5F]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#007B5F]">{cls.name}</div>
                        <div className="text-sm text-gray-500">{cls.description || "No description"}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>{cls.student_count} students</span>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          href={`/dashboard/classes/${cls.id}`}
                          className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteClass(cls.id)}
                          className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
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
