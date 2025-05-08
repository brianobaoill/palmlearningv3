"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Pause, Play, RefreshCw, TreesIcon as Lungs, Heart, CloudRain, Sparkles, Leaf } from "lucide-react"
import Image from "next/image"

// Define the activity type
interface MindfulnessActivity {
  id: string
  title: string
  description: string
  instructions: string[]
  duration: number // in seconds
  ageRange: string
  icon: React.ElementType
  color: string
  imageUrl?: string
}

// Create a list of mindfulness activities
const activities: MindfulnessActivity[] = [
  {
    id: "breathing",
    title: "Balloon Breathing",
    description: "A simple breathing exercise to help children calm down and focus.",
    instructions: [
      "Sit comfortably with your back straight.",
      "Place your hands on your belly.",
      "Breathe in slowly through your nose for 4 counts, feeling your belly expand like a balloon.",
      "Hold your breath for 1 count.",
      "Breathe out slowly through your mouth for 4 counts, feeling your belly deflate.",
      "Repeat 5 times or until you feel calm.",
    ],
    duration: 60,
    ageRange: "4-12",
    icon: Lungs,
    color: "bg-blue-100 text-blue-600",
    imageUrl: "/placeholder.svg?key=9d78r",
  },
  {
    id: "body-scan",
    title: "Friendly Body Scan",
    description: "Help children become aware of sensations in their body.",
    instructions: [
      "Lie down or sit comfortably and close your eyes.",
      "Imagine a friendly butterfly landing on different parts of your body.",
      "Start at your toes and slowly move up to your head.",
      "Notice how each part of your body feels when the butterfly lands there.",
      "Take a deep breath when the butterfly moves to a new spot.",
      "When you reach your head, imagine the butterfly flying away, taking any worries with it.",
    ],
    duration: 180,
    ageRange: "5-12",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600",
    imageUrl: "/placeholder.svg?key=1xv2g",
  },
  {
    id: "gratitude",
    title: "Gratitude Garden",
    description: "Practice gratitude by visualizing a garden of things you're thankful for.",
    instructions: [
      "Close your eyes and imagine a beautiful garden.",
      "For each thing you're grateful for, imagine planting a flower or tree in your garden.",
      "Think about why you're thankful for each thing as you plant it.",
      "Take a moment to look at your whole garden filled with gratitude.",
      "Remember you can visit your garden anytime you want to feel happy.",
    ],
    duration: 120,
    ageRange: "6-12",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
    imageUrl: "/placeholder.svg?key=5ns0j",
  },
  {
    id: "heartbeat",
    title: "Heartbeat Listening",
    description: "Connect with your heartbeat to ground yourself in the present moment.",
    instructions: [
      "Jump up and down or do jumping jacks for 30 seconds.",
      "Sit down and place your hand over your heart.",
      "Close your eyes and feel your heartbeat.",
      "Notice how fast or slow it's beating.",
      "Take slow, deep breaths and feel your heartbeat slow down.",
      "Notice how your body feels as it calms down.",
    ],
    duration: 90,
    ageRange: "5-12",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    imageUrl: "/placeholder.svg?key=p8lrg",
  },
  {
    id: "weather",
    title: "Weather Report",
    description: "Help children identify and express their emotions by comparing them to weather.",
    instructions: [
      "Close your eyes and think about how you're feeling right now.",
      "If your feelings were weather, what would they be? Sunny? Rainy? Stormy?",
      "Notice if there are any sensations in your body that match this weather.",
      "Remember that just like weather, feelings change throughout the day.",
      "Take a deep breath and know that you can handle any weather that comes your way.",
    ],
    duration: 120,
    ageRange: "6-12",
    icon: CloudRain,
    color: "bg-cyan-100 text-cyan-600",
    imageUrl: "/placeholder.svg?key=rtc3f",
  },
]

export default function MindfulnessActivities() {
  const [selectedActivity, setSelectedActivity] = useState<MindfulnessActivity | null>(null)
  const [timerActive, setTimerActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)

  // Function to start the timer
  const startTimer = () => {
    if (!selectedActivity) return

    setTimeRemaining(selectedActivity.duration)
    setTimerActive(true)

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setTimerActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Cleanup function
    return () => clearInterval(timer)
  }

  // Function to pause the timer
  const pauseTimer = () => {
    setTimerActive(false)
  }

  // Function to reset the timer
  const resetTimer = () => {
    if (!selectedActivity) return
    setTimeRemaining(selectedActivity.duration)
    setTimerActive(false)
  }

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Activities</h2>
            <div className="space-y-3">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => {
                    setSelectedActivity(activity)
                    setTimeRemaining(activity.duration)
                    setTimerActive(false)
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedActivity?.id === activity.id ? `${activity.color} font-medium` : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <activity.icon className="h-5 w-5 mr-2" />
                    <span>{activity.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        {selectedActivity ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg ${selectedActivity.color}`}>
                  <selectedActivity.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{selectedActivity.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{selectedActivity.description}</p>

              {selectedActivity.imageUrl && (
                <div className="mb-6 flex justify-center">
                  <Image
                    src={selectedActivity.imageUrl || "/placeholder.svg"}
                    alt={selectedActivity.title}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Instructions</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  {selectedActivity.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Recommended time: {formatTime(selectedActivity.duration)}</span>
                  </div>
                  <div className="text-sm text-gray-500">Ages {selectedActivity.ageRange}</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold mb-4">{formatTime(timeRemaining)}</div>

                  <div className="flex space-x-4">
                    {!timerActive ? (
                      <button
                        onClick={startTimer}
                        className="flex items-center justify-center p-3 bg-[#007B5F] text-white rounded-full hover:bg-[#006B4F] transition-colors"
                      >
                        <Play className="h-6 w-6" />
                      </button>
                    ) : (
                      <button
                        onClick={pauseTimer}
                        className="flex items-center justify-center p-3 bg-[#007B5F] text-white rounded-full hover:bg-[#006B4F] transition-colors"
                      >
                        <Pause className="h-6 w-6" />
                      </button>
                    )}

                    <button
                      onClick={resetTimer}
                      className="flex items-center justify-center p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <RefreshCw className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Select an Activity</h3>
            <p className="text-gray-600">Choose a mindfulness activity from the list to get started.</p>
          </div>
        )}
      </div>
    </div>
  )
}
