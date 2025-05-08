import Header from "@/components/header"
import Footer from "@/components/footer"
import EmotionalWellbeingUnit from "@/components/emotional-wellbeing-unit"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function UnitOfWorkPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/emotional-wellbeing" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Emotional Wellbeing
          </Link>

          <EmotionalWellbeingUnit />
        </div>
      </section>

      <Footer />
    </main>
  )
}
