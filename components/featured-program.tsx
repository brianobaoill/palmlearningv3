"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function FeaturedProgram() {
  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <Image
              src="/pe-class-cartoon.png"
              alt="Featured Program"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="bg-[#F9A826] text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              Featured Program
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Move Well, Move Often</h2>
            <p className="text-gray-600 mb-6">
              A comprehensive physical literacy resource designed to support teachers in primary schools with the
              planning and implementation of the PE curriculum, with a focus on developing fundamental movement skills.
            </p>

            <div className="space-y-3 mb-6">
              <BenefitItem text="Complete lesson plans for all class levels" />
              <BenefitItem text="Assessment tools and tracking resources" />
              <BenefitItem text="Video demonstrations of activities" />
              <BenefitItem text="Differentiation strategies for inclusive PE" />
            </div>

            <Link
              href="/physical-activity/move-well-move-often"
              className="inline-block bg-[#007B5F] hover:bg-[#006B4F] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Explore Program
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <CheckCircle className="h-5 w-5 text-[#007B5F] mr-2 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{text}</span>
    </div>
  )
}
