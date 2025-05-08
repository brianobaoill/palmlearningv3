import Header from "@/components/header"
import Footer from "@/components/footer"
import { createServerClient } from "@/lib/supabase-server"
import Link from "next/link"
import Image from "next/image"
import { Clock, BookOpen, Heart } from "lucide-react"

export default async function GrimmTalesPage() {
  const supabase = createServerClient()

  // Fetch all grimm tales
  const { data: tales } = await supabase.from("grimm_tales").select("*").order("title")

  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img
              src="/images/grimm-fairy-tales.jpeg"
              alt="Grimm Fairy Tales illustration with various characters"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Grimm Tales</h1>
              <p className="text-lg mt-2">Classic fairy tales with timeless lessons</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Grimm Fairy Tales
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Classic stories for older children with timeless lessons about emotional wellbeing.
            </p>
          </div>

          {/* Tales Grid - Using the same card layout as Aesop's Fables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tales && tales.length > 0
              ? tales.map((tale) => (
                  <div
                    key={tale.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={tale.image_url || "/placeholder.svg?height=400&width=600&query=fairy tale illustration"}
                        alt={tale.title}
                        fill
                        className="object-cover"
                      />
                      {tale.age_range && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Ages {tale.age_range}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{tale.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tale.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{Math.floor(tale.duration / 60)} min</span>
                        </div>
                        {tale.emotional_focus && (
                          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                            {tale.emotional_focus}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          href={`/grimm-tales/${tale.slug}`}
                          className="text-[#007B5F] hover:text-[#006B4F] text-sm font-medium flex items-center"
                        >
                          <BookOpen className="h-4 w-4 mr-1" />
                          Read & Listen
                        </Link>
                        <div className="flex items-center text-sm text-gray-500">
                          <Heart className="h-4 w-4 mr-1" />
                          <span>Emotional Lesson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : // Fallback cards if no tales in database
                [
                  {
                    id: "hansel-gretel",
                    title: "Hansel and Gretel",
                    description:
                      "A tale about resilience and sibling cooperation that helps children understand how to overcome fear and work together in challenging situations.",
                    age_range: "7-12",
                    emotional_focus: "Managing fear",
                    duration: 480,
                  },
                  {
                    id: "snow-white",
                    title: "Snow White",
                    description:
                      "A story that explores jealousy, kindness, and the importance of emotional intelligence in recognizing true friendship.",
                    age_range: "7-12",
                    emotional_focus: "Recognizing emotions",
                    duration: 540,
                  },
                  {
                    id: "cinderella",
                    title: "Cinderella",
                    description:
                      "A tale of resilience and maintaining hope in the face of mistreatment, teaching children about emotional perseverance.",
                    age_range: "5-10",
                    emotional_focus: "Building resilience",
                    duration: 510,
                  },
                  {
                    id: "rapunzel",
                    title: "Rapunzel",
                    description:
                      "A story about isolation and connection that helps children understand the importance of healthy relationships.",
                    age_range: "8-12",
                    emotional_focus: "Coping with loneliness",
                    duration: 520,
                  },
                  {
                    id: "frog-prince",
                    title: "The Frog Prince",
                    description:
                      "A tale about keeping promises and looking beyond appearances, helping children understand the importance of honesty.",
                    age_range: "5-10",
                    emotional_focus: "Developing honesty",
                    duration: 450,
                  },
                  {
                    id: "red-riding-hood",
                    title: "Little Red Riding Hood",
                    description:
                      "A cautionary tale that teaches children about recognizing deception and the importance of being aware of their emotions.",
                    age_range: "5-10",
                    emotional_focus: "Trusting instincts",
                    duration: 480,
                  },
                ].map((tale) => (
                  <div
                    key={tale.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent(tale.title)} fairy tale illustration`}
                        alt={tale.title}
                        fill
                        className="object-cover"
                      />
                      {tale.age_range && (
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Ages {tale.age_range}
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{tale.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tale.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{Math.floor(tale.duration / 60)} min</span>
                        </div>
                        {tale.emotional_focus && (
                          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                            {tale.emotional_focus}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          href={`/grimm-tales/${tale.id.toLowerCase().replace(/ /g, "-")}`}
                          className="text-[#007B5F] hover:text-[#006B4F] text-sm font-medium flex items-center"
                        >
                          <BookOpen className="h-4 w-4 mr-1" />
                          Read & Listen
                        </Link>
                        <div className="flex items-center text-sm text-gray-500">
                          <Heart className="h-4 w-4 mr-1" />
                          <span>Emotional Lesson</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Educational Value Section */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Emotional Learning Through Grimm Tales</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emotional Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Grimm fairy tales help children identify and understand complex emotions through character
                  experiences. They learn about fear, courage, jealousy, love, and more in a safe context.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">Building Resilience</h3>
                <p className="text-gray-600">
                  These stories show characters overcoming significant challenges, teaching children that they too can
                  persevere through difficult situations and emerge stronger.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognizing Emotions in Others</h3>
                <p className="text-gray-600 mb-4">
                  Through the characters' interactions, children learn to recognize emotional cues and develop empathy
                  for others' feelings and experiences.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">Moral Development</h3>
                <p className="text-gray-600">
                  While sometimes containing darker themes, these stories provide valuable lessons about right and
                  wrong, helping children develop their own moral compass and emotional awareness.
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Resources */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">For Teachers & Parents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Discussion Guides</h3>
                <p className="text-gray-600 mb-4">
                  Structured questions and talking points to help facilitate meaningful discussions about each tale's
                  emotional themes.
                </p>
                <Link
                  href="/grimm-tales/resources/discussion-guides"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  View guides <span className="ml-1">→</span>
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Emotional Learning Activities</h3>
                <p className="text-gray-600 mb-4">
                  Printable worksheets and activities related to each tale to reinforce emotional learning and
                  engagement.
                </p>
                <Link
                  href="/grimm-tales/resources/activities"
                  className="text-[#007B5F] font-medium hover:underline flex items-center"
                >
                  Download activities <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
