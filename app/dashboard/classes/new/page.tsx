"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { ArrowLeft } from "lucide-react"

export default function NewClass() {
  const { user } = useAuth()
  const router = useRouter()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase
        .from("classes")
        .insert([
          {
            name,
            description,
            teacher_id: user.id,
          },
        ])
        .select()

      if (error) throw error

      router.push("/dashboard/classes")
    } catch (error: any) {
      console.error("Error creating class:", error)
      setError(error.message || "An error occurred while creating the class")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/dashboard/classes" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Classes
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900">Create New Class</h1>

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
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Class Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              href="/dashboard/classes"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] mr-3"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Class"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
