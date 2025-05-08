"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#e5f3ff] to-[#f2f9ff] py-20 px-4 overflow-hidden">
      {/* Animated wave background */}
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#7cc6fe"
              fillOpacity="0.2"
              d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,101.3C672,85,768,139,864,160C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        <div className="text-left md:w-1/2">
          <div className="mb-6 md:hidden flex justify-center">
            <Image
              src="/images/palm-learning-logo.png"
              alt="Palm Learning Logo"
              width={180}
              height={180}
              className="object-contain z-0"
            />
          </div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#007B5F]">Empowering Minds</span> Through STEM
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Physical Activity and Locomotor Movement, and Emotional Wellbeing
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-[#007B5F] hover:bg-[#006B4F] text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-50 text-[#0099CC] font-semibold py-3 px-6 rounded-lg border border-[#0099CC] transition-all shadow-sm hover:shadow-md">
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Logo display for larger screens */}
            <div className="hidden md:block mb-6">
              <Image
                src="/images/palm-learning-logo.png"
                alt="Palm Learning Logo"
                width={250}
                height={250}
                className="object-contain z-0"
              />
            </div>

            {/* Decorative elements instead of character illustrations */}
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Colorful abstract shapes */}
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#0099CC] opacity-20 animate-pulse"></div>
                  <div
                    className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-[#F9A826] opacity-20 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-[#007B5F] opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Main illustration - restoring the original PalmLearner character */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="relative">
                      <div className="absolute -inset-8 bg-white/30 rounded-full blur-xl"></div>
                      <Image
                        src="/images/PalmLearner1.png"
                        alt="Friendly STEM Monster"
                        width={300}
                        height={300}
                        className="object-contain relative z-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
