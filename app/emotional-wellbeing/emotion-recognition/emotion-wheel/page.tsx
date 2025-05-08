import Header from "@/components/header"
import Footer from "@/components/footer"
import { EmotionWheel } from "@/components/emotion-wheel"

export default function EmotionWheelPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Emotion Wheel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different emotions and learn how they connect to each other
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
            <div className="prose max-w-none mb-8">
              <h2>What is an Emotion Wheel?</h2>
              <p>
                An emotion wheel helps us understand the many different feelings we experience. The wheel shows how
                emotions are connected and how they range from simple to complex. By exploring the nine categories (Joy,
                Love, Surprise, Disgust, Anger, Sadness, Fear, Calm, and Trust), you'll find specific emotions that help
                us describe exactly how we feel.
              </p>
              <h2>How to Use This Activity</h2>
              <p>
                Click on any emotion category to learn more about the specific emotions in that category. You can
                explore:
              </p>
              <ul>
                <li>What the emotion feels like in your body</li>
                <li>Words to describe the emotion</li>
                <li>Healthy ways to express the emotion</li>
                <li>Related emotions that are similar but slightly different</li>
              </ul>
              <p>
                Understanding different emotions helps us communicate better and manage our feelings in healthy ways.
              </p>
            </div>

            <div className="mb-8">
              <EmotionWheel />
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why This Matters</h3>
              <p className="text-gray-700 mb-4">
                Having words for our feelings helps us understand ourselves better. When we can name our emotions, we
                can talk about them and find better ways to handle them.
              </p>
              <p className="text-gray-700 mb-4">
                For example, instead of just saying "I feel bad," you might realize you feel "disappointed,"
                "uncomfortable," or "annoyed" - and those are different feelings that might need different responses.
              </p>
              <p className="text-gray-700 mb-4">
                Learning about positive emotions like "peaceful," "brave," and "hopeful" is just as important as
                understanding challenging emotions like "annoyed" or "frustrated."
              </p>
              <h4 className="font-semibold text-gray-900 mb-2">For Teachers & Parents</h4>
              <p className="text-gray-700">
                Encourage children to use this wheel when they're having trouble expressing how they feel. Ask
                open-ended questions about their emotions and validate their feelings.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#e5f3ff] to-[#f0f8ff] rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Extension Activities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Emotion Journal</h3>
                <p className="text-gray-700 mb-4">
                  Create an emotion journal where children can record how they felt throughout the day. Use the emotion
                  wheel to help them find specific words for their feelings.
                </p>
                <a
                  href="/emotional-wellbeing/emotion-recognition/printables/emotion-journal"
                  className="text-[#007B5F] font-medium hover:underline"
                >
                  Download printable journal template
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Emotion Detectives</h3>
                <p className="text-gray-700 mb-4">
                  Watch short video clips with the sound off and try to identify what emotions the characters are
                  feeling based on their facial expressions and body language.
                </p>
                <a
                  href="/emotional-wellbeing/emotion-recognition/detective-game"
                  className="text-[#007B5F] font-medium hover:underline"
                >
                  Try the emotion detective game
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
