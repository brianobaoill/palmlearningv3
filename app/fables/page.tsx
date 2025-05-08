import { createServerClient } from "@/lib/supabase-server"
import FableList from "@/components/fable-list"

export default async function FablesPage() {
  const supabase = createServerClient()

  const { data: fables, error } = await supabase.from("fables").select("*").order("title")

  if (error) {
    console.error("Error fetching fables:", error)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Aesop's Fables</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore our collection of Aesop's Fables, timeless stories with valuable moral lessons that help children
        develop emotional intelligence and critical thinking skills.
      </p>

      <FableList fables={fables || []} showFilters={true} linkPrefix="/fables" />
    </div>
  )
}
