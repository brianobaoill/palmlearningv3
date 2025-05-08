"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"

interface GrimmTale {
  id: string
  title: string
  content: string
  audio_url?: string
  image_url?: string
}

interface GrimmTalePlayerProps {
  tale: GrimmTale
}

export default function GrimmTalePlayer({ tale }: GrimmTalePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Format time in MM:SS format
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Initialize audio element
  useEffect(() => {
    if (!tale.audio_url) {
      setAudioError(true)
      return
    }

    try {
      console.log("Setting up audio with URL:", tale.audio_url)

      // Create a new audio element each time to avoid stale references
      const audio = new Audio()

      // Set up event listeners before setting the source
      audio.addEventListener("loadedmetadata", () => {
        console.log("Audio loaded successfully")
        setAudioLoaded(true)
        setAudioError(false)
      })

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime)
      })

      audio.addEventListener("ended", () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })

      // Improved error handling
      audio.addEventListener("error", (e) => {
        console.error("Audio error code:", audio.error?.code)
        console.error("Audio error message:", audio.error?.message)
        console.error("Audio error details:", e)
        setAudioError(true)
        setIsPlaying(false)
      })

      // Set the source after adding event listeners
      audio.src = tale.audio_url
      audio.load()

      // Store the audio element in the ref
      audioRef.current = audio

      return () => {
        // Proper cleanup
        audio.pause()
        audio.src = ""
        audio.removeEventListener("loadedmetadata", () => {})
        audio.removeEventListener("timeupdate", () => {})
        audio.removeEventListener("ended", () => {})
        audio.removeEventListener("error", () => {})
        audioRef.current = null
      }
    } catch (error) {
      console.error("Error setting up audio:", error)
      setAudioError(true)
    }
  }, [tale.audio_url])

  // Add this effect to ensure proper cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current = null
      }
    }
  }, [])

  // Handle play/pause with better error handling
  const togglePlay = () => {
    if (!audioRef.current) {
      console.error("Audio element not initialized")
      setAudioError(true)
      return
    }

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Check if the audio is ready
        if (audioRef.current.readyState < 2) {
          console.log("Audio not ready yet, loading...")
          audioRef.current.load()
        }

        // Try to play and catch any errors
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playing successfully")
              setIsPlaying(true)
              setAudioError(false)
            })
            .catch((error) => {
              console.error("Error playing audio:", error)
              setAudioError(true)
              setIsPlaying(false)
            })
        }
      }
    } catch (error) {
      console.error("Unexpected error in togglePlay:", error)
      setAudioError(true)
      setIsPlaying(false)
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle seeking
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  // Skip backward 10 seconds
  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10)
    }
  }

  // Skip forward 10 seconds
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.duration || 0, audioRef.current.currentTime + 10)
    }
  }

  return (
    <div className="mb-8">
      <div className="prose max-w-none mb-6">
        <p>{tale.content}</p>
      </div>

      {tale.audio_url && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={skipBackward}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Skip backward"
              disabled={!tale.audio_url || audioError}
            >
              <SkipBack className="h-5 w-5 text-gray-700" />
            </button>

            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
              disabled={!tale.audio_url || audioError}
            >
              {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
            </button>

            <button
              onClick={skipForward}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Skip forward"
              disabled={!tale.audio_url || audioError}
            >
              <SkipForward className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          <div className="mt-4">
            <div className="h-2 bg-gray-300 rounded-full">
              <input
                type="range"
                min="0"
                max={audioRef.current ? audioRef.current.duration : 0}
                value={currentTime}
                onChange={handleSeek}
                disabled={!tale.audio_url || audioError}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007B5F] disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
