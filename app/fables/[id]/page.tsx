import { createServerClient } from "@/lib/supabase-server"
import { notFound } from "next/navigation"
import FablePlayer from "@/components/fable-player"
import Link from "next/link"
import { ArrowLeft, BookOpen, Heart } from "lucide-react"

export default async function FablePage({ params }: { params: { id: string } }) {
  const supabase = createServerClient()

  const { data: fable, error } = await supabase.from("fables").select("*").eq("id", params.id).single()

  if (error || !fable) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/fables" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Fables
        </Link>
      </div>

      <FablePlayer
        title={fable.title}
        audioUrl={fable.audio_url || ""}
        imageUrl={fable.image_url}
        duration={fable.duration || 180} // Add fallback duration if not provided
        onComplete={() => console.log("Fable completed")}
      />

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">About this Fable</h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="prose max-w-none">
            <p>{fable.description}</p>

            <div className="mt-6 flex items-start">
              <div className="flex-shrink-0">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Moral of the Story</h4>
                <p className="mt-1 text-gray-600">{fable.moral}</p>
              </div>
            </div>

            {fable.transcript && (
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900">Transcript</h4>
                <div className="mt-2 p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-700 whitespace-pre-line">{fable.transcript}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href={`/fables/${params.id}/lesson`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Create Lesson Plan
        </Link>
      </div>
    </div>
  )
}
