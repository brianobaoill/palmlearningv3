import Header from "@/components/header"
import Footer from "@/components/footer"
import MindfulnessActivities from "@/components/mindfulness-activities"
import TeacherGuide from "@/components/teacher-guide"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MindfulnessPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/#emotionalwellbeing"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Emotional Wellbeing
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mindfulness Activities</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl">
          These simple mindfulness exercises are designed specifically for young children to help them stay present,
          manage their emotions, and develop a sense of calm and focus.
        </p>

        <TeacherGuide
          title="Teacher's Guide to Mindfulness Activities"
          description="Incorporate these mindfulness activities into your classroom routine to help students develop emotional regulation skills."
          tips={[
            "Start with short sessions (1-3 minutes) and gradually increase the time as children build their mindfulness muscles.",
            "Create a calm environment by dimming lights, playing soft music, or using a special 'mindfulness corner'.",
            "Model the activities yourself and participate alongside the children.",
            "Use child-friendly language and metaphors to explain concepts.",
            "Make it a regular practice - consistency is key for developing mindfulness skills.",
            "Be patient and supportive - mindfulness is a skill that takes time to develop.",
            "Acknowledge and validate children's experiences during the activities.",
          ]}
          className="mb-8"
        />

        <MindfulnessActivities />
      </div>

      <Footer />
    </main>
  )
}
