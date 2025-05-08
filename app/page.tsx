import Header from "@/components/header"
import Hero from "@/components/hero"
import CheckInForm from "@/components/check-in-form"
import Footer from "@/components/footer"
import { BookOpen, Activity, Smile } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />
      <Hero />

      <div className="px-4 py-12 max-w-5xl mx-auto space-y-8">
        {/* STEM Learning Section */}
        <section
          id="stemlearning"
          className="p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 bg-white border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#e5f3ff]">
                  <BookOpen className="w-6 h-6 text-[#007B5F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">STEM Learning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Explore curriculum-aligned content, interactive tools, and project-based learning resources designed
                    to engage students in science, technology, engineering, and mathematics.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/stem-learning"
                  className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
                >
                  Explore STEM resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center z-0">
              <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                <img
                  src="/images/stem-monster.png"
                  alt="Friendly STEM Monster"
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Physical Activity Section */}
        <section
          id="physicalwellbeing"
          className="p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff] border border-blue-100"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Activity className="w-6 h-6 text-[#007B5F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">Physical Activity</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stay active and balanced with movement routines, challenges, and guidance based on locomotor
                    movement expertise. Regular physical activity improves learning outcomes and overall health.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/physical-activity"
                  className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
                >
                  Explore physical activity resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center z-0">
              <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/fitness-monster.png"
                    alt="Green Fitness Monster Character"
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Wellbeing Section */}
        <section
          id="emotionalwellbeing"
          className="p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 bg-white border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#e5f3ff]">
                  <Smile className="w-6 h-6 text-[#007B5F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">Emotional Wellbeing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Helping children understand and manage their emotions through engaging activities and stories.
                    Develop emotional intelligence through mindfulness practices and timeless fables.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/emotional-wellbeing"
                  className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
                >
                  Explore emotional wellbeing resources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center z-0">
              <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 text-[#FF6B6B]">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="currentColor"
                      />
                      <path d="M12 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M19 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grimm Tales Section */}
        <section
          id="grimmtales"
          className="p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 bg-white border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#e5f3ff]">
                  <BookOpen className="w-6 h-6 text-[#007B5F]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">Grimm Tales</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Classic fairy tales for older children (ages 9-13) with timeless lessons and morals.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/grimm-tales"
                  className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
                >
                  Explore Grimm Tales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center z-0">
              <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden">
                <img
                  src="/images/grimm-fairy-tales.jpeg"
                  alt="Grimm Fairy Tales illustration with various characters"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Check-In Section */}
        <section
          id="checkin"
          className="p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff] border border-blue-100"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">Daily Emotional Check-In</h3>
          <CheckInForm />
        </section>
      </div>

      <Footer />
    </main>
  )
}
