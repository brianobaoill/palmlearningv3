import { createServerClient } from "@/lib/supabase-server"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import FablePlayer from "@/components/fable-player"
import FableMoral from "@/components/fable-moral"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const supabase = createServerClient()
  const { data: fable } = await supabase.from("fables").select("title, description").eq("id", params.id).single()

  if (!fable) {
    return {
      title: "Fable Not Found | Palm Learning",
      description: "The requested fable could not be found.",
    }
  }

  return {
    title: `${fable.title} | Palm Learning`,
    description: fable.description,
  }
}

export default async function FablePage({ params }: { params: { id: string } }) {
  const supabase = createServerClient()

  // Fetch the fable data
  const { data: fable, error } = await supabase.from("fables").select("*").eq("id", params.id).single()

  if (error || !fable) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link href="/fable-library" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Fable Library
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <Image src={fable.image_url || "/placeholder.svg"} alt={fable.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{fable.title}</h1>
          <p className="text-gray-600 mb-6">{fable.description}</p>

          <FablePlayer fableId={fable.id} audioUrl={fable.audio_url} duration={fable.duration} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Story Transcript</h2>
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{fable.transcript}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <FableMoral moral={fable.moral} />

          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Discussion Questions</h2>
              <ul className="space-y-3">
                <li className="text-gray-600">What was your favorite part of this story?</li>
                <li className="text-gray-600">What lesson did the characters learn?</li>
                <li className="text-gray-600">How can you apply this moral in your own life?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
