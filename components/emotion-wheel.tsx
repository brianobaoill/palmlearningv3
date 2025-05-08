"use client"

import { useState } from "react"
import Image from "next/image"

// Define our emotion data structure
type EmotionDetail = {
  name: string
  description: string
  bodyFeelings: string[]
  healthyExpressions: string[]
  relatedEmotions: string[]
  color: string
  image: string
}

type EmotionCategory = {
  name: string
  color: string
  emotions: EmotionDetail[]
}

// Define our emotion data
const emotionData: EmotionCategory[] = [
  {
    name: "Joy",
    color: "#FFD166",
    emotions: [
      {
        name: "Happy",
        description: "A feeling of pleasure and contentment",
        bodyFeelings: ["Smiling", "Warm chest", "Relaxed muscles", "Energy"],
        healthyExpressions: ["Laugh", "Share with others", "Dance", "Say thank you"],
        relatedEmotions: ["Content", "Pleased", "Cheerful"],
        color: "#FFD166",
        image: "/placeholder.svg?key=a6ee5",
      },
      {
        name: "Excited",
        description: "Full of energy and enthusiasm",
        bodyFeelings: ["Fast heartbeat", "Butterflies", "Fidgety", "Wide eyes"],
        healthyExpressions: ["Jump up and down", "Share your excitement", "Channel energy into activity"],
        relatedEmotions: ["Thrilled", "Eager", "Enthusiastic"],
        color: "#FFD166",
        image: "/placeholder.svg?key=ki4s9",
      },
      {
        name: "Proud",
        description: "Feeling good about an achievement",
        bodyFeelings: ["Standing tall", "Warm chest", "Smiling", "Relaxed"],
        healthyExpressions: ["Share accomplishments", "Thank those who helped", "Celebrate appropriately"],
        relatedEmotions: ["Accomplished", "Confident", "Satisfied"],
        color: "#FFD166",
        image: "/placeholder.svg?key=uvatt",
      },
    ],
  },
  {
    name: "Love",
    color: "#EF476F",
    emotions: [
      {
        name: "Caring",
        description: "Feeling concern and affection for others",
        bodyFeelings: ["Warm heart", "Relaxed", "Gentle touch", "Soft voice"],
        healthyExpressions: ["Help others", "Show kindness", "Listen", "Give compliments"],
        relatedEmotions: ["Affectionate", "Tender", "Compassionate"],
        color: "#EF476F",
        image: "/placeholder.svg?key=fs9hm",
      },
      {
        name: "Grateful",
        description: "Feeling thankful for something or someone",
        bodyFeelings: ["Warm chest", "Relaxed shoulders", "Smiling", "Calm breathing"],
        healthyExpressions: ["Say thank you", "Write thank you notes", "Do something nice in return"],
        relatedEmotions: ["Thankful", "Appreciative", "Blessed"],
        color: "#EF476F",
        image: "/placeholder.svg?key=hwlbp",
      },
      {
        name: "Friendly",
        description: "Feeling kind and welcoming toward others",
        bodyFeelings: ["Smiling", "Relaxed posture", "Open arms", "Warm"],
        healthyExpressions: ["Invite others to play", "Share", "Ask questions", "Listen"],
        relatedEmotions: ["Welcoming", "Kind", "Sociable"],
        color: "#EF476F",
        image: "/placeholder.svg?height=100&width=100&query=friendly child face cartoon",
      },
    ],
  },
  {
    name: "Surprise",
    color: "#06D6A0",
    emotions: [
      {
        name: "Amazed",
        description: "Feeling wonder or astonishment",
        bodyFeelings: ["Wide eyes", "Open mouth", "Raised eyebrows", "Frozen in place"],
        healthyExpressions: ["Say 'wow!'", "Ask questions", "Share with others", "Take a photo"],
        relatedEmotions: ["Awestruck", "Stunned", "Impressed"],
        color: "#06D6A0",
        image: "/placeholder.svg?height=100&width=100&query=amazed child face cartoon",
      },
      {
        name: "Confused",
        description: "Not understanding something",
        bodyFeelings: ["Furrowed brow", "Head tilt", "Tense shoulders", "Squinting"],
        healthyExpressions: ["Ask questions", "Say 'I don't understand'", "Ask for help"],
        relatedEmotions: ["Puzzled", "Perplexed", "Uncertain"],
        color: "#06D6A0",
        image: "/placeholder.svg?height=100&width=100&query=confused child face cartoon",
      },
      {
        name: "Curious",
        description: "Wanting to learn or know more",
        bodyFeelings: ["Leaning forward", "Wide eyes", "Alert", "Energetic"],
        healthyExpressions: ["Ask questions", "Explore", "Research", "Try new things"],
        relatedEmotions: ["Interested", "Inquisitive", "Wondering"],
        color: "#06D6A0",
        image: "/placeholder.svg?height=100&width=100&query=curious child face cartoon",
      },
    ],
  },
  {
    name: "Disgust",
    color: "#7CB518",
    emotions: [
      {
        name: "Grossed Out",
        description: "Feeling repulsed by something unpleasant",
        bodyFeelings: ["Wrinkled nose", "Queasy stomach", "Pulling back", "Frowning"],
        healthyExpressions: ["Say 'that's gross'", "Move away", "Wash hands", "Take deep breaths"],
        relatedEmotions: ["Revolted", "Disgusted", "Repulsed"],
        color: "#7CB518",
        image: "/placeholder.svg?height=100&width=100&query=grossed out child face cartoon",
      },
      {
        name: "Uncomfortable",
        description: "Feeling uneasy or awkward",
        bodyFeelings: ["Fidgeting", "Tense muscles", "Looking away", "Crossed arms"],
        healthyExpressions: ["Change position", "Ask for space", "Take a break", "Talk about it"],
        relatedEmotions: ["Awkward", "Uneasy", "Bothered"],
        color: "#7CB518",
        image: "/placeholder.svg?height=100&width=100&query=uncomfortable child face cartoon",
      },
      {
        name: "Dislike",
        description: "Not enjoying or approving of something",
        bodyFeelings: ["Frowning", "Turning away", "Crossed arms", "Tense jaw"],
        healthyExpressions: ["Say 'I don't like this'", "Make a different choice", "Explain your preference"],
        relatedEmotions: ["Averse", "Disapproving", "Uninterested"],
        color: "#7CB518",
        image: "/placeholder.svg?height=100&width=100&query=dislike child face cartoon",
      },
    ],
  },
  {
    name: "Anger",
    color: "#E63946",
    emotions: [
      {
        name: "Mad",
        description: "Feeling upset or annoyed",
        bodyFeelings: ["Hot face", "Tight muscles", "Fast heartbeat", "Clenched fists"],
        healthyExpressions: ["Take deep breaths", "Count to 10", "Use 'I feel' statements", "Take a break"],
        relatedEmotions: ["Annoyed", "Irritated", "Frustrated"],
        color: "#E63946",
        image: "/placeholder.svg?height=100&width=100&query=mad child face cartoon",
      },
      {
        name: "Annoyed",
        description: "Feeling slightly angry or impatient about something",
        bodyFeelings: ["Tight jaw", "Frowning", "Crossed arms", "Sighing"],
        healthyExpressions: ["Take a deep breath", "Say how you feel", "Ask for what you need", "Take space"],
        relatedEmotions: ["Irritated", "Bothered", "Agitated"],
        color: "#E63946",
        image: "/placeholder.svg?height=100&width=100&query=annoyed child face cartoon",
      },
      {
        name: "Frustrated",
        description: "Feeling stuck or unable to succeed",
        bodyFeelings: ["Tense jaw", "Tight chest", "Restless", "Warm body"],
        healthyExpressions: ["Ask for help", "Take a break", "Try a different approach", "Deep breathing"],
        relatedEmotions: ["Stuck", "Blocked", "Impatient"],
        color: "#E63946",
        image: "/placeholder.svg?height=100&width=100&query=frustrated child face cartoon",
      },
      {
        name: "Jealous",
        description: "Wanting what someone else has",
        bodyFeelings: ["Tight chest", "Frowning", "Crossed arms", "Tense"],
        healthyExpressions: ["Name the feeling", "Focus on gratitude", "Set goals", "Talk about it"],
        relatedEmotions: ["Envious", "Resentful", "Competitive"],
        color: "#E63946",
        image: "/placeholder.svg?height=100&width=100&query=jealous child face cartoon",
      },
    ],
  },
  {
    name: "Sadness",
    color: "#118AB2",
    emotions: [
      {
        name: "Sad",
        description: "Feeling unhappy or down",
        bodyFeelings: ["Heavy chest", "Tired body", "Teary eyes", "Droopy shoulders"],
        healthyExpressions: ["Cry if needed", "Talk about feelings", "Ask for a hug", "Do a calm activity"],
        relatedEmotions: ["Unhappy", "Down", "Blue"],
        color: "#118AB2",
        image: "/placeholder.svg?height=100&width=100&query=sad child face cartoon",
      },
      {
        name: "Disappointed",
        description: "Feeling let down when something doesn't work out",
        bodyFeelings: ["Sinking feeling", "Slumped shoulders", "Heavy sighs", "Low energy"],
        healthyExpressions: ["Talk about it", "Make a new plan", "Focus on what went well", "Try again"],
        relatedEmotions: ["Let down", "Disheartened", "Bummed out"],
        color: "#118AB2",
        image: "/placeholder.svg?height=100&width=100&query=disappointed child face cartoon",
      },
      {
        name: "Lonely",
        description: "Feeling alone or without friends",
        bodyFeelings: ["Empty feeling", "Heavy heart", "Tired", "Quiet"],
        healthyExpressions: ["Reach out to someone", "Join a group activity", "Talk to a trusted adult"],
        relatedEmotions: ["Isolated", "Left out", "Abandoned"],
        color: "#118AB2",
        image: "/placeholder.svg?height=100&width=100&query=lonely child face cartoon",
      },
    ],
  },
  {
    name: "Fear",
    color: "#8338EC",
    emotions: [
      {
        name: "Scared",
        description: "Feeling afraid of something",
        bodyFeelings: ["Racing heart", "Shaky", "Sweaty", "Tight muscles"],
        healthyExpressions: ["Take deep breaths", "Talk about fears", "Ask for help", "Use brave self-talk"],
        relatedEmotions: ["Afraid", "Frightened", "Terrified"],
        color: "#8338EC",
        image: "/placeholder.svg?height=100&width=100&query=scared child face cartoon",
      },
      {
        name: "Nervous",
        description: "Feeling worried about what might happen",
        bodyFeelings: ["Butterflies in stomach", "Fidgety", "Fast breathing", "Sweaty palms"],
        healthyExpressions: ["Deep breathing", "Prepare and practice", "Talk about worries", "Positive self-talk"],
        relatedEmotions: ["Anxious", "Worried", "Uneasy"],
        color: "#8338EC",
        image: "/placeholder.svg?height=100&width=100&query=nervous child face cartoon",
      },
      {
        name: "Shy",
        description: "Feeling uncomfortable around others",
        bodyFeelings: ["Warm face", "Looking down", "Quiet voice", "Tense body"],
        healthyExpressions: ["Start with small interactions", "Practice what to say", "Join familiar groups"],
        relatedEmotions: ["Timid", "Reserved", "Hesitant"],
        color: "#8338EC",
        image: "/placeholder.svg?height=100&width=100&query=shy child face cartoon",
      },
    ],
  },
  {
    name: "Calm",
    color: "#4D908E",
    emotions: [
      {
        name: "Peaceful",
        description: "Feeling quiet and at ease",
        bodyFeelings: ["Slow breathing", "Relaxed muscles", "Warm body", "Soft smile"],
        healthyExpressions: ["Enjoy the moment", "Meditate", "Rest", "Gentle activities"],
        relatedEmotions: ["Serene", "Tranquil", "At ease"],
        color: "#4D908E",
        image: "/placeholder.svg?height=100&width=100&query=peaceful child face cartoon",
      },
      {
        name: "Content",
        description: "Feeling satisfied and comfortable",
        bodyFeelings: ["Relaxed posture", "Steady breathing", "Warm feeling", "Gentle smile"],
        healthyExpressions: ["Express gratitude", "Notice good things", "Share your contentment"],
        relatedEmotions: ["Satisfied", "Comfortable", "Fulfilled"],
        color: "#4D908E",
        image: "/placeholder.svg?height=100&width=100&query=content child face cartoon",
      },
      {
        name: "Relaxed",
        description: "Feeling free from tension and worry",
        bodyFeelings: ["Loose muscles", "Slow heartbeat", "Deep breathing", "Heavy limbs"],
        healthyExpressions: ["Rest", "Gentle stretching", "Quiet activities", "Enjoy nature"],
        relatedEmotions: ["Mellow", "Chilled", "Unwound"],
        color: "#4D908E",
        image: "/placeholder.svg?height=100&width=100&query=relaxed child face cartoon",
      },
    ],
  },
  {
    name: "Trust",
    color: "#F9C74F",
    emotions: [
      {
        name: "Safe",
        description: "Feeling protected and secure",
        bodyFeelings: ["Relaxed shoulders", "Open posture", "Steady breathing", "Warm chest"],
        healthyExpressions: ["Share feelings", "Try new things", "Ask for help when needed"],
        relatedEmotions: ["Secure", "Protected", "Sheltered"],
        color: "#F9C74F",
        image: "/placeholder.svg?height=100&width=100&query=safe child face cartoon",
      },
      {
        name: "Brave",
        description: "Feeling courageous despite fear",
        bodyFeelings: ["Tall posture", "Deep breaths", "Steady hands", "Forward-facing"],
        healthyExpressions: ["Try challenging things", "Speak up", "Help others", "Take healthy risks"],
        relatedEmotions: ["Courageous", "Bold", "Confident"],
        color: "#F9C74F",
        image: "/placeholder.svg?height=100&width=100&query=brave child face cartoon",
      },
      {
        name: "Hopeful",
        description: "Feeling positive about the future",
        bodyFeelings: ["Light chest", "Smiling", "Energetic", "Relaxed face"],
        healthyExpressions: ["Make plans", "Set goals", "Share hopes", "Take positive steps"],
        relatedEmotions: ["Optimistic", "Encouraged", "Positive"],
        color: "#F9C74F",
        image: "/placeholder.svg?height=100&width=100&query=hopeful child face cartoon",
      },
    ],
  },
]

