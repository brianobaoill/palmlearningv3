import Header from "@/components/header"
import Footer from "@/components/footer"
import StemHero from "@/components/stem-hero"
import StemCategories from "@/components/stem-categories"
import FeaturedStemResources from "@/components/featured-stem-resources"
import StemActivities from "@/components/stem-activities"

export default function StemLearningPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <StemHero />
      <StemCategories />
      <FeaturedStemResources />
      <StemActivities />
      <Footer />
    </main>
  )
}
