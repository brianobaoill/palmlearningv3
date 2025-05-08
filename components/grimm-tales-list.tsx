import Link from "next/link"
import { BookOpen } from "lucide-react"

interface GrimmTale {
  id: string
  title: string
  description?: string
  slug?: string
}

interface GrimmTalesListProps {
  tales: GrimmTale[]
}

export default function GrimmTalesList({ tales }: GrimmTalesListProps) {
  // If no tales are provided, show a message
  if (!tales || tales.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No tales available at the moment. Please check back later.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tales.map((tale) => (
        <div key={tale.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <div className="p-2 rounded-full bg-indigo-100 mr-4">
              <BookOpen className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                <Link href={`/grimm-tales/${tale.slug}`} className="hover:text-indigo-600 transition-colors">
                  {tale.title}
                </Link>
              </h3>
              {tale.description && <p className="text-gray-500 text-sm mt-1">{tale.description}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
