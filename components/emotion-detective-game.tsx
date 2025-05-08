"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, X, ChevronRight } from "lucide-react"

type EmotionScenario = {
  id: number
  image: string
  emotion: string
  options: string[]
  context: string
}

const scenarios: EmotionScenario[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600&query=child with surprised expression, cartoon",
    emotion: "Surprised",
    options: ["Surprised", "Angry", "Sad", "Happy"],
    context: "This child just received an unexpected gift.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=400&width=600&query=child with proud expression, cartoon",
    emotion: "Proud",
    options: ["Excited", "Proud", "Happy", "Nervous"],
    context: "This child just completed a difficult puzzle.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=400&width=600&query=child with frustrated expression, cartoon",
    emotion: "Frustrated",
    options: ["Angry", "Sad", "Frustrated", "Scared"],
    context: "This child is having trouble with a math problem.",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=400&width=600&query=child with nervous expression, cartoon",
    emotion: "Nervous",
    options: ["Excited", "Nervous", "Shy", "Sad"],
    context: "This child is about to perform in the school play.",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=400&width=600&query=child with happy expression, cartoon",
    emotion: "Happy",
    options: ["Happy", "Excited", "Proud", "Content"],
    context: "This child is playing with friends at the park.",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=400&width=600&query=child with confused expression, cartoon",
    emotion: "Confused",
    options: ["Thinking", "Confused", "Worried", "Curious"],
    context: "This child doesn't understand the instructions for a game.",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=400&width=600&query=child with sad expression, cartoon",
    emotion: "Sad",
    options: ["Disappointed", "Lonely", "Sad", "Tired"],
    context: "This child's friend moved away to another city.",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=400&width=600&query=child with excited expression, cartoon",
    emotion: "Excited",
    options: ["Happy", "Surprised", "Excited", "Proud"],
    context: "This child is going to an amusement park tomorrow.",
  },
]

export function EmotionDetectiveGame() {
  const [currentScenario, setCurrentScenario] = useState<EmotionScenario | null>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [remainingScenarios, setRemainingScenarios] = useState<EmotionScenario[]>([])
  const [showContext, setShowContext] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  // Initialize or reset the game
  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    // Shuffle scenarios and select a subset
    const shuffled = [...scenarios].sort(() => 0.5 - Math.random())
    setRemainingScenarios(shuffled)
    setCurrentScenario(shuffled[0])
    setSelectedOption(null)
    setIsCorrect(null)
    setScore(0)
    setQuestionsAnswered(0)
    setShowContext(false)
    setGameComplete(false)
  }

  const handleOptionSelect = (option: string) => {
    if (selectedOption !== null) return // Prevent multiple selections

    setSelectedOption(option)
    const correct = option === currentScenario?.emotion
    setIsCorrect(correct)

    if (correct) {
      setScore(score + 1)
    }

    // Show context after selection
    setShowContext(true)
  }

  const handleNextQuestion = () => {
    const newQuestionsAnswered = questionsAnswered + 1
    setQuestionsAnswered(newQuestionsAnswered)

    // Remove current scenario from remaining
    const newRemaining = remainingScenarios.slice(1)
    setRemainingScenarios(newRemaining)

    // Check if game is complete
    if (newQuestionsAnswered >= 5 || newRemaining.length === 0) {
      setGameComplete(true)
      return
    }

    // Set next scenario
    setCurrentScenario(newRemaining[0])
    setSelectedOption(null)
    setIsCorrect(null)
    setShowContext(false)
  }

  if (gameComplete) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold mb-4">Game Complete!</h3>
        <p className="text-xl mb-6">
          You scored {score} out of {questionsAnswered}
        </p>

        {score === questionsAnswered ? (
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-lg">Amazing job! You're an emotion detective master!</p>
          </div>
        ) : score >= questionsAnswered / 2 ? (
          <div className="mb-6">
            <p className="text-lg">Good job! You're getting better at recognizing emotions.</p>
          </div>
        ) : (
          <div className="mb-6">
            <p className="text-lg">Keep practicing! Recognizing emotions takes time to learn.</p>
          </div>
        )}

        <button
          onClick={resetGame}
          className="px-6 py-3 bg-[#007B5F] text-white rounded-md hover:bg-[#006A50] transition-colors"
        >
          Play Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-medium">Question {questionsAnswered + 1} of 5</div>
        <div className="text-lg font-medium">Score: {score}</div>
      </div>

      {currentScenario && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image
              src={currentScenario.image || "/placeholder.svg"}
              alt="Emotion scenario"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">What emotion is this person feeling?</h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {currentScenario.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  disabled={selectedOption !== null}
                  className={`p-3 rounded-md text-lg font-medium transition-all ${
                    selectedOption === option
                      ? option === currentScenario.emotion
                        ? "bg-green-100 border-green-500 border-2"
                        : "bg-red-100 border-red-500 border-2"
                      : "bg-white border border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedOption && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-100" : "bg-red-100"}`}
              >
                <div className="flex items-center gap-3">
                  {isCorrect ? <Check className="h-6 w-6 text-green-600" /> : <X className="h-6 w-6 text-red-600" />}
                  <p className="font-medium">
                    {isCorrect ? "That's correct!" : `Not quite. The emotion is ${currentScenario.emotion}.`}
                  </p>
                </div>

                {showContext && <p className="mt-2 text-gray-700">Context: {currentScenario.context}</p>}
              </motion.div>
            )}

            {selectedOption && (
              <button
                onClick={handleNextQuestion}
                className="w-full py-3 bg-[#007B5F] text-white rounded-md hover:bg-[#006A50] transition-colors flex items-center justify-center"
              >
                Next Question <ChevronRight className="ml-1 h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
