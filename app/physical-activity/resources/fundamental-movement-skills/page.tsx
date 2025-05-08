import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, FileText, Video, ImageIcon } from "lucide-react"

export default function FundamentalMovementSkillsPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/physical-activity/resources"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Resources
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600&query=children%20learning%20fundamental%20movement%20skills%20cartoon"
                alt="Fundamental Movement Skills"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="text-xs font-medium text-[#F9A826] mb-2">Teaching Resources</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Fundamental Movement Skills Guide</h1>
              <p className="text-gray-600 mb-6">
                A comprehensive guide to teaching fundamental movement skills for ages 4-8. This resource provides
                structured lesson plans, assessment tools, and visual aids to help teachers develop children's physical
                literacy through fundamental movement skills.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Ages 4-8</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Curriculum-Aligned
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Assessment Tools
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center bg-[#007B5F] hover:bg-[#006B4F] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Guide (PDF)
                </a>
                <a
                  href="#"
                  className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg border border-gray-300 transition-colors"
                >
                  <Video className="h-4 w-4 mr-2" />
                  View Video Demonstrations
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 md:p-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Resource Contents</h2>
              <p className="text-gray-600 mb-6">
                This comprehensive guide includes everything you need to teach fundamental movement skills effectively
                in your primary school PE program.
              </p>

              <div className="space-y-6">
                <ResourceSection
                  title="Introduction to Fundamental Movement Skills"
                  description="Learn about the importance of fundamental movement skills and how they contribute to physical literacy and lifelong physical activity."
                  items={[
                    { icon: FileText, text: "Overview of Physical Literacy" },
                    { icon: FileText, text: "Developmental Stages" },
                    { icon: FileText, text: "Assessment Framework" },
                  ]}
                />

                <ResourceSection
                  title="Locomotor Skills"
                  description="Detailed lesson plans and activities for teaching running, jumping, hopping, skipping, and more."
                  items={[
                    { icon: FileText, text: "Running Lesson Plans" },
                    { icon: FileText, text: "Jumping Activities" },
                    { icon: Video, text: "Demonstration Videos" },
                    { icon: ImageIcon, text: "Visual Cue Cards" },
                  ]}
                />

                <ResourceSection
                  title="Stability Skills"
                  description="Resources for developing balance, landing, and body control through engaging activities."
                  items={[
                    { icon: FileText, text: "Balance Activities" },
                    { icon: FileText, text: "Landing Techniques" },
                    { icon: Video, text: "Demonstration Videos" },
                    { icon: ImageIcon, text: "Visual Cue Cards" },
                  ]}
                />

                <ResourceSection
                  title="Manipulative Skills"
                  description="Lesson plans for throwing, catching, kicking, striking, and other object control skills."
                  items={[
                    { icon: FileText, text: "Throwing and Catching" },
                    { icon: FileText, text: "Kicking and Striking" },
                    { icon: Video, text: "Demonstration Videos" },
                    { icon: ImageIcon, text: "Visual Cue Cards" },
                  ]}
                />

                <ResourceSection
                  title="Assessment Tools"
                  description="Practical tools to assess and track children's progress in developing fundamental movement skills."
                  items={[
                    { icon: FileText, text: "Assessment Checklists" },
                    { icon: FileText, text: "Progress Tracking Sheets" },
                    { icon: FileText, text: "Student Self-Assessment" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

interface ResourceSectionProps {
  title: string
  description: string
  items: {
    icon: React.ElementType
    text: string
  }[]
}

function ResourceSection({ title, description, items }: ResourceSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <li key={index} className="flex items-center">
              <Icon className="h-4 w-4 text-[#007B5F] mr-2" />
              <span className="text-gray-700">{item.text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
