import Header from "@/components/header"
import Footer from "@/components/footer"
import { createServerClient } from "@/lib/supabase-server"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Heart, BookOpen, Download } from "lucide-react"
import { notFound } from "next/navigation"

export default async function GrimmTalePage({ params }: { params: { slug: string } }) {
  const supabase = createServerClient()

  // Fetch the specific tale
  const { data: tale } = await supabase.from("grimm_tales").select("*").eq("slug", params.slug).single()

  if (!tale) {
    notFound()
  }

  // Format duration from seconds to minutes
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    return `${minutes} min${minutes !== 1 ? "s" : ""}`
  }

  // Generate discussion questions based on the tale's themes
  const generateDiscussionQuestions = (tale: any) => {
    const questions = [
      `How did ${tale.title} make you feel? Why do you think you felt that way?`,
      `What was the most important lesson in this story?`,
      `Which character did you relate to the most and why?`,
      `How did the characters show ${tale.emotional_focus.toLowerCase()}?`,
      `What would you have done differently if you were in the main character's situation?`,
    ]

    // Add theme-specific questions
    if (tale.themes && tale.themes.includes("resilience")) {
      questions.push("How did the characters show strength when facing difficult situations?")
    }
    if (tale.themes && tale.themes.includes("cooperation")) {
      questions.push("How did working together help the characters solve their problems?")
    }
    if (tale.themes && tale.themes.includes("honesty")) {
      questions.push("Why is telling the truth important in this story?")
    }
    if (tale.themes && tale.themes.includes("kindness")) {
      questions.push("What acts of kindness did you notice in the story?")
    }

    return questions
  }

  const discussionQuestions = generateDiscussionQuestions(tale)

  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/grimm-tales"
              className="inline-flex items-center text-[#007B5F] hover:text-[#006B4F] font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Grimm Tales
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="relative h-64 sm:h-80">
              <Image
                src={tale.image_url || "/placeholder.svg?height=600&width=1200&query=fairy tale illustration"}
                alt={tale.title}
                fill
                className="object-cover"
              />
              {tale.age_range && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Ages {tale.age_range}
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{tale.title}</h1>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{formatDuration(tale.duration)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {tale.themes &&
                  tale.themes.map((theme: string) => (
                    <span
                      key={theme}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {theme}
                    </span>
                  ))}
                {tale.emotional_focus && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tale.emotional_focus}
                  </span>
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">The Story</h2>
                <div className="prose max-w-none">
                  {tale.content.split("\n").map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <div className="flex items-center mb-3">
                  <Heart className="h-5 w-5 text-amber-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Emotional Lesson</h2>
                </div>
                <p className="text-gray-700">{tale.moral}</p>
              </div>

              {tale.audio_url && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Listen to the Story</h2>
                  <audio controls className="w-full">
                    <source src={tale.audio_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Discussion Questions</h2>
                <ul className="space-y-3">
                  {discussionQuestions.map((question, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{question}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href={`/grimm-tales/activities/${tale.slug}`}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Learning Activities</h3>
                      <p className="text-sm text-gray-500">Worksheets and activities based on this tale</p>
                    </div>
                  </Link>
                  <Link
                    href={`/grimm-tales/printable/${tale.slug}`}
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <Download className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Printable Version</h3>
                      <p className="text-sm text-gray-500">Download a printable PDF of this tale</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
