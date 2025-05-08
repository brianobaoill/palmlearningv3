"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { BarChart, Users, BookOpen, Calendar, Download, FileText, BookMarked } from "lucide-react"

export default function Dashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    classCount: 0,
    studentCount: 0,
    checkInCount: 0,
    recentCheckIns: 0,
  })
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return

      try {
        // Get user's name
        const { data: userData } = await supabase.from("users").select("full_name").eq("id", user.id).single()

        if (userData) {
          setUserName(userData.full_name)
        }

        // Get class count
        const { count: classCount } = await supabase
          .from("classes")
          .select("*", { count: "exact", head: true })
          .eq("teacher_id", user.id)

        // Get student count
        const { data: classes } = await supabase.from("classes").select("id").eq("teacher_id", user.id)

        let studentCount = 0
        if (classes && classes.length > 0) {
          const classIds = classes.map((c) => c.id)
          const { count } = await supabase
            .from("students")
            .select("*", { count: "exact", head: true })
            .in("class_id", classIds)

          studentCount = count || 0
        }

        // Get check-in counts
        let checkInCount = 0
        let recentCheckIns = 0

        if (classes && classes.length > 0) {
          const classIds = classes.map((c) => c.id)

          // Get students in these classes
          const { data: students } = await supabase.from("students").select("id").in("class_id", classIds)

          if (students && students.length > 0) {
            const studentIds = students.map((s) => s.id)

            // Total check-ins
            const { count: totalCheckIns } = await supabase
              .from("check_ins")
              .select("*", { count: "exact", head: true })
              .in("student_id", studentIds)

            checkInCount = totalCheckIns || 0

            // Recent check-ins (last 7 days)
            const sevenDaysAgo = new Date()
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

            const { count: recentCount } = await supabase
              .from("check_ins")
              .select("*", { count: "exact", head: true })
              .in("student_id", studentIds)
              .gte("created_at", sevenDaysAgo.toISOString())

            recentCheckIns = recentCount || 0
          }
        }

        setStats({
          classCount: classCount || 0,
          studentCount,
          checkInCount,
          recentCheckIns,
        })
      } catch (error) {
        console.error("Error fetching dashboard stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [user])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="mt-4">
        <h2 className="text-lg font-medium text-gray-700">Welcome back, {userName || "Teacher"}!</h2>
        <p className="text-gray-500 mt-1">Here's an overview of your classes and student activities.</p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Classes stat */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-[#007B5F]" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Classes</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stats.classCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Students stat */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-[#0099CC]" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Students</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stats.studentCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Check-ins stat */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart className="h-6 w-6 text-[#F9A826]" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Check-ins</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stats.checkInCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Recent check-ins stat */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-[#FF6B6B]" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Recent Check-ins (7 days)</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stats.recentCheckIns}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Resources Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Teaching Resources</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/emotional-wellbeing/unit-of-work" className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookMarked className="h-6 w-6 text-[#8A4FFF]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">Emotional Wellbeing Unit of Work</h4>
                <p className="mt-1 text-sm text-gray-500">Complete 6-lesson unit with worksheets for ages 6-13</p>
              </div>
            </div>
          </a>

          <a
            href="/emotional-wellbeing/unit-of-work?download=true"
            className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Download className="h-6 w-6 text-[#8A4FFF]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">Download Unit of Work (PDF)</h4>
                <p className="mt-1 text-sm text-gray-500">Get the complete unit as a printable PDF</p>
              </div>
            </div>
          </a>

          <a href="/dashboard/lessons" className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileText className="h-6 w-6 text-[#007B5F]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">My Lesson Plans</h4>
                <p className="mt-1 text-sm text-gray-500">Access your saved lesson plans</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700">Quick Actions</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/dashboard/classes/new" className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BookOpen className="h-6 w-6 text-[#007B5F]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">Create a New Class</h4>
                <p className="mt-1 text-sm text-gray-500">Add a new class to your teaching roster</p>
              </div>
            </div>
          </a>

          <a href="/dashboard/students/new" className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-[#0099CC]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">Add New Students</h4>
                <p className="mt-1 text-sm text-gray-500">Register new students to your classes</p>
              </div>
            </div>
          </a>

          <a href="/dashboard/check-ins" className="block p-6 bg-white shadow rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BarChart className="h-6 w-6 text-[#F9A826]" />
              </div>
              <div className="ml-4">
                <h4 className="text-base font-medium text-gray-900">View Check-in Reports</h4>
                <p className="mt-1 text-sm text-gray-500">Analyze student emotional wellbeing data</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
