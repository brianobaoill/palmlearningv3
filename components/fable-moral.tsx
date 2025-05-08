import { Heart } from "lucide-react"

interface FableMoralProps {
  moral: string
}

export default function FableMoral({ moral }: FableMoralProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-red-100">
            <Heart className="h-5 w-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 ml-3">Moral of the Story</h2>
        </div>
        <p className="text-gray-600">{moral}</p>
      </div>
    </div>
  )
}
