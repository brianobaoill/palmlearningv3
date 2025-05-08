"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"

export default function TeacherLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [setupRequired, setSetupRequired] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSetupRequired(false)
    setIsLoading(true)

    try {
      await signIn(email, password)
      router.push("/dashboard")
    } catch (error: any) {
      console.error("Login error:", error)

      if (email === "teacher@palmlearning.com" && password === "password123") {
        setSetupRequired(true)
      } else {
        setError("Invalid email or password")
      }
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Teacher Login</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to access your teacher dashboard and manage your classes</p>
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

        {setupRequired && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  The demo account needs to be set up first. Please visit the setup page to create the demo account.
                </p>
                <div className="mt-2">
                  <Link
                    href="/setup-demo"
                    className="text-sm font-medium text-yellow-700 underline hover:text-yellow-600"
                  >
                    Go to Setup Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#007B5F] focus:ring-[#007B5F] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#007B5F] hover:text-[#006B4F]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Demo credentials</span>
            </div>
          </div>
          <div className="mt-4 bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Important:</strong> You must set up the demo account before logging in.
            </p>
            <Link
              href="/setup-demo"
              className="inline-block mb-3 text-sm font-medium text-[#007B5F] hover:text-[#006B4F] underline"
            >
              Click here to set up the demo account
            </Link>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> teacher@palmlearning.com
            </p>
            <p className="text-sm text-gray-600">
              <strong>Password:</strong> password123
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
