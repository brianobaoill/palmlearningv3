"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"

interface Student {
  id: string
  first_name: string
  last_name: string
}

export default function CheckinSuccess({ params }: { params: { id: string } }) {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const { data, error } = await supabase
          .from("students")
          .select("id, first_name, last_name")
          .eq("id", params.id)
          .single()

        if (error) throw error
        setStudent(data)
      } catch (error) {
        console.error("Error fetching student:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStudent()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-green-500 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank you, {student?.first_name || "Student"}!</h2>
        <p className="text-gray-600 mb-8">
          Your check-in has been recorded. We appreciate you sharing how you're feeling today.
        </p>

        <div className="bg-gray-50 p-4 rounded-md mb-8">
          <p className="text-sm text-gray-700">
            Remember, it's important to talk about your feelings. If you're feeling upset or need help, please talk to
            your teacher or a trusted adult.
          </p>
        </div>

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
