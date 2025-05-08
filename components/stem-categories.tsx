"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function StemCategories() {
  const categories = [
    {
      title: "Science",
      description: "Explore the natural world through observation and experimentation",
      icon: "🔬",
      color: "bg-red-100 text-red-700 border-red-200",
      link: "#science",
    },
    {
      title: "Technology",
      description: "Discover digital tools and computational thinking",
      icon: "💻",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      link: "#technology",
    },
    {
      title: "Engineering",
      description: "Design, build, and test solutions to real-world problems",
      icon: "🔧",
      color: "bg-green-100 text-green-700 border-green-200",
      link: "#engineering",
    },
    {
      title: "Mathematics",
      description: "Develop number sense, patterns, and problem-solving skills",
      icon: "🔢",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      link: "#mathematics",
    },
  ]

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">STEM Learning Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive resources across all STEM disciplines, designed to engage young minds and develop
            critical 21st century skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.link}>
                <div
                  className={`h-full p-6 rounded-xl border-2 ${category.color} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-gray-50 rounded-xl p-8 border border-gray-200">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <Image
              src="/images/PalmLearner1.png"
              alt="Friendly STEM Monster"
              width={300}
              height={300}
              className="object-contain relative z-10"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Through Play</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our STEM resources are designed to make learning fun and engaging. Through hands-on activities, games, and
              interactive challenges, children develop critical thinking skills while enjoying the process of discovery.
            </p>
            <Link
              href="#resources"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0099CC] hover:bg-[#007B5F] transition-colors"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
