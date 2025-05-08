"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

const emotions = [
  { value: "happy", label: "Happy", emoji: "😊" },
  { value: "sad", label: "Sad", emoji: "😢" },
  { value: "angry", label: "Angry", emoji: "😠" },
  { value: "scared", label: "Scared", emoji: "😨" },
  { value: "excited", label: "Excited", emoji: "😃" },
  { value: "calm", label: "Calm", emoji: "😌" },
]

export default function CheckInForm() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log({ selectedEmotion, notes })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
        <div className="text-4xl mb-4">🌈</div>
        <h3 className="text-2xl font-bold mb-2">Thank you for checking in!</h3>
        <p className="text-gray-600 mb-4">
          It's important to recognize how we're feeling. Your teacher will see your check-in.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Check in again
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-3">How are you feeling today?</h3>
              <RadioGroup
                value={selectedEmotion || ""}
                onValueChange={setSelectedEmotion}
                className="grid grid-cols-3 gap-4"
              >
                {emotions.map((emotion) => (
                  <div key={emotion.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={emotion.value} id={emotion.value} className="peer sr-only" />
                    <Label
                      htmlFor={emotion.value}
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <span className="text-3xl mb-1">{emotion.emoji}</span>
                      <span className="text-sm font-normal">{emotion.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="notes" className="text-lg font-medium mb-3 block">
                Would you like to share anything else?
              </Label>
              <Textarea
                id="notes"
                placeholder="Type here..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button type="submit" className="w-full" disabled={!selectedEmotion}>
              Submit Check-In
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
