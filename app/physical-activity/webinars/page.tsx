import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Play } from "lucide-react"

export default function WebinarsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Webinars</h1>

          <p className="text-gray-600 mb-8 max-w-3xl">
            {/* Replace with your actual content description */}
            Access our library of recorded webinars covering various aspects of physical education, fundamental movement
            skills, and physical literacy. These professional development resources are designed to support teachers in
            delivering high-quality physical education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Replace with your actual webinars */}
            <WebinarCard
              title="Introduction to Fundamental Movement Skills"
              description="Learn about the importance of fundamental movement skills and how they contribute to physical literacy."
              imageUrl="/placeholder.svg?key=87wtb"
              duration="45 minutes"
              presenter="Dr. Jane Smith"
              videoUrl="/physical-activity/webinars/fundamental-movement-skills"
            />

            <WebinarCard
              title="Assessment in Physical Education"
              description="Practical approaches to assessing physical literacy and fundamental movement skills in the classroom."
              imageUrl="/placeholder.svg?key=ptfmx"
              duration="60 minutes"
              presenter="Prof. John Doe"
              videoUrl="/physical-activity/webinars/assessment-in-pe"
            />

            {/* Add more webinar cards for your actual content */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

interface WebinarCardProps {
  title: string
  description: string
  imageUrl: string
  duration: string
  presenter: string
  videoUrl: string
}

function WebinarCard({ title, description, imageUrl, duration, presenter, videoUrl }: WebinarCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-full p-3">
            <Play className="h-8 w-8 text-[#007B5F]" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{duration}</span>
          <span>{presenter}</span>
        </div>
        <Link
          href={videoUrl}
          className="mt-4 inline-flex items-center justify-center w-full bg-[#007B5F] hover:bg-[#006B4F] text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Watch Webinar
        </Link>
      </div>
    </div>
  )
}
