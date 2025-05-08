import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download } from "lucide-react"

export default function PlansAndSchemesPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/physical-activity"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Physical Activity
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Plans and Schemes</h1>

          <p className="text-gray-600 mb-8 max-w-3xl">
            {/* Replace with your actual content description */}
            Our comprehensive plans and schemes of work are designed to support teachers in delivering high-quality
            physical education. These resources are aligned with curriculum standards and provide structured progression
            across all age groups.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace with your actual plans/schemes */}
            <ResourceCard
              title="Junior Infants PE Plan"
              description="A complete PE plan for Junior Infants covering fundamental movement skills, games, and activities."
              imageUrl="/placeholder.svg?key=x5peb"
              downloadUrl="/resources/physical-activity/junior-infants-pe-plan.pdf"
            />

            <ResourceCard
              title="Senior Infants PE Plan"
              description="A comprehensive PE plan for Senior Infants building on fundamental movement skills."
              imageUrl="/placeholder.svg?key=tziqu"
              downloadUrl="/resources/physical-activity/senior-infants-pe-plan.pdf"
            />

            {/* Add more resource cards for your actual content */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

interface ResourceCardProps {
  title: string
  description: string
  imageUrl: string
  downloadUrl: string
}

function ResourceCard({ title, description, imageUrl, downloadUrl }: ResourceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-40">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href={downloadUrl}
          className="inline-flex items-center text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
        >
          <Download className="h-4 w-4 mr-1" />
          Download Resource
        </a>
      </div>
    </div>
  )
}
