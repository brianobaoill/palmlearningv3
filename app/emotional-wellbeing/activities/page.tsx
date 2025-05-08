import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Palette, Feather, Star } from "lucide-react"
import BrainBreaks from "@/components/brain-breaks"
import ArtsAndCrafts from "@/components/arts-and-crafts"

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Lilac Gradient Background */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#e0d0f5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotional Wellbeing Activities</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Engaging activities to help children express their feelings, practice mindfulness, and develop emotional
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Brain Breaks Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Brain Breaks</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              Short mindfulness activities to help children reset, refocus, and regulate their emotions.
            </p>
          </div>

          <BrainBreaks />

          <div className="mt-10 text-center">
            <Link
              href="/mindfulness"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#9370DB] hover:bg-[#8A62D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9370DB]"
            >
              Explore More Mindfulness Activities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Arts and Crafts Section */}
      <section className="py-12 bg-gradient-to-b from-white to-[#f5f0fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Arts & Crafts</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              Creative activities that help children express their emotions and develop emotional intelligence through
              art.
            </p>
          </div>

          <ArtsAndCrafts />
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 bg-[#f5f0fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Additional Resources</h2>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              Printable worksheets, guides, and more to support emotional wellbeing activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-100">
                    <Palette className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Coloring Pages</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Printable coloring pages focused on kindness, friendship, and emotional expression.
                </p>
                <Link href="#" className="text-purple-600 font-medium hover:underline flex items-center">
                  Download <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Activity Guide</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Detailed instructions for teachers and parents to facilitate emotional wellbeing activities.
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline flex items-center">
                  Download <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-green-100">
                    <Feather className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Reflection Journal</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Printable journal pages to help children reflect on their emotions and experiences.
                </p>
                <Link href="#" className="text-green-600 font-medium hover:underline flex items-center">
                  Download <ArrowRight className="ml-1 h-4 w-4" />
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
