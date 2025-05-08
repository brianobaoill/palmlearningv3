import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Info } from "lucide-react"

export default function EmotionRecognitionPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotion Recognition</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help children identify, understand, and respond to different emotions through engaging activities.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?key=cyahh"
              alt="Children expressing different emotions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Understanding Emotions</h2>
                <p className="text-lg max-w-2xl">
                  Emotional intelligence begins with recognizing feelings in ourselves and others.
                </p>
              </div>
            </div>
          </div>

          {/* Why Emotion Recognition Matters */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-blue-100 shrink-0">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Emotion Recognition Matters</h2>
                <p className="text-gray-600">
                  Children who can identify and understand emotions are better equipped to:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Build Relationships</h3>
                <p className="text-gray-700">
                  Understanding others' feelings helps children form stronger friendships and social connections.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-green-800">Manage Emotions</h3>
                <p className="text-gray-700">
                  Recognizing emotions is the first step to developing healthy coping strategies.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Develop Empathy</h3>
                <p className="text-gray-700">
                  Identifying emotions in others helps children understand different perspectives and show compassion.
                </p>
              </div>
            </div>
          </div>

          {/* Activities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Emotion Recognition Activities</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Activity 1: Emotion Matching Game */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?key=utbs0" alt="Emotion Matching Game" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Matching Game</h3>
                  <p className="text-gray-600 mb-4">
                    A fun card game that helps children match facial expressions with emotion words. Great for visual
                    recognition and vocabulary building.
                  </p>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/matching-game"
                    className="text-[#007B5F] font-medium hover:underline flex items-center"
                  >
                    Play activity <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Activity 2: Emotion Charades */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?key=fln0m" alt="Emotion Charades" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Charades</h3>
                  <p className="text-gray-600 mb-4">
                    An interactive activity where children act out different emotions for others to guess. Excellent for
                    body language awareness.
                  </p>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/charades"
                    className="text-[#007B5F] font-medium hover:underline flex items-center"
                  >
                    Play activity <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Activity 3: Emotion Scenarios */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?key=rzt16" alt="Emotion Scenarios" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Scenarios</h3>
                  <p className="text-gray-600 mb-4">
                    Short stories that prompt children to identify how characters might feel in different situations.
                    Great for developing empathy.
                  </p>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/scenarios"
                    className="text-[#007B5F] font-medium hover:underline flex items-center"
                  >
                    Explore scenarios <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Activity 4: Emotion Wheel */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?key=d4ao2" alt="Emotion Wheel" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Wheel</h3>
                  <p className="text-gray-600 mb-4">
                    An interactive tool that helps children explore the nuances between different emotions and expand
                    their emotional vocabulary.
                  </p>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/emotion-wheel"
                    className="text-[#007B5F] font-medium hover:underline flex items-center"
                  >
                    Explore wheel <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Printable Resources */}
          <div className="bg-gradient-to-r from-[#e5f3ff] to-[#f0f8ff] rounded-xl p-8 mb-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Printable Emotion Resources</h2>
                <p className="text-gray-700 mb-4">
                  Download and print these resources to use in your classroom or at home. Perfect for emotion
                  recognition activities and discussions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/printables/emotion-cards"
                    className="inline-flex items-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-[#007B5F] hover:bg-gray-50"
                  >
                    Emotion Cards
                  </Link>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/printables/feeling-faces"
                    className="inline-flex items-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-[#007B5F] hover:bg-gray-50"
                  >
                    Feeling Faces
                  </Link>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/printables/emotion-journal"
                    className="inline-flex items-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-[#007B5F] hover:bg-gray-50"
                  >
                    Emotion Journal
                  </Link>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition/printables/scenario-cards"
                    className="inline-flex items-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-[#007B5F] hover:bg-gray-50"
                  >
                    Scenario Cards
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=200&width=300&query=printable emotion worksheets for children, colorful"
                  alt="Printable emotion resources"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Teacher Resources */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Teachers & Parents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Classroom Implementation Guide</h3>
                <p className="text-gray-600 mb-4">
                  Tips and strategies for incorporating emotion recognition activities into your daily classroom
                  routine.
                </p>
                <Link
                  href="/emotional-wellbeing/emotion-recognition/teacher-guide"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  View guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Discussion Prompts</h3>
                <p className="text-gray-600 mb-4">
                  Thoughtful questions to spark meaningful conversations about emotions with children.
                </p>
                <Link
                  href="/emotional-wellbeing/emotion-recognition/discussion-prompts"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  View prompts <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Resources */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/emotional-wellbeing/stories" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=children reading emotional stories, illustration"
                      alt="Emotional Stories"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Emotional Stories
                    </h3>
                    <p className="text-gray-600">
                      Stories that help children understand and process different emotions.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/mindfulness" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=children practicing mindfulness, illustration"
                      alt="Mindfulness Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Mindfulness Activities
                    </h3>
                    <p className="text-gray-600">Exercises to help children stay present and manage their emotions.</p>
                  </div>
                </div>
              </Link>

              <Link href="/#checkin" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=children doing emotional check-in, illustration"
                      alt="Daily Check-ins"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Daily Check-ins
                    </h3>
                    <p className="text-gray-600">
                      Regular check-ins to help children identify and express their feelings.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
