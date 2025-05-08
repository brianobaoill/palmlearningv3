"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, RefreshCw } from "lucide-react"

// Define the emotion cards for charades
const emotions = [
  { name: "Happy", description: "You just got a birthday present you really wanted", difficulty: "Easy" },
  { name: "Sad", description: "Your ice cream fell on the ground", difficulty: "Easy" },
  { name: "Angry", description: "Someone broke your favorite toy", difficulty: "Easy" },
  { name: "Surprised", description: "You found a $20 bill on the sidewalk", difficulty: "Easy" },
  { name: "Scared", description: "You heard a loud noise in the middle of the night", difficulty: "Easy" },
  { name: "Excited", description: "You're going to an amusement park tomorrow", difficulty: "Easy" },
  { name: "Nervous", description: "You have to give a presentation in front of the class", difficulty: "Medium" },
  { name: "Proud", description: "You just learned how to ride a bike without training wheels", difficulty: "Medium" },
  { name: "Embarrassed", description: "You tripped and fell in front of everyone", difficulty: "Medium" },
  { name: "Confused", description: "You can't figure out a difficult math problem", difficulty: "Medium" },
  { name: "Disappointed", description: "The movie you wanted to see was sold out", difficulty: "Medium" },
  { name: "Grateful", description: "Someone helped you when you were having trouble", difficulty: "Hard" },
  { name: "Jealous", description: "Your friend got a new toy that you really want", difficulty: "Hard" },
  { name: "Frustrated", description: "You can't get your shoelaces tied correctly", difficulty: "Hard" },
  { name: "Bored", description: "You've been waiting in line for a very long time", difficulty: "Hard" },
  { name: "Shy", description: "You're meeting new people for the first time", difficulty: "Hard" },
]

export default function EmotionCharades() {
  const [currentEmotion, setCurrentEmotion] = useState(null)
  const [difficulty, setDifficulty] = useState("All")
  const [showCard, setShowCard] = useState(false)

  // Filter emotions by difficulty
  const filteredEmotions =
    difficulty === "All" ? emotions : emotions.filter((emotion) => emotion.difficulty === difficulty)

  // Get a random emotion
  const getRandomEmotion = () => {
    const randomIndex = Math.floor(Math.random() * filteredEmotions.length)
    setCurrentEmotion(filteredEmotions[randomIndex])
    setShowCard(true)
  }

  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/emotional-wellbeing/emotion-recognition"
              className="inline-flex items-center text-[#007B5F] hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Emotion Recognition
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emotion Charades</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Act out different emotions for others to guess. This fun activity helps children recognize and express
              emotions through body language and facial expressions.
            </p>
          </div>

          {/* Game Controls */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Difficulty Level</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setDifficulty("All")}
                  className={`px-4 py-2 rounded-lg ${difficulty === "All" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  All Emotions
                </button>
                <button
                  onClick={() => setDifficulty("Easy")}
                  className={`px-4 py-2 rounded-lg ${difficulty === "Easy" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Easy
                </button>
                <button
                  onClick={() => setDifficulty("Medium")}
                  className={`px-4 py-2 rounded-lg ${difficulty === "Medium" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Medium
                </button>
                <button
                  onClick={() => setDifficulty("Hard")}
                  className={`px-4 py-2 rounded-lg ${difficulty === "Hard" ? "bg-[#007B5F] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Hard
                </button>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={getRandomEmotion}
                className="inline-flex items-center px-6 py-3 bg-[#007B5F] text-white rounded-lg hover:bg-[#006B4F] transition-colors"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Get Random Emotion
              </button>
            </div>
          </div>

          {/* Emotion Card */}
          {showCard && currentEmotion && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {currentEmotion.difficulty}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentEmotion.name}</h2>
                <p className="text-gray-600 mb-6">{currentEmotion.description}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowCard(false)}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors mr-3"
                  >
                    Hide Card
                  </button>
                  <button
                    onClick={getRandomEmotion}
                    className="inline-flex items-center px-4 py-2 bg-[#007B5F] text-white rounded-lg hover:bg-[#006B4F] transition-colors"
                  >
                    Next Emotion
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Choose a difficulty level (or use all emotions).</li>
              <li>Click "Get Random Emotion" to receive an emotion to act out.</li>
              <li>Without speaking, act out the emotion using only your face and body.</li>
              <li>Have others guess which emotion you're portraying.</li>
              <li>Once someone guesses correctly, click "Next Emotion" for a new challenge.</li>
            </ol>
          </div>

          {/* Tips for Acting Out Emotions */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tips for Acting Out Emotions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Facial Expressions</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Use your eyebrows (raised, furrowed)</li>
                  <li>Change your mouth shape (smile, frown)</li>
                  <li>Open or squint your eyes</li>
                  <li>Wrinkle or relax your nose</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Body Language</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Change your posture (straight, slouched)</li>
                  <li>Use hand gestures</li>
                  <li>Move quickly or slowly</li>
                  <li>Take up more or less space</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Benefits */}
          <div className="bg-gradient-to-r from-[#e5f3ff] to-[#f0f8ff] rounded-xl p-6 mb-8">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Learning Benefits</h2>
                <p className="text-gray-700 mb-4">
                  Emotion charades helps children develop important social-emotional skills:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Recognize how emotions look on faces and in body language</li>
                  <li>Express emotions in appropriate ways</li>
                  <li>Build emotional vocabulary</li>
                  <li>Develop empathy by "trying on" different feelings</li>
                  <li>Have fun while learning about emotions</li>
                </ul>
              </div>
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=200&width=300&query=children learning about emotions, colorful illustration"
                  alt="Learning about emotions"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* More Activities */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More Activities</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Link href="/emotional-wellbeing/emotion-recognition/matching-game" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=emotion matching game for children, illustration"
                      alt="Emotion Matching Game"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Emotion Matching Game
                    </h3>
                    <p className="text-gray-600">Match emotion words with their corresponding facial expressions.</p>
                  </div>
                </div>
              </Link>

              <Link href="/emotional-wellbeing/emotion-recognition/scenarios" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=children discussing emotional scenarios, illustration"
                      alt="Emotion Scenarios"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Emotion Scenarios
                    </h3>
                    <p className="text-gray-600">Identify how characters might feel in different situations.</p>
                  </div>
                </div>
              </Link>

              <Link href="/emotional-wellbeing/emotion-recognition/emotion-wheel" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=colorful emotion wheel for children, illustration"
                      alt="Emotion Wheel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Emotion Wheel
                    </h3>
                    <p className="text-gray-600">Explore the nuances between different emotions.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
