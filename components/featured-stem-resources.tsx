"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function FeaturedStemResources() {
  const resources = [
    {
      title: "Coding for Kids: Introduction to Scratch",
      description: "A beginner-friendly guide to block-based programming for children ages 7-11.",
      image: "/images/scratch-coding.jpg",
      category: "Technology",
      level: "Beginner",
      link: "#",
    },
    {
      title: "Simple Machines: Levers and Pulleys",
      description: "Hands-on activities to explore mechanical advantage and engineering principles.",
      image: "/images/simple-machines.jpg",
      category: "Engineering",
      level: "Intermediate",
      link: "#",
    },
    {
      title: "Math Games: Fractions and Decimals",
      description: "Fun games to reinforce understanding of fractions, decimals, and percentages.",
      image: "/images/math-games.jpg",
      category: "Mathematics",
      level: "Intermediate",
      link: "#",
    },
    {
      title: "Weather Science: Cloud Formation",
      description: "Experiments and activities to learn about weather patterns and cloud types.",
      image: "/images/weather-science.jpg",
      category: "Science",
      level: "Beginner",
      link: "#",
    },
  ]

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured STEM Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most popular teaching materials, lesson plans, and activities to engage students in meaningful
            STEM learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 relative">
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#0099CC]">{resource.category}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{resource.level}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Link
                  href={resource.link}
                  className="text-[#0099CC] font-medium hover:text-[#007B5F] transition-colors"
                >
                  View Resource →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-[#0099CC] text-base font-medium rounded-md text-[#0099CC] bg-white hover:bg-[#0099CC] hover:text-white transition-colors"
          >
            Browse All Resources
          </Link>
        </div>
      </div>
    </section>
  )
}
