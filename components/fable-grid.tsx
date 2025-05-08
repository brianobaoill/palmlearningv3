"use client"

import { useState } from "react"
import FableCard from "./fable-card"
import { Search, Filter } from "lucide-react"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
  audio_url: string
  image_url: string
  duration: number
  transcript?: string
  age_range?: string
}

interface FableGridProps {
  fables: Fable[]
}

export default function FableGrid({ fables }: FableGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [ageFilter, setAgeFilter] = useState("all")

  // Filter fables based on search query and age filter
  const filteredFables = fables.filter((fable) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      fable.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fable.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by age range
    const matchesAge = ageFilter === "all" || (fable.age_range && fable.age_range.includes(ageFilter))

    return matchesSearch && matchesAge
  })

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        {/* Search input */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search fables..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F]"
            />
          </div>
        </div>

        {/* Age filter */}
        <div className="sm:w-48">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#007B5F] focus:border-[#007B5F] appearance-none"
            >
              <option value="all">All Ages</option>
              <option value="4">Ages 4+</option>
              <option value="5">Ages 5+</option>
              <option value="6">Ages 6+</option>
              <option value="7">Ages 7+</option>
              <option value="8">Ages 8+</option>
            </select>
          </div>
        </div>
      </div>

      {filteredFables.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900">No fables found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFables.map((fable) => (
            <FableCard key={fable.id} fable={fable} />
          ))}
        </div>
      )}
    </div>
  )
}
