import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function ActivityCardsPage() {
  const activityCards = [
    {
      title: "Engineering Challenge Cards",
      description: "10 quick engineering challenges using common classroom materials.",
      image: "/images/engineering-cards.jpg",
      ageRange: "7-11 years",
      downloadLink: "#",
    },
    {
      title: "Math Puzzle Cards",
      description: "15 engaging math puzzles to develop problem-solving skills.",
      image: "/images/math-cards.jpg",
      ageRange: "8-12 years",
      downloadLink: "#",
    },
    {
      title: "Science Experiment Cards",
      description: "12 simple science experiments that can be done in 15 minutes or less.",
      image: "/images/science-cards.jpg",
      ageRange: "6-10 years",
      downloadLink: "#",
    },
    {
      title: "Coding Concept Cards",
      description: "8 unplugged activities to teach basic programming concepts.",
      image: "/images/coding-cards.jpg",
      ageRange: "8-13 years",
      downloadLink: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-12 md:py-16 bg-gradient-to-r from-[#003366] to-[#0066cc] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">STEM Activity Cards</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                Printable activity cards for quick and engaging STEM learning experiences in the classroom or at home.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <Image
                src="/images/PalmLearner1.png"
                alt="Friendly STEM Monster"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Card Sets</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each set of cards includes easy-to-follow instructions, materials lists, and extension ideas. Perfect for
              learning centers, early finishers, or home activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activityCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 relative">
                  <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm inline-block mb-4">
                    Ages: {card.ageRange}
                  </div>
                  <Link
                    href={card.downloadLink}
                    className="block w-full bg-[#0099CC] hover:bg-[#007B5F] text-white text-center py-2 rounded-md transition-colors"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Use These Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">In the Classroom</h4>
                <p className="text-gray-600">
                  Set up activity stations, use for early finishers, or incorporate into your lesson plans for hands-on
                  learning experiences.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">At Home</h4>
                <p className="text-gray-600">
                  Perfect for after-school enrichment, weekend projects, or holiday activities that combine fun and
                  learning.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">For Groups</h4>
                <p className="text-gray-600">
                  Ideal for collaborative learning, STEM clubs, or small group instruction to develop teamwork skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
