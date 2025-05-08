"use client"

import { motion } from "framer-motion"
import { Smile, Frown, Meh, Zap, Clock, AlertCircle } from "lucide-react"

interface MoodSelectorProps {
  onSelectMood: (mood: string) => void
  selectedMood: string | null
}

const moods = [
  {
    id: "happy",
    emoji: "😊",
    label: "Happy",
    icon: Smile,
    color: "bg-green-100",
    borderColor: "border-green-300",
    iconColor: "text-green-500",
  },
  {
    id: "sad",
    emoji: "😢",
    label: "Sad",
    icon: Frown,
    color: "bg-blue-100",
    borderColor: "border-blue-300",
    iconColor: "text-blue-500",
  },
  {
    id: "angry",
    emoji: "😠",
    label: "Angry",
    icon: AlertCircle,
    color: "bg-red-100",
    borderColor: "border-red-300",
    iconColor: "text-red-500",
  },
  {
    id: "worried",
    emoji: "😟",
    label: "Worried",
    icon: Meh,
    color: "bg-yellow-100",
    borderColor: "border-yellow-300",
    iconColor: "text-yellow-500",
  },
  {
    id: "excited",
    emoji: "🤩",
    label: "Excited",
    icon: Zap,
    color: "bg-purple-100",
    borderColor: "border-purple-300",
    iconColor: "text-purple-500",
  },
  {
    id: "bored",
    emoji: "😴",
    label: "Bored",
    icon: Clock,
    color: "bg-gray-100",
    borderColor: "border-gray-300",
    iconColor: "text-gray-500",
  },
]

export default function MoodSelector({ onSelectMood, selectedMood }: MoodSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      {moods.map((mood) => {
        const isSelected = selectedMood === mood.id
        const Icon = mood.icon

        return (
          <motion.button
            key={mood.id}
            onClick={() => onSelectMood(mood.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${
              mood.color
            } ${
              isSelected
                ? `ring-2 ring-offset-2 ring-[#007B5F] ${mood.borderColor}`
                : "border-transparent hover:border-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${mood.color}`}>
              <Icon className={`h-6 w-6 ${mood.iconColor}`} />
            </div>
            <span className="text-2xl mb-1">{mood.emoji}</span>
            <span className="text-sm font-medium text-gray-700">{mood.label}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
