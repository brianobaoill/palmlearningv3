"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, BookOpen, Filter } from "lucide-react"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
  duration: number
  image_url?: string
  age_range?: string
}

interface FableListProps {
  fables: Fable[]
  showFilters?: boolean
  onFableSelect?: (fable: Fable) => void
  linkPrefix?: string
}

const formatDuration = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
}

export default function FableList({
  fables,
  showFilters = false,
  onFableSelect,
  linkPrefix = "/fables",
}: FableListProps) {
  const [ageFilter, setAgeFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFables = fables.filter((fable) => {
    // Filter by age range
    if (ageFilter !== "all" && fable.age_range !== ageFilter) {
      return false
    }

    // Filter by search query
    if (
      searchQuery &&
      !fable.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !fable.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  return (
    <div>
      {showFilters && (
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Fables
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="age-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Age Range
              </label>
              <div className="relative">
                <select
                  id="age-filter"
                  value={ageFilter}
                  onChange={(e) => setAgeFilter(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm pl-10"
                >
                  <option value="all">All Ages</option>
                  <option value="4-7">Ages 4-7</option>
                  <option value="5-8">Ages 5-8</option>
                  <option value="6-9">Ages 6-9</option>
                  <option value="8-12">Ages 8-12</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredFables.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No fables found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFables.map((fable) => (
            <div
              key={fable.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {onFableSelect ? (
                <button
                  onClick={() => onFableSelect(fable)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#007B5F] focus:ring-offset-2 rounded-lg"
                >
                  <FableCard fable={fable} />
                </button>
              ) : (
                <Link
                  href={`${linkPrefix}/${fable.id}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-[#007B5F] focus:ring-offset-2 rounded-lg"
                >
                  <FableCard fable={fable} />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function FableCard({ fable }: { fable: Fable }) {
  return (
    <>
      <div className="relative h-40 bg-gradient-to-r from-green-100 to-blue-100">
        {fable.image_url ? (
          <Image src={fable.image_url || "/placeholder.svg"} alt={fable.title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-[#007B5F]" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{fable.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{fable.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDuration(fable.duration)}</span>
          </div>
          {fable.age_range && (
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Ages {fable.age_range}</span>
          )}
        </div>
      </div>
    </>
  )
}
