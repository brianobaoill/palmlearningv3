"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function EmotionJournalPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotion Journal</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A printable journal to help children track and understand their emotions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
            <div className="prose max-w-none mb-8">
              <h2>About the Emotion Journal</h2>
              <p>
                This printable emotion journal helps children record and reflect on their feelings throughout the day.
                Regular journaling can help children:
              </p>
              <ul>
                <li>Recognize patterns in their emotions</li>
                <li>Develop a richer emotional vocabulary</li>
                <li>Practice self-reflection</li>
                <li>Build emotional awareness</li>
                <li>Learn healthy coping strategies</li>
              </ul>

              <h2>How to Use the Journal</h2>
              <p>
                Print out multiple copies of the journal pages for a week or month of tracking. Encourage children to:
              </p>
              <ol>
                <li>Fill in the date at the top of each page</li>
                <li>Circle or color in the emotions they felt during different parts of the day</li>
                <li>Draw a picture or write about what happened to cause those feelings</li>
                <li>Note what they did to handle their feelings</li>
                <li>Reflect on what they learned about their emotions</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Teachers</h3>
                <p className="text-gray-700 mb-4">
                  Set aside 5-10 minutes at the end of each day for students to fill in their emotion journals. This can
                  be a calming end-of-day ritual that helps students process their experiences.
                </p>
                <p className="text-gray-700">
                  Consider having occasional sharing circles where students can voluntarily share insights from their
                  journals.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Parents</h3>
                <p className="text-gray-700 mb-4">
                  Make emotion journaling part of your child's bedtime routine. This can be a special time to connect
                  and talk about the day's experiences.
                </p>
                <p className="text-gray-700">
                  Ask open-ended questions about their journal entries, but respect their privacy if they prefer not to
                  share certain entries.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download Printable Journal Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col items-center">
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400&query=emotion journal template for children"
                      alt="Daily Emotion Journal Template"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Daily Emotion Journal</h4>
                  <p className="text-gray-700 text-center mb-4">
                    Track emotions throughout a single day with space for morning, afternoon, and evening.
                  </p>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#007B5F] text-white rounded-md hover:bg-[#006A50] transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      alert("In a real application, this would download a PDF file.")
                    }}
                  >
                    Download PDF
                  </a>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col items-center">
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=400&query=weekly emotion tracking journal for children"
                      alt="Weekly Emotion Journal Template"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Weekly Emotion Journal</h4>
                  <p className="text-gray-700 text-center mb-4">
                    Track emotions across a full week with space for daily reflections and patterns.
                  </p>
                  <a
                    href="#"
                    className="px-4 py-2 bg-[#007B5F] text-white rounded-md hover:bg-[#006A50] transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      alert("In a real application, this would download a PDF file.")
                    }}
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/emotional-wellbeing/emotion-recognition"
                className="px-6 py-3 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Back to Emotion Recognition Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
