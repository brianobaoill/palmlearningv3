"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

interface Resource {
  id: string
  title: string
  description: string
  category: string
  imageUrl: string
  downloadUrl: string
}

interface ResourceGridProps {
  resources: Resource[]
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {resources.map((resource, index) => (
        <ResourceCard key={resource.id} resource={resource} index={index} />
      ))}
    </div>
  )
}

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-40">
        <Image
          src={resource.imageUrl || "/images/physical-activity/default-resource.jpg"}
          alt={resource.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xs font-medium text-[#F9A826] mb-2">{resource.category}</div>
        <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
        <Link
          href={resource.downloadUrl}
          className="inline-flex items-center text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
        >
          <Download className="h-4 w-4 mr-1" />
          Download Resource
        </Link>
      </div>
    </motion.div>
  )
}
