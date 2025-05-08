"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, RefreshCw } from "lucide-react"

// Define the emotion cards
const emotions = [
  { name: "Happy", emoji: "😀", color: "bg-yellow-100 border-yellow-300" },
  { name: "Sad", emoji: "😢", color: "bg-blue-100 border-blue-300" },
  { name: "Angry", emoji: "😠", color: "bg-red-100 border-red-300" },
  { name: "Surprised", emoji: "😮", color: "bg-purple-100 border-purple-300" },
  { name: "Scared", emoji: "😨", color: "bg-gray-100 border-gray-300" },
  { name: "Disgusted", emoji: "🤢", color: "bg-green-100 border-green-300" },
  { name: "Excited", emoji: "🤩", color: "bg-pink-100 border-pink-300" },
  { name: "Calm", emoji: "😌", color: "bg-teal-100 border-teal-300" },
]

// Create pairs of cards (emoji and word)
const createCardPairs = () => {
  const pairs = []
  emotions.forEach((emotion) => {
    // Emoji card
    pairs.push({
      id: `${emotion.name}-emoji`,
      content: emotion.emoji,
      type: "emoji",
      emotion: emotion.name,
      matched: false,
      flipped: false,
      color: emotion.color,
    })
    // Word card
    pairs.push({
      id: `${emotion.name}-word`,
      content: emotion.name,
      type: "word",
      emotion: emotion.name,
      matched: false,
      flipped: false,
      color: "bg-white border-gray-200",
    })
  })
  return pairs
}

export default function EmotionMatchingGame() {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  // Initialize or reset the game
  const initializeGame = () => {
    const cardPairs = createCardPairs()
    // Shuffle the cards
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameComplete(false)
    setGameStarted(true)
  }

  // Handle card click
  const handleCardClick = (index) => {
    // Prevent clicking if two cards are already flipped or the card is already flipped/matched
    if (flippedCards.length === 2 || cards[index].flipped || cards[index].matched) return

    // Flip the card
    const updatedCards = [...cards]
    updatedCards[index].flipped = true
    setCards(updatedCards)

    // Add to flipped cards
    const updatedFlippedCards = [...flippedCards, { index, card: updatedCards[index] }]
    setFlippedCards(updatedFlippedCards)

    // Check for matches if two cards are flipped
    if (updatedFlippedCards.length === 2) {
      setMoves(moves + 1)
      const [firstCard, secondCard] = updatedFlippedCards

      // Check if the cards match (same emotion, different types)
      if (firstCard.card.emotion === secondCard.card.emotion && firstCard.card.type !== secondCard.card.type) {
        // Mark cards as matched
        updatedCards[firstCard.index].matched = true
        updatedCards[secondCard.index].matched = true
        setCards(updatedCards)
        setMatchedPairs(matchedPairs + 1)
        setFlippedCards([])

        // Check if game is complete
        if (matchedPairs + 1 === emotions.length) {
          setGameComplete(true)
        }
      } else {
        // If no match, flip cards back after a delay
        setTimeout(() => {
          updatedCards[firstCard.index].flipped = false
          updatedCards[secondCard.index].flipped = false
          setCards(updatedCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  // Initialize game on first load
  useEffect(() => {
    initializeGame()
  }, [])

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Emotion Matching Game</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Match the emotion words with their corresponding facial expressions. Find all pairs to win!
            </p>
          </div>

          {/* Game Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <div className="bg-white rounded-lg shadow px-4 py-2">
                <span className="font-medium">Moves: </span>
                <span>{moves}</span>
              </div>
              <div className="bg-white rounded-lg shadow px-4 py-2">
                <span className="font-medium">Pairs: </span>
                <span>
                  {matchedPairs} / {emotions.length}
                </span>
              </div>
            </div>
            <button
              onClick={initializeGame}
              className="inline-flex items-center px-4 py-2 bg-[#007B5F] text-white rounded-lg hover:bg-[#006B4F] transition-colors"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Restart Game
            </button>
          </div>

          {/* Game Board */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            {gameComplete ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-[#007B5F] mb-4">Congratulations!</h2>
                <p className="text-lg mb-6">You completed the game in {moves} moves!</p>
                <button
                  onClick={initializeGame}
                  className="inline-flex items-center px-6 py-3 bg-[#007B5F] text-white rounded-lg hover:bg-[#006B4F] transition-colors"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Play Again
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`aspect-square rounded-lg border-2 cursor-pointer transition-all duration-300 transform ${
                      card.flipped ? card.color : "bg-[#007B5F] border-[#006B4F]"
                    } ${card.matched ? "opacity-70" : "hover:shadow-md"}`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      {card.flipped && (
                        <span className={`${card.type === "emoji" ? "text-4xl" : "text-xl font-bold"}`}>
                          {card.content}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Game Instructions */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How to Play</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click on any card to flip it over.</li>
              <li>Try to find matching pairs of emotions (word and emoji).</li>
              <li>If the two cards match, they will stay face up.</li>
              <li>If they don't match, they will flip back over.</li>
              <li>The game is complete when all pairs are matched.</li>
            </ol>
          </div>

          {/* Learning Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Learning About Emotions</h2>
            <p className="text-gray-700 mb-4">
              Recognizing emotions is an important skill for children to develop. This game helps children:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Match facial expressions with emotion words</li>
              <li>Build emotional vocabulary</li>
              <li>Recognize visual cues for different feelings</li>
              <li>Improve memory and concentration</li>
            </ul>
            <p className="text-gray-700">
              After playing, talk with children about the different emotions in the game. Ask them when they might feel
              each emotion and what helps them when they experience difficult feelings.
            </p>
          </div>

          {/* More Activities */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More Activities</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <Link href="/emotional-wellbeing/emotion-recognition/charades" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=200&width=400&query=children playing emotion charades, illustration"
                      alt="Emotion Charades"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#007B5F] transition-colors">
                      Emotion Charades
                    </h3>
                    <p className="text-gray-600">Act out different emotions for others to guess.</p>
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
