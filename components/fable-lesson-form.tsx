"use client"

import type React from "react"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/contexts/auth-context"
import { Plus, Minus, Save, Loader2 } from "lucide-react"

interface Fable {
  id: string
  title: string
  description: string
  moral: string
}

interface FableLessonFormProps {
  fable: Fable
  existingLesson?: {
    id: string
    title: string
    description: string
    discussion_questions: string[]
    activities: string[]
    learning_objectives: string[]
    emotional_themes: string[]
  }
  onSave?: () => void
}

export default function FableLessonForm({ fable, existingLesson, onSave }: FableLessonFormProps) {
  const { user } = useAuth()
  const [title, setTitle] = useState(existingLesson?.title || `Lesson Plan: ${fable.title}`)
  const [description, setDescription] = useState(existingLesson?.description || "")
  const [discussionQuestions, setDiscussionQuestions] = useState<string[]>(existingLesson?.discussion_questions || [""])
  const [activities, setActivities] = useState<string[]>(existingLesson?.activities || [""])
  const [learningObjectives, setLearningObjectives] = useState<string[]>(existingLesson?.learning_objectives || [""])
  const [emotionalThemes, setEmotionalThemes] = useState<string[]>(existingLesson?.emotional_themes || [""])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Helper function to handle array field updates
  const updateArrayField = (
    index: number,
    value: string,
    array: string[],
    setArray: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const newArray = [...array]
    newArray[index] = value
    setArray(newArray)
  }

  // Helper function to add a new item to an array field
  const addArrayItem = (array: string[], setArray: React.Dispatch<React.SetStateAction<string[]>>) => {
    setArray([...array, ""])
  }

  // Helper function to remove an item from an array field
  const removeArrayItem = (
    index: number,
    array: string[],
    setArray: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (array.length === 1) {
      setArray([""])
    } else {
      const newArray = array.filter((_, i) => i !== index)
      setArray(newArray)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      // Filter out empty strings from arrays
      const filteredQuestions = discussionQuestions.filter((q) => q.trim() !== "")
      const filteredActivities = activities.filter((a) => a.trim() !== "")
      const filteredObjectives = learningObjectives.filter((o) => o.trim() !== "")
      const filteredThemes = emotionalThemes.filter((t) => t.trim() !== "")

      const lessonData = {
        fable_id: fable.id,
        teacher_id: user.id,
        title,
        description,
        discussion_questions: filteredQuestions.length > 0 ? filteredQuestions : [""],
        activities: filteredActivities.length > 0 ? filteredActivities : [""],
        learning_objectives: filteredObjectives.length > 0 ? filteredObjectives : [""],
        emotional_themes: filteredThemes.length > 0 ? filteredThemes : [""],
      }

      if (existingLesson) {
        // Update existing lesson
        const { error } = await supabase.from("fable_lessons").update(lessonData).eq("id", existingLesson.id)

        if (error) throw error
      } else {
        // Create new lesson
        const { error } = await supabase.from("fable_lessons").insert([lessonData])

        if (error) throw error
      }

      setSuccess(true)
      if (onSave) onSave()
    } catch (error: any) {
      console.error("Error saving lesson:", error)
      setError(error.message || "An error occurred while saving the lesson")
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Lesson plan {existingLesson ? "updated" : "created"} successfully!
              </p>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Lesson Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Lesson Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
          placeholder="Briefly describe the lesson and its purpose..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Discussion Questions</label>
        {discussionQuestions.map((question, index) => (
          <div key={`question-${index}`} className="flex items-center mb-2">
            <input
              type="text"
              value={question}
              onChange={(e) => updateArrayField(index, e.target.value, discussionQuestions, setDiscussionQuestions)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
              placeholder="Enter a discussion question..."
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, discussionQuestions, setDiscussionQuestions)}
              className="ml-2 p-2 text-gray-400 hover:text-gray-600"
              aria-label="Remove question"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(discussionQuestions, setDiscussionQuestions)}
          className="mt-1 flex items-center text-sm text-[#007B5F] hover:text-[#006B4F]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Question
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Activities</label>
        {activities.map((activity, index) => (
          <div key={`activity-${index}`} className="flex items-center mb-2">
            <input
              type="text"
              value={activity}
              onChange={(e) => updateArrayField(index, e.target.value, activities, setActivities)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
              placeholder="Describe an activity related to the fable..."
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, activities, setActivities)}
              className="ml-2 p-2 text-gray-400 hover:text-gray-600"
              aria-label="Remove activity"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(activities, setActivities)}
          className="mt-1 flex items-center text-sm text-[#007B5F] hover:text-[#006B4F]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Activity
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Learning Objectives</label>
        {learningObjectives.map((objective, index) => (
          <div key={`objective-${index}`} className="flex items-center mb-2">
            <input
              type="text"
              value={objective}
              onChange={(e) => updateArrayField(index, e.target.value, learningObjectives, setLearningObjectives)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
              placeholder="Enter a learning objective..."
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, learningObjectives, setLearningObjectives)}
              className="ml-2 p-2 text-gray-400 hover:text-gray-600"
              aria-label="Remove objective"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(learningObjectives, setLearningObjectives)}
          className="mt-1 flex items-center text-sm text-[#007B5F] hover:text-[#006B4F]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Objective
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Emotional Themes</label>
        {emotionalThemes.map((theme, index) => (
          <div key={`theme-${index}`} className="flex items-center mb-2">
            <input
              type="text"
              value={theme}
              onChange={(e) => updateArrayField(index, e.target.value, emotionalThemes, setEmotionalThemes)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-[#007B5F] focus:ring-[#007B5F] sm:text-sm"
              placeholder="Enter an emotional theme (e.g., empathy, perseverance)..."
            />
            <button
              type="button"
              onClick={() => removeArrayItem(index, emotionalThemes, setEmotionalThemes)}
              className="ml-2 p-2 text-gray-400 hover:text-gray-600"
              aria-label="Remove theme"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addArrayItem(emotionalThemes, setEmotionalThemes)}
          className="mt-1 flex items-center text-sm text-[#007B5F] hover:text-[#006B4F]"
        >
          <Plus className="h-4 w-4 mr-1" /> Add Theme
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F] disabled:opacity-50"
        >
          {saving ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Lesson Plan
            </>
          )}
        </button>
      </div>
    </form>
  )
}
