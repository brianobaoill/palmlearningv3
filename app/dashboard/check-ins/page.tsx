"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { Calendar, Filter, BookOpen, BarChartIcon, PieChartIcon } from "lucide-react"
import MoodChart from "@/components/mood-chart"

interface CheckIn {
  id: string
  student_id: string
  mood: string
  reflection: string
  created_at: string
  student_name?: string
  class_name?: string
}

export default function CheckIns() {
  const { user } = useAuth()
  const [checkIns, setCheckIns] = useState<CheckIn[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")
  const [dateRange, setDateRange] = useState<string>("week")
  const [moodCounts, setMoodCounts] = useState<Record<string, number>>({})
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([])
  const [selectedClass, setSelectedClass] = useState<string>("all")
  const [chartType, setChartType] = useState<"bar" | "pie">("bar")

  useEffect(() => {
    const fetchCheckIns = async () => {
      if (!user) return

      try {
        // First get all classes for this teacher
        const { data: classesData, error: classError } = await supabase
          .from("classes")
          .select("id, name")
          .eq("teacher_id", user.id)

        if (classError) throw classError

        setClasses(classesData || [])

        if (!classesData || classesData.length === 0) {
          setCheckIns([])
          setLoading(false)
          return
        }

        const classIds = classesData.map((c) => c.id)

        // Get all students in these classes
        const { data: studentsData, error: studentError } = await supabase
          .from("students")
          .select("id, first_name, last_name, class_id")
          .in("class_id", classIds)

        if (studentError) throw studentError

        if (!studentsData || studentsData.length === 0) {
          setCheckIns([])
          setLoading(false)
          return
        }

        const studentIds = studentsData.map((s) => s.id)

        // Create a map of student IDs to names and class IDs
        const studentMap = studentsData.reduce(
          (acc, student) => {
            acc[student.id] = {
              name: `${student.first_name} ${student.last_name}`,
              classId: student.class_id,
            }
            return acc
          },
          {} as Record<string, { name: string; classId: string }>,
        )

        // Create a map of class IDs to names
        const classMap = classesData.reduce(
          (acc, cls) => {
            acc[cls.id] = cls.name
            return acc
          },
          {} as Record<string, string>,
        )

        // Calculate date range
        let startDate = new Date()
        if (dateRange === "week") {
          startDate.setDate(startDate.getDate() - 7)
        } else if (dateRange === "month") {
          startDate.setMonth(startDate.getMonth() - 1)
        } else if (dateRange === "year") {
          startDate.setFullYear(startDate.getFullYear() - 1)
        } else {
          // All time - no filter
          startDate = new Date(0)
        }

        // Get check-ins for these students
        let query = supabase
          .from("check_ins")
          .select("*")
          .in("student_id", studentIds)
          .order("created_at", { ascending: false })

        if (dateRange !== "all") {
          query = query.gte("created_at", startDate.toISOString())
        }

        const { data: checkInsData, error: checkInsError } = await query

        if (checkInsError) throw checkInsError

        // Add student name and class name to each check-in
        const checkInsWithNames = (checkInsData || []).map((checkIn) => {
          const studentInfo = studentMap[checkIn.student_id] || { name: "Unknown", classId: "" }
          return {
            ...checkIn,
            student_name: studentInfo.name,
            class_name: classMap[studentInfo.classId] || "Unknown Class",
          }
        })

        // Calculate mood counts
        const counts: Record<string, number> = {}
        checkInsWithNames.forEach((checkIn) => {
          counts[checkIn.mood] = (counts[checkIn.mood] || 0) + 1
        })
        setMoodCounts(counts)

        setCheckIns(checkInsWithNames)
      } catch (error) {
        console.error("Error fetching check-ins:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCheckIns()
  }, [user, dateRange])

  const filteredCheckIns = checkIns.filter((checkIn) => {
    if (filter !== "all" && checkIn.mood !== filter) {
      return false
    }

    if (selectedClass !== "all" && checkIn.class_name !== selectedClass) {
      return false
    }

    return true
  })

  // Calculate mood counts for filtered check-ins
  const filteredMoodCounts = filteredCheckIns.reduce(
    (acc, checkIn) => {
      acc[checkIn.mood] = (acc[checkIn.mood] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Convert mood counts to chart data format
  const chartData = Object.entries(filteredMoodCounts).map(([mood, count]) => ({
    mood,
    count,
  }))

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  const moodColors: Record<string, string> = {
    "😊": "bg-green-100 text-green-800",
    "🙂": "bg-blue-100 text-blue-800",
    "😐": "bg-yellow-100 text-yellow-800",
    "🙁": "bg-orange-100 text-orange-800",
    "😢": "bg-red-100 text-red-800",
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Student Check-ins</h1>

      {checkIns.length === 0 ? (
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md p-6 text-center">
          <p className="text-gray-500">No check-ins have been recorded yet.</p>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {Object.entries(moodCounts).map(([mood, count]) => (
              <div key={mood} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">{mood}</span>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{mood} Check-ins</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{count}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 mr-2">Filter by mood:</span>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm rounded-md"
                >
                  <option value="all">All moods</option>
                  <option value="😊">😊 Happy</option>
                  <option value="🙂">🙂 Good</option>
                  <option value="😐">😐 Okay</option>
                  <option value="🙁">🙁 Sad</option>
                  <option value="😢">😢 Upset</option>
                </select>
              </div>

              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 mr-2">Time period:</span>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm rounded-md"
                >
                  <option value="week">Last 7 days</option>
                  <option value="month">Last 30 days</option>
                  <option value="year">Last year</option>
                  <option value="all">All time</option>
                </select>
              </div>

              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 mr-2">Class:</span>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] sm:text-sm rounded-md"
                >
                  <option value="all">All classes</option>
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.name}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Mood Distribution</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setChartType("bar")}
                    className={`p-2 rounded-md ${
                      chartType === "bar" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <BarChartIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setChartType("pie")}
                    className={`p-2 rounded-md ${
                      chartType === "pie" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <PieChartIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <MoodChart data={chartData} chartType={chartType} />
            </div>

            <div className="border-t border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Student
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Class
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Mood
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Reflection
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCheckIns.map((checkIn) => (
                      <tr key={checkIn.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{checkIn.student_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{checkIn.class_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              moodColors[checkIn.mood] || "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {checkIn.mood}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {checkIn.reflection || "No reflection provided"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(checkIn.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
