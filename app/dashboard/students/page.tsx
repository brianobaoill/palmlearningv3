"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { Plus, Edit, Trash2, BookOpen } from "lucide-react"

interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  class_id: string
  class_name?: string
  created_at: string
}

export default function Students() {
  const { user } = useAuth()
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user) return

      try {
        // First get all classes for this teacher
        const { data: classes, error: classError } = await supabase
          .from("classes")
          .select("id, name")
          .eq("teacher_id", user.id)

        if (classError) throw classError

        if (!classes || classes.length === 0) {
          setStudents([])
          setLoading(false)
          return
        }

        const classIds = classes.map((c) => c.id)
        const classMap = classes.reduce(
          (acc, cls) => {
            acc[cls.id] = cls.name
            return acc
          },
          {} as Record<string, string>,
        )

        // Then get all students in these classes
        const { data: studentsData, error: studentError } = await supabase
          .from("students")
          .select("*")
          .in("class_id", classIds)
          .order("created_at", { ascending: false })

        if (studentError) throw studentError

        const studentsWithClassName = (studentsData || []).map((student) => ({
          ...student,
          class_name: classMap[student.class_id] || "Unknown Class",
        }))

        setStudents(studentsWithClassName)
      } catch (error) {
        console.error("Error fetching students:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [user])

  const handleDeleteStudent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this student? This will also delete all associated check-ins.")) {
      return
    }

    try {
      const { error } = await supabase.from("students").delete().eq("id", id)

      if (error) throw error

      setStudents(students.filter((student) => student.id !== id))
    } catch (error) {
      console.error("Error deleting student:", error)
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
        <h1 className="text-2xl font-semibold text-gray-900">Students</h1>
        <Link
          href="/dashboard/students/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Student
        </Link>
      </div>

      {students.length === 0 ? (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md p-6 text-center">
          <p className="text-gray-500">You haven't added any students yet.</p>
          <Link
            href="/dashboard/students/new"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#007B5F] bg-[#e5f3ff] hover:bg-[#d5e9fa] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add your first student
          </Link>
        </div>
      ) : (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {students.map((student) => (
              <li key={student.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e5f3ff] flex items-center justify-center">
                        <span className="text-[#007B5F] font-medium">
                          {student.first_name.charAt(0)}
                          {student.last_name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#007B5F]">
                          {student.first_name} {student.last_name}
                        </div>
                        <div className="text-sm text-gray-500">{student.email || "No email"}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>{student.class_name}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          href={`/dashboard/students/${student.id}`}
                          className="inline-flex items-center p-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDeleteStudent(student.id)}
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
