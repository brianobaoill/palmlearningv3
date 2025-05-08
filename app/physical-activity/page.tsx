import Header from "@/components/header"
import Footer from "@/components/footer"
import PhysicalActivityHero from "@/components/physical-activity-hero"
import ResourceGrid from "@/components/resource-grid"
import FeaturedProgram from "@/components/featured-program"
import ActivityCategories from "@/components/activity-categories"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PhysicalActivityPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <PhysicalActivityHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ActivityCategories />

        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Resources</h2>
            <Link href="/physical-activity/resources" className="text-[#007B5F] hover:text-[#006B4F] flex items-center">
              View all resources
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <ResourceGrid
            resources={[
              {
                id: "1",
                title: "Fundamental Movement Skills",
                description: "Resources for teaching fundamental movement skills to primary school children.",
                category: "Teaching Resources",
                imageUrl: "/placeholder.svg?key=93lc4",
                downloadUrl: "/physical-activity/resources/fundamental-movement-skills",
              },
              {
                id: "2",
                title: "Active School Week",
                description: "Ideas and activities for running an active school week program.",
                category: "School Programs",
                imageUrl: "/placeholder.svg?key=vf6bm",
                downloadUrl: "/physical-activity/resources/active-school-week",
              },
              {
                id: "3",
                title: "Physical Education Lesson Plans",
                description: "Ready-to-use PE lesson plans for all primary class levels.",
                category: "Lesson Plans",
                imageUrl: "/placeholder.svg?key=i6rmw",
                downloadUrl: "/physical-activity/resources/lesson-plans",
              },
              {
                id: "4",
                title: "Movement Breaks",
                description: "Short activity breaks to incorporate movement throughout the school day.",
                category: "Classroom Activities",
                imageUrl: "/placeholder.svg?key=hsrj2",
                downloadUrl: "/physical-activity/resources/movement-breaks",
              },
            ]}
          />
        </div>

        <FeaturedProgram />

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">PALM Ireland Resources</h2>
            <p className="text-gray-600 mb-6">
              Access our complete collection of physical activity and locomotor movement resources, including plans and
              schemes, webinars, posters, coaching materials, and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ResourceLink title="Plans and Schemes" href="/physical-activity/plans-and-schemes" />
              <ResourceLink title="Webinars" href="/physical-activity/webinars" />
              <ResourceLink title="Posters" href="/physical-activity/posters" />
              <ResourceLink title="PDST Resources" href="/physical-activity/pdst-resources" />
              <ResourceLink title="Downloads" href="/physical-activity/downloads" />
              <ResourceLink title="Coaching Materials" href="/physical-activity/coaching" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ResourceLink({ title, href, target, rel }: { title: string; href: string; target?: string; rel?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      target={target}
      rel={rel}
    >
      <span className="font-medium text-gray-900">{title}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-gray-400" />
    </Link>
  )
}
