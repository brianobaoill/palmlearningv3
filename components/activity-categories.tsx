"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Activity, MonitorIcon as Running } from "lucide-react"

interface CategoryProps {
  icon: React.ElementType
  title: string
  description: string
  href: string
  color: string
}

const categories: CategoryProps[] = [
  {
    icon: Running,
    title: "Plans and Schemes", // Your actual category name
    description: "Comprehensive physical education plans aligned with curriculum standards.", // Your actual description
    href: "/physical-activity/plans-and-schemes", // URL path for this category
    color: "bg-blue-100 text-blue-600",
  },
  // Add all your actual categories here
  {
    icon: Activity,
    title: "Webinars",
    description: "Recorded professional development sessions on physical education topics.",
    href: "/physical-activity/webinars",
    color: "bg-green-100 text-green-600",
  },
  // Continue with all your categories...
]

export default function ActivityCategories() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Activity Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} index={index} />
        ))}
      </div>
    </div>
  )
}

function CategoryCard({ icon: Icon, title, description, href, color, index }: CategoryProps & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={href} className="block h-full">
        <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
