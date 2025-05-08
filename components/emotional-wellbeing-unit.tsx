"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, FileText, CheckCircle, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export default function EmotionalWellbeingUnit() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)

    // Open the PDF in a new tab
    window.open("/api/generate-pdf", "_blank")

    // Reset downloading state after a short delay
    setTimeout(() => {
      setDownloading(false)
    }, 1500)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Unit Overview */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="relative h-48 w-full md:h-full md:w-48">
              <Image src="/placeholder.svg?key=5dl5z" alt="Emotional Wellbeing Unit" fill className="object-cover" />
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-[#007B5F] font-semibold">
              Comprehensive Learning Resource
            </div>
            <h1 className="mt-1 text-2xl font-bold text-gray-900 leading-tight">
              Emotional Wellbeing: Understanding Our Feelings
            </h1>
            <p className="mt-2 text-gray-600">
              A complete unit of work for children aged 6-13 to develop emotional intelligence, self-awareness, and
              healthy coping strategies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Ages 6-13
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                6 Lessons
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Worksheets Included
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                Activities & Games
              </span>
            </div>
            <div className="mt-6">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
              >
                {downloading ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Complete Unit (PDF)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Content Preview */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included in This Unit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0d0f5] text-[#7e57c2]">
                  <FileText className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Teacher's Guide</h3>
                <p className="mt-1 text-gray-600">
                  Comprehensive lesson plans, learning objectives, and teaching strategies.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0d0f5] text-[#7e57c2]">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Student Worksheets</h3>
                <p className="mt-1 text-gray-600">
                  Engaging activities, reflection prompts, and creative exercises for students.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0d0f5] text-[#7e57c2]">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Story Resources</h3>
                <p className="mt-1 text-gray-600">
                  Emotional wellbeing stories and discussion questions to explore feelings.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#e0d0f5] text-[#7e57c2]">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Extension Activities</h3>
                <p className="mt-1 text-gray-600">Additional projects, games, and activities to deepen learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Overview */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Lesson Overview</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 1: Understanding Our Emotions</h3>
              <p className="text-gray-600 mt-1">
                Introduction to basic emotions, how to recognise them, and why all feelings are important.
              </p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> Emotion Charades, Feelings Journal, Emotion Wheel
                Exploration
              </div>
            </div>

            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 2: Expressing Our Feelings</h3>
              <p className="text-gray-600 mt-1">
                Healthy ways to express different emotions and communicate our feelings to others.
              </p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> "I Feel" Statements Practice, Emotion Art Project,
                Role-Playing Scenarios
              </div>
            </div>

            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 3: Managing Strong Emotions</h3>
              <p className="text-gray-600 mt-1">
                Strategies for coping with intense feelings like anger, worry, and sadness.
              </p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> Calm Down Techniques, Worry Tree Craft, Breathing
                Exercises
              </div>
            </div>

            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 4: Empathy and Understanding Others</h3>
              <p className="text-gray-600 mt-1">Recognising others' feelings and developing compassion and empathy.</p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> Perspective-Taking Stories, Kindness Tree Project,
                Empathy Scenarios
              </div>
            </div>

            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 5: Building Emotional Resilience</h3>
              <p className="text-gray-600 mt-1">
                Developing skills to bounce back from difficult situations and manage challenges.
              </p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> Growth Mindset Exercises, Resilience Stories,
                Problem-Solving Practice
              </div>
            </div>

            <div className="border-l-4 border-[#007B5F] pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900">Lesson 6: Celebrating Our Emotional Growth</h3>
              <p className="text-gray-600 mt-1">
                Reflecting on learning, setting emotional wellbeing goals, and celebrating progress.
              </p>
              <div className="mt-2 text-sm text-[#007B5F]">
                <span className="font-medium">Key Activities:</span> Feelings Time Capsule, Emotional Wellbeing Pledge,
                Celebration Circle
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Worksheet Preview */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sample Worksheet Preview</h2>
          <div className="relative h-96 w-full border rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?key=pbm8j" alt="Sample Worksheet" fill className="object-contain" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-white rounded-md text-gray-900 font-medium hover:bg-gray-100 transition-colors"
              >
                Download Full Unit to View All Worksheets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/emotional-wellbeing/activities" className="group">
              <div className="border rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?key=m6m3s"
                    alt="Emotional Wellbeing Activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#007B5F] transition-colors">
                    Emotional Wellbeing Activities
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Hands-on activities to support emotional development.</p>
                </div>
              </div>
            </Link>

            <Link href="/emotional-wellbeing/stories" className="group">
              <div className="border rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=ay7po" alt="Emotional Stories" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#007B5F] transition-colors">
                    Emotional Stories
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Stories that help children understand different emotions.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/emotional-wellbeing/emotion-recognition/emotion-wheel" className="group">
              <div className="border rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=2iohm" alt="Emotion Wheel" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#007B5F] transition-colors">
                    Emotion Wheel
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Interactive tool to explore different emotions and feelings.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
