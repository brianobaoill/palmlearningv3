"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { ArrowLeft } from "lucide-react"

interface Class {
  id: string
  name: string
}

export default function NewStudent() {
  const { user } = useAuth()
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [classId, setClassId] = useState("")
  const [classes, setClasses] = useState<Class[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fetchingClasses, setFetchingClasses] = useState(true)

  useEffect(() => {
    const fetchClasses = async () => {
      if (!user) return

      try {
        const { data, error } = await supabase
          .from("classes")
          .select("id, name")
          .eq("teacher_id", user.id)
          .order("name")

        if (error) throw error

        setClasses(data || [])
        if (data && data.length > 0) {
          setClassId(data[0].id)
        }
      } catch (error) {
        console.error("Error fetching classes:", error)
      } finally {
        setFetchingClasses(false)
      }
    }

    fetchClasses()
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from("students")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email || null,
            class_id: classId,
          },
        ])
        .select()

      if (error) throw error

      router.push("/dashboard/students")
    } catch (error: any) {
      console.error("Error creating student:", error)
      setError(error.message || "An error occurred while creating the student")
    } finally {
      setLoading(false)
    }
  }

  if (fetchingClasses) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  if (classes.length === 0) {
    return (
      <div>
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/students"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Students
          </Link>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">Create New Student</h1>

        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
          <p className="text-gray-500">You need to create a class before you can add students.</p>
          <Link
            href="/dashboard/classes/new"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#007B5F] bg-[#e5f3ff] hover:bg-[#d5e9fa] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
          >
            Create a class
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/dashboard/students" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Students
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900">Create New Student</h1>

      {error && (
        <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                Class
              </label>
              <select
                id="class"
                name="class"
                required
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href="/dashboard/students"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] mr-3"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
