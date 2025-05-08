"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function StemHero() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#003366] to-[#0066cc] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              STEM Learning Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100 mb-6 max-w-lg"
            >
              Engaging, curriculum-aligned resources to inspire curiosity and develop critical thinking skills in
              science, technology, engineering, and mathematics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#categories"
                className="px-6 py-3 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Categories
              </Link>
              <Link
                href="#activities"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Activities
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
              <Image
                src="/images/PalmLearner1.png"
                alt="STEM Learning Illustration"
                width={400}
                height={400}
                className="relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
