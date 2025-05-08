"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

interface Student {
  id: string
  first_name: string
  last_name: string
  class_name: string
}

export default function StudentLogin({ params }: { params: { id: string } }) {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        // Get the student
        const { data: studentData, error: studentError } = await supabase
          .from("students")
          .select("id, first_name, last_name, class_id")
          .eq("id", params.id)
          .single()

        if (studentError) throw studentError

        if (!studentData) {
          setError("Student not found")
          setLoading(false)
          return
        }

        // Get the class name
        const { data: classData, error: classError } = await supabase
          .from("classes")
          .select("name")
          .eq("id", studentData.class_id)
          .single()

        if (classError) throw classError

        setStudent({
          ...studentData,
          class_name: classData?.name || "Unknown Class",
        })
      } catch (error) {
        console.error("Error fetching student:", error)
        setError("Error loading student information")
      } finally {
        setLoading(false)
      }
    }

    fetchStudent()
  }, [params.id])

  const handleContinue = () => {
    if (student) {
      router.push(`/student-checkin/${student.id}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  if (error || !student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-red-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || "Student not found"}</h2>
          <p className="text-gray-600 mb-6">
            The QR code you scanned doesn't match any student in our system. Please contact your teacher for assistance.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#007B5F] text-white px-6 py-2 rounded-md font-medium hover:bg-[#006B4F] transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <Image src="/images/palm-logo.png" alt="Palm Learning Logo" width={100} height={100} className="mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {student.first_name}!</h2>
        <p className="text-gray-600 mb-6">
          You're logged in as {student.first_name} {student.last_name} from {student.class_name}.
        </p>
        <button
          onClick={handleContinue}
          className="w-full bg-[#007B5F] text-white px-6 py-3 rounded-md font-medium hover:bg-[#006B4F] transition-colors text-lg"
        >
          Continue to Check-in
        </button>
        <p className="mt-6 text-sm text-gray-500">
          Not you?{" "}
          <Link href="/" className="text-[#007B5F] hover:underline">
            Return to home
          </Link>
        </p>
      </div>
    </div>
  )
}
