import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, BookOpen, Smile, Sparkles } from "lucide-react"
import SectionCard from "./section-card"

export default function EmotionalWellbeingSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SectionCard
            title="Daily Check-ins"
            description="Regular emotional check-ins help children identify and express their feelings in a safe environment."
            icon={MessageCircle}
            alternate={false}
            link="/#checkin"
            linkText="Try a check-in"
          />
          <SectionCard
            title="Mindfulness Activities"
            description="Simple mindfulness exercises designed specifically for young children to help them stay present and calm."
            icon={Sparkles}
            alternate={true}
            link="/mindfulness"
            linkText="Explore activities"
          />
          <SectionCard
            title="Emotion Recognition"
            description="Interactive activities that help children recognize different emotions in themselves and others."
            icon={Smile}
            alternate={false}
          />
          <SectionCard
            title="Aesop's Fables"
            description="Timeless stories with valuable moral lessons that help children develop emotional intelligence."
            icon={BookOpen}
            alternate={true}
            link="/fables"
            linkText="Explore Fables"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover Aesop's Fables</h3>
              <p className="text-gray-600 mb-6">
                Our collection of Aesop's Fables helps children learn important life lessons through engaging stories.
                Each fable comes with discussion questions and activities to reinforce emotional learning.
              </p>
              <div>
                <Link href="/fables" className="inline-flex items-center text-[#007B5F] font-medium hover:underline">
                  Browse our fable collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <Image
                src="/placeholder.svg?key=fjqsv"
                alt="Children listening to stories"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
