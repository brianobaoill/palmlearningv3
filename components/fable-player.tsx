"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, AlertCircle } from "lucide-react"
import Image from "next/image"

interface FablePlayerProps {
  title: string
  audioUrl?: string
  imageUrl?: string
  duration: number
  onComplete?: () => void
}

export default function FablePlayer({ title, audioUrl, imageUrl, duration, onComplete }: FablePlayerProps) {
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
    if (audioUrl) {
      console.log("Setting up audio with URL:", audioUrl)

      // Create audio element if it doesn't exist
      if (!audioRef.current) {
        const audio = new Audio(audioUrl)

        audio.addEventListener("loadedmetadata", () => {
          console.log("Audio loaded successfully:", audioUrl)
          setAudioLoaded(true)
        })

        audio.addEventListener("timeupdate", () => {
          setCurrentTime(audio.currentTime)
        })

        audio.addEventListener("ended", () => {
          setIsPlaying(false)
          setCurrentTime(0)
          if (onComplete) {
            onComplete()
          }
        })

        audio.addEventListener("error", (e) => {
          console.error("Audio error:", e)
          setAudioError(true)
        })

        audioRef.current = audio
      } else {
        // Update source if audio element exists
        audioRef.current.src = audioUrl
        audioRef.current.load()
      }
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
    }
  }, [audioUrl, onComplete])

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Try to play and catch any errors
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              // Auto-play was prevented or there was an error
              console.error("Error playing audio:", error)
              setAudioError(true)
              setIsPlaying(false)
            })
        }
      }
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
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48 md:h-64 bg-gray-100">
        {imageUrl ? (
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">🎧</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-4">{title}</h2>
        </div>
      </div>

      <div className="p-6">
        {audioError ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Unable to play audio. The audio file may be missing or in an unsupported format.
                </p>
              </div>
            </div>
          </div>
        ) : !audioUrl ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Audio is not available for this fable. Please check back later.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{formatTime(currentTime)}</span>
              <span className="text-sm text-gray-600">{formatTime(duration)}</span>
            </div>

            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              disabled={!audioUrl || audioError}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#007B5F] disabled:opacity-50 disabled:cursor-not-allowed"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={toggleMute}
                disabled={!audioUrl || audioError}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-gray-600" />
                ) : (
                  <Volume2 className="h-5 w-5 text-gray-600" />
                )}
              </button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={skipBackward}
                  disabled={!audioUrl || audioError}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Skip backward 10 seconds"
                >
                  <SkipBack className="h-5 w-5 text-gray-600" />
                </button>

                <button
                  onClick={togglePlay}
                  disabled={!audioUrl || audioError}
                  className="p-4 rounded-full bg-[#007B5F] hover:bg-[#006B4F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
                </button>

                <button
                  onClick={skipForward}
                  disabled={!audioUrl || audioError}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Skip forward 10 seconds"
                >
                  <SkipForward className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="w-10"></div> {/* Empty div for balance */}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
