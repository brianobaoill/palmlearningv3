import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookIcon, ArrowRight } from "lucide-react"

export default function StoriesIndexPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/emotional-wellbeing" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Emotional Wellbeing
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotional Wellbeing Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stories to help children understand and process different emotions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=qq4nj" alt="Feeling Sad" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <BookIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">When I Feel Sad</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about a child learning to recognize and cope with feelings of sadness.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/sad"
                  className="text-blue-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=oorvn" alt="Feeling Angry" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-red-100">
                    <BookIcon className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Managing Anger</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about understanding anger and learning healthy ways to express it.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/angry"
                  className="text-red-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=m5h5w" alt="Feeling Anxious" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-purple-100">
                    <BookIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Calming Worries</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about a child learning to recognize and manage feelings of anxiety.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/anxiety"
                  className="text-purple-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Story Card 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=i2bnu" alt="Feeling Happy" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-yellow-100">
                    <BookIcon className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Finding Joy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about recognizing and appreciating moments of happiness in everyday life.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/happy"
                  className="text-yellow-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Story Card 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=hdheg" alt="Feeling Proud" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-green-100">
                    <BookIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Growing Confidence</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about building self-esteem and feeling proud of personal achievements.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/proud"
                  className="text-green-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Story Card 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?key=c0qhk" alt="Being Kind" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-pink-100">
                    <BookIcon className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">The Power of Kindness</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  A story about how small acts of kindness can make a big difference in others' lives.
                </p>
                <Link
                  href="/emotional-wellbeing/stories/kindness"
                  className="text-pink-600 font-medium hover:underline flex items-center"
                >
                  Read story <ArrowRight className="ml-1 h-4 w-4" />
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
