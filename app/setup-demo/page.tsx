"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function SetupDemo() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSetup = async () => {
    setError(null)
    setSuccess(false)
    setIsLoading(true)

    try {
      const response = await fetch("/api/create-demo-teacher", {
        method: "POST",
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to set up demo account")
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/teacher-login")
      }, 3000)
    } catch (error: any) {
      console.error("Setup error:", error)
      setError(error.message || "An error occurred during setup")
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Setup Demo Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            This will create a demo teacher account with sample data for testing purposes
          </p>
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

        {success && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  Demo account created successfully! Redirecting to login page...
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Demo Account Details</h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Email:</strong> teacher@palmlearning.com
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Password:</strong> password123
            </p>
            <p className="text-sm text-gray-600 mb-4">
              This will create a teacher account with sample classes, students, and check-in data.
            </p>
          </div>

          <div>
            <button
              onClick={handleSetup}
              disabled={isLoading || success}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
            >
              {isLoading ? "Setting up..." : success ? "Setup Complete!" : "Set Up Demo Account"}
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link href="/teacher-login" className="text-sm text-gray-600 hover:text-gray-900">
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
