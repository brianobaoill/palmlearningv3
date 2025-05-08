"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // In a real app, we would validate the student ID against a database
      // For demo purposes, we'll just redirect to a student-specific page
      if (studentId.trim()) {
        router.push(`/student-login/${encodeURIComponent(studentId)}`)
      } else {
        setError("Please enter a student ID")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/images/palm-learning-logo.png"
              alt="Palm Learning Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Student Login</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your student ID to access your learning dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="student-id" className="sr-only">
              Student ID
            </label>
            <input
              id="student-id"
              name="student-id"
              type="text"
              required
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] focus:z-10 sm:text-sm"
              placeholder="Enter your student ID"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Demo student IDs</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Student ID:</strong> S12345
            </p>
            <p className="text-sm text-gray-600">
              <strong>Student ID:</strong> S67890
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
