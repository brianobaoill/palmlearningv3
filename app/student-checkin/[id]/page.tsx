"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { Smile, Meh, Frown, AlertCircle, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

type Mood = "😊" | "🙂" | "😐" | "🙁" | "😢"

interface Student {
  id: string
  first_name: string
  last_name: string
  class_name: string
}

const moodTips = {
  "😊": "Keep spreading the positivity — maybe send someone a kind message.",
  "🙂": "Enjoy the calm — try doing something creative today.",
  "😐": "It's okay to feel neutral — take a few deep breaths and stretch.",
  "🙁": "Try talking to a friend or journaling how you feel.",
  "😢": "You're not alone — consider taking a short walk or listening to calming music.",
}

const moodColors = {
  "😊": "bg-green-50 border-green-200 text-green-700",
  "🙂": "bg-blue-50 border-blue-200 text-blue-700",
  "😐": "bg-yellow-50 border-yellow-200 text-yellow-700",
  "🙁": "bg-orange-50 border-orange-200 text-orange-700",
  "😢": "bg-red-50 border-red-200 text-red-700",
}

const moodIcons = {
  "😊": ThumbsUp,
  "🙂": Smile,
  "😐": Meh,
  "🙁": Frown,
  "😢": AlertCircle,
}

const moodBgColors = {
  "😊": "bg-green-100",
  "🙂": "bg-blue-100",
  "😐": "bg-yellow-100",
  "🙁": "bg-orange-100",
  "😢": "bg-red-100",
}

export default function StudentCheckin({ params }: { params: { id: string } }) {
  const [student, setStudent] = useState<Student | null>(null)
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null)
  const [reflection, setReflection] = useState("")
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedMood) {
      alert("Please select a mood!")
      return
    }

    if (!student) return

    setSubmitting(true)

    try {
      const { error } = await supabase.from("check_ins").insert([
        {
          student_id: student.id,
          mood: selectedMood,
          reflection: reflection || null,
        },
      ])

      if (error) throw error

      setSuccess(true)
      setTimeout(() => {
        router.push(`/student-checkin-success/${student.id}`)
      }, 1000)
    } catch (error) {
      console.error("Error submitting check-in:", error)
      setError("Error submitting your check-in. Please try again.")
      setSubmitting(false)
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
            There was an error loading your information. Please contact your teacher for assistance.
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

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-green-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Check-in Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for sharing how you're feeling today.</p>
          <div className="animate-pulse">Redirecting...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Image src="/images/palm-logo.png" alt="Palm Learning Logo" width={80} height={80} className="mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">How are you feeling today?</h2>
          <p className="mt-2 text-gray-600">Hi {student.first_name}! Let us know how you're doing right now.</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-wrap justify-around my-6">
              {(["😊", "🙂", "😐", "🙁", "😢"] as Mood[]).map((mood) => {
                const MoodIcon = moodIcons[mood]
                return (
                  <motion.label
                    key={mood}
                    className="cursor-pointer mb-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <input
                      type="radio"
                      name="mood"
                      value={mood}
                      checked={selectedMood === mood}
                      onChange={() => setSelectedMood(mood)}
                      className="sr-only"
                    />
                    <div
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                        selectedMood === mood
                          ? `ring-2 ring-[#007B5F] ${moodColors[mood]}`
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-full ${moodBgColors[mood]} flex items-center justify-center`}>
                        <MoodIcon className="w-8 h-8" />
                      </div>
                      <span className="text-2xl mt-2">{mood}</span>
                    </div>
                  </motion.label>
                )
              })}
            </div>

            <div className="mt-6">
              <label htmlFor="reflection" className="block text-sm font-medium text-gray-700">
                Want to share why? (optional)
              </label>
              <textarea
                id="reflection"
                name="reflection"
                rows={3}
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
                placeholder="Tell us more about how you're feeling..."
              />
            </div>

            {selectedMood && (
              <div className="mt-4 p-4 rounded-md bg-gray-50">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Tip:</span> {moodTips[selectedMood]}
                </p>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting || !selectedMood}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Check-in"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
