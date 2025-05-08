"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PhysicalActivityHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#e5f3ff] to-[#f2f9ff] py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#a2d9ff"
              fillOpacity="0.3"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        <div className="text-left md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <div className="bg-[#F9A826] text-white px-3 py-1 rounded-full text-sm font-medium">PALM Ireland</div>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F9A826]">Physical Activity</span> and Locomotor Movement
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering educators with resources, training, and support to develop physically literate children through
            quality physical education and activity programs.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/physical-activity/resources"
              className="bg-[#F9A826] hover:bg-[#e89718] text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Explore Resources
            </Link>
            <Link
              href="/physical-activity/about"
              className="bg-white hover:bg-gray-50 text-[#F9A826] font-semibold py-3 px-6 rounded-lg border border-[#F9A826] transition-all shadow-sm hover:shadow-md"
            >
              About PALM Ireland
            </Link>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[400px] w-full">
              <img
                src="/images/fitness-monster.png"
                alt="Green Fitness Monster Character"
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
