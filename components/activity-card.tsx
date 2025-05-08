"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ActivityCardProps {
  activity: {
    title: string
    description: string
    icon: any
    color: string
    iconColor: string
    link: string
  }
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  const Icon = activity.icon

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-full ${activity.color}`}>
            <Icon className={`h-5 w-5 ${activity.iconColor}`} />
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{activity.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{activity.description}</p>
        <Link href={activity.link} className={`${activity.iconColor} font-medium hover:underline flex items-center`}>
          Start activity <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}
