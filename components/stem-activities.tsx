"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function StemActivities() {
  const activities = [
    {
      title: "Build a Bridge Challenge",
      description: "Design and construct a bridge using everyday materials that can support weight.",
      category: "Engineering",
      ageRange: "8-12 years",
      duration: "45-60 minutes",
      materials: ["Popsicle sticks", "String", "Tape", "Paper", "Scissors"],
      link: "#",
    },
    {
      title: "Coding Unplugged: Human Robot",
      description: "Learn programming concepts without a computer through a fun movement activity.",
      category: "Technology",
      ageRange: "6-10 years",
      duration: "30 minutes",
      materials: ["Direction cards", "Masking tape", "Objects for obstacles"],
      link: "#",
    },
    {
      title: "Fraction Pizza Party",
      description: "Practice fractions by creating and dividing paper pizzas into equal parts.",
      category: "Mathematics",
      ageRange: "7-9 years",
      duration: "40 minutes",
      materials: ["Colored paper", "Scissors", "Markers", "Ruler"],
      link: "#",
    },
  ]

  return (
    <section id="activities" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hands-On STEM Activities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engage students with these interactive, project-based learning experiences that bring STEM concepts to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      activity.category === "Engineering"
                        ? "bg-green-100 text-green-700"
                        : activity.category === "Technology"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {activity.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    <span className="font-medium">Age:</span> {activity.ageRange}
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    <span className="font-medium">Time:</span> {activity.duration}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Materials Needed:</h4>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    {activity.materials.map((material, i) => (
                      <li key={i}>{material}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={activity.link}
                  className="text-[#0099CC] font-medium hover:text-[#007B5F] transition-colors"
                >
                  View Activity →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-[#f0f8ff] rounded-xl p-8 border border-blue-100">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <Image
              src="/images/PalmLearner1.png"
              alt="Friendly STEM Monster"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Activity Cards for the Classroom</h3>
            <p className="text-lg text-gray-600 mb-6">
              Download our printable STEM activity cards for quick and easy access to engaging learning experiences.
              Perfect for classroom stations, early finishers, or home learning.
            </p>
            <Link
              href="/stem-learning/activity-cards"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#0099CC] hover:bg-[#007B5F] transition-colors"
            >
              Get Activity Cards
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
