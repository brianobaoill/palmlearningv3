"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Smile, BookOpen, Palette, Brain, Heart, Activity } from "lucide-react"

export default function EmotionalWellbeingPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotional Wellbeing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helping children understand and manage their emotions through engaging activities and stories.
            </p>
          </div>

          {/* Main Categories - Clear Top-Level Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Emotion Recognition Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-blue-500">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=m7x96" alt="Emotion Recognition" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Smile className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    <Link href="/emotional-wellbeing/emotion-recognition" className="hover:underline">
                      Emotion Recognition
                    </Link>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Help children identify and understand different emotions through interactive activities.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <Link href="/emotional-wellbeing/emotion-recognition/matching-game" className="hover:underline">
                      Emotion Matching Games
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <Link
                      href="/emotional-wellbeing/emotion-recognition/emotion-wheel"
                      className="text-blue-600 hover:underline"
                    >
                      Emotion Wheel
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <Link href="/emotional-wellbeing/emotion-recognition/charades" className="hover:underline">
                      Emotion Charades
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/emotional-wellbeing/emotion-recognition"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Explore activities <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Mindfulness Activities Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-purple-500">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=0j7uw" alt="Mindfulness Activities" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-purple-100">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                    <Link href="/mindfulness" className="hover:underline">
                      Mindfulness Activities
                    </Link>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Simple mindfulness exercises designed specifically for young children to help them stay present and
                  calm.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <Link href="/mindfulness/breathing" className="hover:underline">
                      Breathing Exercises
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <Link href="/mindfulness/visualization" className="hover:underline">
                      Guided Visualizations
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <Link href="/mindfulness/sensory" className="hover:underline">
                      Sensory Activities
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/mindfulness"
                  className="inline-flex items-center text-purple-600 font-medium hover:underline"
                >
                  Explore activities <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Creative Expression Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full border-t-4 border-green-500">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=j6yja" alt="Creative Expression" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-green-100">
                    <Palette className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
                    <Link href="/emotional-wellbeing/activities" className="hover:underline">
                      Creative Expression
                    </Link>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Arts, crafts, and activities that help children express and process their emotions creatively.
                </p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <Link href="/emotional-wellbeing/activities#arts" className="hover:underline">
                      Arts & Crafts
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <Link href="/emotional-wellbeing/activities#brain-breaks" className="hover:underline">
                      Brain Breaks
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <Link href="/emotional-wellbeing/activities#mood" className="hover:underline">
                      Mood-Based Activities
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/emotional-wellbeing/activities"
                  className="inline-flex items-center text-green-600 font-medium hover:underline"
                >
                  Explore activities <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Tools Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Tools</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Emotion Wheel Feature */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-blue-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="ml-3 text-2xl font-bold text-gray-900">Emotion Wheel</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    An interactive tool that helps children explore different emotions, understand their nuances, and
                    expand their emotional vocabulary.
                  </p>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?key=asiyb" alt="Emotion Wheel" fill className="object-cover" />
                  </div>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/emotion-wheel"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Explore the Emotion Wheel <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Daily Check-ins Feature */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-teal-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-teal-100">
                      <Heart className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="ml-3 text-2xl font-bold text-gray-900">Daily Check-ins</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Regular emotional check-ins help children identify and express their feelings in a safe environment.
                  </p>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?key=3pd0d" alt="Daily Check-ins" fill className="object-cover" />
                  </div>
                  <Link
                    href="/#checkin"
                    className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Try a Check-in <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stories Section - Clear Separation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Stories for Emotional Learning</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Stories help children understand and process different emotions in a safe and engaging way
            </p>

            {/* Tabs for different story collections */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 justify-center">
                  <button
                    className="border-[#007B5F] text-[#007B5F] whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    onClick={() => document.getElementById("aesops-fables")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Aesop's Fables
                  </button>
                  <button
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    onClick={() => document.getElementById("grimm-tales")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Grimm Fairy Tales
                  </button>
                  <button
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    onClick={() => document.getElementById("emotional-stories")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Emotional Stories
                  </button>
                </nav>
              </div>
            </div>

            {/* Aesop's Fables Section */}
            <div id="aesops-fables" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-amber-100 mr-3">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Aesop's Fables</h3>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Timeless Moral Lessons</h3>
                    <p className="text-gray-600 mb-6">
                      Our collection of Aesop's Fables helps children learn important life lessons through engaging
                      stories. Each fable comes with discussion questions and activities to reinforce emotional
                      learning.
                    </p>
                    <div className="space-y-2">
                      <Link href="/fables/lion-and-mouse" className="block text-[#007B5F] font-medium hover:underline">
                        The Lion and the Mouse
                      </Link>
                      <Link
                        href="/fables"
                        className="inline-flex items-center text-[#007B5F] font-medium hover:underline"
                      >
                        Browse all fables <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Lion%20and%20the%20mouse.jpg-64bl35EeVp1L4cnhuCvQcCoi30NyEy.jpeg"
                      alt="The Lion and the Mouse - A lion caught in a trap being helped by a small mouse"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grimm Fairy Tales Section */}
            <div id="grimm-tales" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-indigo-100 mr-3">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Grimm Fairy Tales</h3>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Classic Stories for Older Children</h3>
                    <p className="text-gray-600 mb-6">
                      Classic fairy tales from the Brothers Grimm that help older children explore complex emotions and
                      moral lessons through engaging stories.
                    </p>
                    <div className="space-y-2">
                      <Link
                        href="/grimm-tales/hansel-and-gretel"
                        className="block text-indigo-600 font-medium hover:underline"
                      >
                        Hansel and Gretel
                      </Link>
                      <Link
                        href="/grimm-tales"
                        className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                      >
                        Browse all Grimm tales <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[300px]">
                    <Image
                      src="/placeholder.svg?key=9bjc5"
                      alt="Hansel and Gretel fairy tale"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Stories Section */}
            <div id="emotional-stories" className="mb-12">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-full bg-rose-100 mr-3">
                  <BookOpen className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Emotional Stories</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?key=b491v" alt="When I Feel Sad" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-rose-600 transition-colors">
                      <Link href="/emotional-wellbeing/stories/sad" className="hover:underline">
                        When I Feel Sad
                      </Link>
                    </h4>
                    <p className="text-gray-600">A story about recognizing and coping with feelings of sadness.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?key=vpy2e" alt="Managing Anger" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-rose-600 transition-colors">
                      <Link href="/emotional-wellbeing/stories/angry" className="hover:underline">
                        Managing Anger
                      </Link>
                    </h4>
                    <p className="text-gray-600">
                      A story about understanding anger and learning healthy ways to express it.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-48">
                    <Image src="/placeholder.svg?key=jl2ph" alt="Calming Worries" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-rose-600 transition-colors">
                      <Link href="/emotional-wellbeing/stories/anxiety" className="hover:underline">
                        Calming Worries
                      </Link>
                    </h4>
                    <p className="text-gray-600">A story about recognizing and managing feelings of anxiety.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/emotional-wellbeing/stories"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Explore All Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Teacher Resources */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Teachers & Parents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Unit of Work</h3>
                <p className="text-gray-600 mb-4">
                  Complete teaching resources with lesson plans and worksheets for emotional wellbeing education.
                </p>
                <Link
                  href="/emotional-wellbeing/unit-of-work"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  View resources <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Printable Materials</h3>
                <p className="text-gray-600 mb-4">
                  Downloadable worksheets, emotion cards, and activities for classroom or home use.
                </p>
                <Link
                  href="/emotional-wellbeing/emotion-recognition/printables/emotion-cards"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  View printables <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