export function EmotionWheel() {
  const [selectedCategory, setSelectedCategory] = useState<EmotionCategory | null>(null)
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionDetail | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryClick = (category: EmotionCategory) => {
    setSelectedCategory(category)
    setSelectedEmotion(null)
    setIsOpen(true)
  }

  const handleEmotionClick = (emotion: EmotionDetail) => {
    setSelectedEmotion(emotion)
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => {
      setSelectedCategory(null)
      setSelectedEmotion(null)
    }, 300)
  }

  return (
    <div className="flex flex-col items-center">
      {/* Simple grid-based emotion wheel */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
        {emotionData.map((category) => (
          <div
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className="rounded-lg p-4 text-center cursor-pointer transition-transform hover:scale-105 shadow-md"
            style={{ backgroundColor: category.color }}
          >
            <h3 className="text-white font-bold text-lg">{category.name}</h3>
            <p className="text-white text-sm mt-1">
              {category.emotions
                .map((e) => e.name)
                .slice(0, 2)
                .join(", ")}
              {category.emotions.length > 2 ? "..." : ""}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for selected category */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold" style={{ color: selectedCategory?.color }}>
                  {selectedCategory?.name} Emotions
                </h2>
                <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedCategory?.emotions.map((emotion) => (
                  <div
                    key={emotion.name}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedEmotion?.name === emotion.name ? "ring-2 ring-offset-2 shadow-md" : "hover:shadow-md"
                    }`}
                    style={{
                      backgroundColor: `${emotion.color}20`,
                      borderColor: emotion.color,
                      ringColor: emotion.color,
                    }}
                    onClick={() => handleEmotionClick(emotion)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={emotion.image || "/placeholder.svg"}
                          alt={emotion.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{emotion.name}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {selectedEmotion ? (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={selectedEmotion.image || "/placeholder.svg"}
                        alt={selectedEmotion.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{selectedEmotion.name}</h3>
                      <p className="text-gray-700">{selectedEmotion.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">How it feels in your body</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {selectedEmotion.bodyFeelings.map((feeling, index) => (
                          <li key={index}>{feeling}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Healthy ways to express it</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {selectedEmotion.healthyExpressions.map((expression, index) => (
                          <li key={index}>{expression}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Related feelings</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEmotion.relatedEmotions.map((related, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              backgroundColor: `${selectedEmotion.color}30`,
                              color: "black",
                            }}
                          >
                            {related}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-2">Activity Idea</h4>
                    <p className="text-gray-700">
                      Draw a picture of a time when you felt {selectedEmotion.name.toLowerCase()}. What happened? How
                      did your body feel? What did you do?
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-gray-700">Click on an emotion above to learn more about it.</p>
                </div>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
