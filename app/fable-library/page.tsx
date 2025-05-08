import { createServerClient } from "@/lib/supabase-server"
import FableGrid from "@/components/fable-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fable Library | Palm Learning",
  description: "Explore our collection of Aesop's Fables for children",
}

export default async function FableLibraryPage() {
  const supabase = createServerClient()

  // Fetch all fables from the database
  const { data: fables, error } = await supabase.from("fables").select("*").order("title")

  if (error) {
    console.error("Error fetching fables:", error)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aesop's Fables Library</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our collection of timeless stories with valuable moral lessons that help children develop emotional
          intelligence and critical thinking skills.
        </p>
      </div>

      {error ? (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">There was an error loading the fables. Please try again later.</p>
            </div>
          </div>
        </div>
      ) : fables && fables.length > 0 ? (
        <FableGrid fables={fables} />
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No fables found</h3>
          <p className="mt-1 text-sm text-gray-500">Check back later for our collection of Aesop's Fables.</p>
        </div>
      )}
    </div>
  )
}
