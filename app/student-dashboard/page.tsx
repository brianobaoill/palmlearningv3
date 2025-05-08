"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import {
  Smile,
  BookOpen,
  Palette,
  Music,
  Brain,
  Heart,
  Star,
  LogOut,
  ArrowRight,
  Activity,
  ThumbsUp,
} from "lucide-react"
import MoodSelector from "@/components/mood-selector"
import ActivityCard from "@/components/activity-card"

interface Student {
  id: string
  first_name: string
  last_name: string
  class_id?: string
  avatar_url?: string
}

export default function StudentDashboard() {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [recommendedActivities, setRecommendedActivities] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    // Check if student is logged in
    const studentId = localStorage.getItem("studentId")
    if (!studentId) {
      router.push("/student-login")
      return
    }

    const fetchStudentData = async () => {
      try {
        // Handle demo student case
        if (studentId === "demo-student") {
          // Create a mock student object for demo
          setStudent({
            id: "demo-student",
            first_name: "Demo",
            last_name: "Student",
          })
          setLoading(false)
          return
        }

        // For real students, fetch from database
        const { data, error } = await supabase.from("students").select("*").eq("id", studentId).single()

        if (error) throw error

        setStudent(data)
      } catch (error) {
        console.error("Error fetching student data:", error)
        localStorage.removeItem("studentId")
        router.push("/student-login")
      } finally {
        setLoading(false)
      }
    }

    fetchStudentData()
  }, [router])

  useEffect(() => {
    if (selectedMood) {
      // Generate recommended activities based on mood
      const activities = getRecommendedActivities(selectedMood)
      setRecommendedActivities(activities)
    }
  }, [selectedMood])

  const handleLogout = () => {
    localStorage.removeItem("studentId")
    localStorage.removeItem("studentName")
    router.push("/student-login")
  }

  const getRecommendedActivities = (mood: string) => {
    // This would ideally come from a database, but for now we'll hardcode some recommendations
    const allActivities = {
      happy: [
        {
          title: "Kindness Tree",
          description: "Create a tree and add leaves with kind actions you can do for others.",
          icon: Heart,
          color: "bg-green-100",
          iconColor: "text-green-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "The Lion and the Mouse",
          description: "Listen to this fable about how even the smallest friend can be a big help.",
          icon: BookOpen,
          color: "bg-amber-100",
          iconColor: "text-amber-500",
          link: "/fables/lion-and-mouse",
        },
        {
          title: "Gratitude Journal",
          description: "Write down three things you're thankful for today.",
          icon: Star,
          color: "bg-purple-100",
          iconColor: "text-purple-500",
          link: "/emotional-wellbeing/activities",
        },
      ],
      sad: [
        {
          title: "Breathing Exercise",
          description: "Take a moment to breathe deeply and feel calmer.",
          icon: Brain,
          color: "bg-blue-100",
          iconColor: "text-blue-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "Feelings Jar",
          description: "Create a colorful jar that represents your different emotions.",
          icon: Palette,
          color: "bg-pink-100",
          iconColor: "text-pink-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "The Tortoise and the Hare",
          description: "Listen to this fable about perseverance and taking your time.",
          icon: BookOpen,
          color: "bg-amber-100",
          iconColor: "text-amber-500",
          link: "/fables",
        },
      ],
      angry: [
        {
          title: "Calm Down Corner",
          description: "Visit a quiet space with activities to help you feel better.",
          icon: Brain,
          color: "bg-blue-100",
          iconColor: "text-blue-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "Emotion Wheel",
          description: "Explore different feelings and learn what they mean.",
          icon: Smile,
          color: "bg-yellow-100",
          iconColor: "text-yellow-500",
          link: "/emotional-wellbeing/emotion-recognition/emotion-wheel",
        },
        {
          title: "Physical Activity",
          description: "Get moving with fun exercises to release energy.",
          icon: Activity,
          color: "bg-red-100",
          iconColor: "text-red-500",
          link: "/physical-activity",
        },
      ],
      worried: [
        {
          title: "Worry Tree",
          description: "Create a tree where you can hang your worries and let them go.",
          icon: Brain,
          color: "bg-teal-100",
          iconColor: "text-teal-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "Guided Relaxation",
          description: "Listen to a calming story that helps you relax your body.",
          icon: Music,
          color: "bg-indigo-100",
          iconColor: "text-indigo-500",
          link: "/mindfulness",
        },
        {
          title: "Friendship Stones",
          description: "Paint stones with positive messages to share with friends.",
          icon: Heart,
          color: "bg-rose-100",
          iconColor: "text-rose-500",
          link: "/emotional-wellbeing/activities",
        },
      ],
      excited: [
        {
          title: "STEM Challenge",
          description: "Try a fun science or math activity to channel your energy.",
          icon: Brain,
          color: "bg-cyan-100",
          iconColor: "text-cyan-500",
          link: "/stem-learning",
        },
        {
          title: "Movement Game",
          description: "Get moving with fun physical activities.",
          icon: Activity,
          color: "bg-orange-100",
          iconColor: "text-orange-500",
          link: "/physical-activity",
        },
        {
          title: "Creative Project",
          description: "Channel your excitement into making something amazing!",
          icon: Palette,
          color: "bg-violet-100",
          iconColor: "text-violet-500",
          link: "/emotional-wellbeing/activities",
        },
      ],
      bored: [
        {
          title: "Grimm Tales",
          description: "Discover classic fairy tales with exciting adventures.",
          icon: BookOpen,
          color: "bg-purple-100",
          iconColor: "text-purple-500",
          link: "/grimm-tales",
        },
        {
          title: "Art Project",
          description: "Get creative with fun art activities.",
          icon: Palette,
          color: "bg-pink-100",
          iconColor: "text-pink-500",
          link: "/emotional-wellbeing/activities",
        },
        {
          title: "Brain Teasers",
          description: "Challenge yourself with fun puzzles and games.",
          icon: Brain,
          color: "bg-emerald-100",
          iconColor: "text-emerald-500",
          link: "/stem-learning",
        },
      ],
    }

    return allActivities[mood as keyof typeof allActivities] || allActivities.happy
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007B5F]"></div>
      </div>
    )
  }

  // If no student data is available after loading, redirect to login
  if (!student) {
    router.push("/student-login")
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/palm-learning-logo.png" alt="Palm Learning Logo" width={40} height={40} />
            <h1 className="ml-3 text-xl font-bold text-gray-900">Student Dashboard</h1>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-sm text-gray-600">
              Hello,{" "}
              <span className="font-medium">
                {student.first_name} {student.last_name}
              </span>
              !
              {student.id === "demo-student" && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                  Demo Mode
                </span>
              )}
            </div>
            <button onClick={handleLogout} className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How are you feeling today?</h2>
              <MoodSelector onSelectMood={setSelectedMood} selectedMood={selectedMood} />
            </div>
          </div>
        </section>

        {selectedMood && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended for you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedActivities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/emotional-wellbeing/activities"
                className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
              >
                View all activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fables Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-amber-100">
                    <BookOpen className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Fables</h3>
                </div>
                <p className="text-gray-600 mb-4">Listen to stories with important life lessons.</p>
                <Link href="/fables" className="text-amber-600 font-medium hover:underline flex items-center">
                  Explore fables <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Emotional Wellbeing Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-100">
                    <Heart className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Emotional Wellbeing</h3>
                </div>
                <p className="text-gray-600 mb-4">Activities to help you understand and express your feelings.</p>
                <Link
                  href="/emotional-wellbeing"
                  className="text-purple-600 font-medium hover:underline flex items-center"
                >
                  Explore activities <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Physical Activity Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-green-100">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Physical Activity</h3>
                </div>
                <p className="text-gray-600 mb-4">Fun ways to move your body and stay healthy.</p>
                <Link
                  href="/physical-activity"
                  className="text-green-600 font-medium hover:underline flex items-center"
                >
                  Get moving <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Progress</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-blue-100">
                  <ThumbsUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">Keep it up!</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Fables Completed</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">2 of 8 fables</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Activities Tried</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">4 of 10 activities</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Check-ins Completed
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">3 this week</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
