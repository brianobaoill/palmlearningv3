import { createServerClient } from "@/lib/supabase-server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createServerClient()

    // Check if the demo teacher already exists by trying to sign in
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: "teacher@palmlearning.com",
      password: "password123",
    })

    // If sign in succeeds, the account already exists
    if (signInData?.user) {
      return NextResponse.json({
        message: "Demo teacher already exists",
        success: true,
        email: "teacher@palmlearning.com",
        password: "password123",
      })
    }

    // Create the demo teacher account
    const { data: authUser, error: authError } = await supabase.auth.signUp({
      email: "teacher@palmlearning.com",
      password: "password123",
      options: {
        data: {
          full_name: "Demo Teacher",
        },
      },
    })

    if (authError) {
      console.error("Auth error:", authError)
      return NextResponse.json({ error: authError.message, success: false }, { status: 500 })
    }

    // Auto-confirm the email (since we're in a demo)
    const { error: confirmError } = await supabase.auth.admin.updateUserById(authUser.user!.id, { email_confirm: true })

    if (confirmError) {
      console.error("Confirm error:", confirmError)
      // Continue anyway, as the user might still be able to log in
    }

    // Create a demo class
    const { data: classData, error: classError } = await supabase
      .from("classes")
      .insert([
        {
          name: "Demo Class",
          description: "A demo class for testing purposes",
          teacher_id: authUser.user!.id,
        },
      ])
      .select()

    if (classError) {
      console.error("Class error:", classError)
      return NextResponse.json({ error: classError.message, success: false }, { status: 500 })
    }

    // Create some demo students
    const students = [
      { first_name: "Alex", last_name: "Johnson", class_id: classData[0].id },
      { first_name: "Jamie", last_name: "Smith", class_id: classData[0].id },
      { first_name: "Taylor", last_name: "Brown", class_id: classData[0].id },
    ]

    const { data: studentData, error: studentError } = await supabase.from("students").insert(students).select()

    if (studentError) {
      console.error("Student error:", studentError)
      return NextResponse.json({ error: studentError.message, success: false }, { status: 500 })
    }

    // Create some demo check-ins
    const checkIns = []
    const moods = ["😊", "🙂", "😐", "🙁", "😢"]
    const reflections = [
      "I feel great today!",
      "I'm a bit tired but otherwise good.",
      "Just an average day.",
      "I'm feeling a bit sad today.",
      "I had a difficult morning.",
    ]

    // Create check-ins for each student over the past week
    for (const student of studentData) {
      for (let i = 0; i < 5; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)

        const moodIndex = Math.floor(Math.random() * moods.length)

        checkIns.push({
          student_id: student.id,
          mood: moods[moodIndex],
          reflection: i % 2 === 0 ? reflections[moodIndex] : null, // Only add reflection for some check-ins
          created_at: date.toISOString(),
        })
      }
    }

    const { error: checkInError } = await supabase.from("check_ins").insert(checkIns)

    if (checkInError) {
      console.error("Check-in error:", checkInError)
      return NextResponse.json({ error: checkInError.message, success: false }, { status: 500 })
    }

    return NextResponse.json({
      message: "Demo teacher account created successfully",
      email: "teacher@palmlearning.com",
      password: "password123",
      success: true,
    })
  } catch (error: any) {
    console.error("Error creating demo teacher:", error)
    return NextResponse.json(
      {
        error: error.message || "Failed to create demo teacher account",
        success: false,
      },
      { status: 500 },
    )
  }
}
