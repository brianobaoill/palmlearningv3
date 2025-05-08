"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface Student {
  id: string
  first_name: string
  last_name: string
  email: string
  class_id: string
  class_name?: string
}

export default function StudentDetail({ params }: { params: { id: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const [student, setStudent] = useState<Student | null>(null)
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [classId, setClassId] = useState("")
  const [updating, setUpdating] = useState(false)
  const [qrUrl, setQrUrl] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return

      try {
        // Fetch student data
        const { data: studentData, error: studentError } = await supabase
          .from("students")
          .select("*")
          .eq("id", params.id)
          .single()

        if (studentError) throw studentError

        // Fetch classes for this teacher
        const { data: classesData, error: classesError } = await supabase
          .from("classes")
          .select("id, name")
          .eq("teacher_id", user.id)
          .order("name")

        if (classesError) throw classesError

        // Get class name
        const { data: classData, error: classError } = await supabase
          .from("classes")
          .select("name")
          .eq("id", studentData.class_id)
          .single()

        if (classError) throw classError

        const studentWithClassName = {
          ...studentData,
          class_name: classData?.name || "Unknown Class",
        }

        setStudent(studentWithClassName)
        setFirstName(studentWithClassName.first_name)
        setLastName(studentWithClassName.last_name)
        setEmail(studentWithClassName.email || "")
        setClassId(studentWithClassName.class_id)
        setClasses(classesData || [])

        // Set QR code URL
        const baseUrl = window.location.origin
        setQrUrl(`${baseUrl}/student-login/${studentWithClassName.id}`)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Error loading student data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user, params.id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    setUpdating(true)
    setError(null)

    try {
      const { error } = await supabase
        .from("students")
        .update({
          first_name: firstName,
          last_name: lastName,
          email: email || null,
          class_id: classId,
        })
        .eq("id", params.id)

      if (error) throw error

      router.push("/dashboard/students")
    } catch (error: any) {
      console.error("Error updating student:", error)
      setError(error.message || "An error occurred while updating the student")
      setUpdating(false)
    }
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-code-canvas") as HTMLCanvasElement
    if (!canvas) return

    const pngUrl = canvas.toDataURL("image/png")
    const downloadLink = document.createElement("a")
    downloadLink.href = pngUrl
    downloadLink.download = `${firstName}-${lastName}-qrcode.png`
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const printQRCode = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const studentName = `${firstName} ${lastName}`
    const className = student?.class_name || ""

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>QR Code for ${studentName}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
          }
          .qr-container {
            margin: 20px auto;
            max-width: 300px;
          }
          h2 {
            margin-bottom: 5px;
          }
          p {
            margin-top: 5px;
            color: #666;
          }
          .instructions {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h2>${studentName}</h2>
        <p>${className}</p>
        <div class="qr-container">
          <img src="${document.getElementById("qr-code-canvas")?.toDataURL()}" width="300" height="300" />
        </div>
        <p>Scan this QR code to check in</p>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Scan this QR code with a smartphone or tablet</li>
            <li>Confirm your identity</li>
            <li>Complete your daily emotional check-in</li>
          </ol>
        </div>
      </body>
      </html>
    `)

    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  if (!student) {
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

        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 text-center">
          <p className="text-red-500">Student not found or you don't have permission to view this student.</p>
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

      <h1 className="text-2xl font-semibold text-gray-900">Edit Student</h1>

      {error && (
        <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
                  disabled={updating}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
                >
                  {updating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Student QR Code</h3>
            <div className="flex justify-center mb-4">
              <div className="p-2 border border-gray-200 rounded-md">
                <QRCodeSVG
                  id="qr-code-canvas"
                  value={qrUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                  imageSettings={{
                    src: "/images/palm-logo.png",
                    x: undefined,
                    y: undefined,
                    height: 40,
                    width: 40,
                    excavate: true,
                  }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mb-4">
              Students can scan this QR code to quickly access their check-in page.
            </p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={downloadQRCode}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
              >
                <Download className="h-4 w-4 mr-2" />
                Download QR Code
              </button>
              <button
                onClick={printQRCode}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
