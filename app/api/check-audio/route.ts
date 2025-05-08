import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase-server"
import fs from "fs"
import path from "path"

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const audioPath = url.searchParams.get("path")

    if (!audioPath) {
      return NextResponse.json({ exists: false, error: "No path provided" }, { status: 400 })
    }

    // Remove leading slash if present
    const normalizedPath = audioPath.startsWith("/") ? audioPath.substring(1) : audioPath

    // Check if file exists in public directory
    const fullPath = path.join(process.cwd(), "public", normalizedPath)

    let exists = false
    try {
      // Check if file exists and is accessible
      await fs.promises.access(fullPath, fs.constants.F_OK)
      exists = true
    } catch (error) {
      exists = false
    }

    // If file doesn't exist, update the database to mark it as unavailable
    if (!exists && audioPath.includes("/audio/grimm/")) {
      const supabase = createServerClient()
      const filename = path.basename(audioPath)
      const taleTitle = filename.replace(".mp3", "").split("-").join(" ")

      // Update the tale to mark audio as unavailable
      await supabase.from("grimm_tales").update({ audio_url: null }).ilike("title", `%${taleTitle}%`)
    }

    return NextResponse.json({ exists, path: audioPath })
  } catch (error) {
    console.error("Error checking audio file:", error)
    return NextResponse.json({ exists: false, error: "Server error" }, { status: 500 })
  }
}
