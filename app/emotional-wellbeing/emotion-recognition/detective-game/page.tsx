import Header from "@/components/header"
import Footer from "@/components/footer"
import { EmotionDetectiveGame } from "@/components/emotion-detective-game"

export default function EmotionDetectivePage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotion Detective Game</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can you identify the emotions from facial expressions and body language?
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
            <div className="prose max-w-none mb-8">
              <h2>How to Play</h2>
              <p>
                In this game, you'll see images of people showing different emotions. Your job is to figure out what
                emotion they're feeling by looking at their facial expressions and body language.
              </p>
              <p>
                This game helps you become better at recognizing how others are feeling - an important skill for
                building friendships and showing empathy.
              </p>
            </div>

            <EmotionDetectiveGame />
          </div>

          <div className="bg-gradient-to-r from-[#e5f3ff] to-[#f0f8ff] rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters</h2>
            <p className="text-gray-700 mb-4">Being able to recognize emotions in others helps us:</p>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li>Understand how our friends are feeling</li>
              <li>Know when someone might need help or support</li>
              <li>Respond appropriately in social situations</li>
              <li>Build stronger friendships and relationships</li>
            </ul>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">For Teachers & Parents</h3>
              <p className="text-gray-700 mb-4">
                This activity helps children develop emotional intelligence by practicing emotion recognition. You can
                extend this activity by:
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Discussing what clues helped identify each emotion</li>
                <li>Practicing making different emotional expressions in a mirror</li>
                <li>Watching short video clips with the sound off and guessing the emotions</li>
                <li>Creating emotion charades where children act out different feelings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
