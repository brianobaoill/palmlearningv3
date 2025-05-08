import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function AnxietyStoryPage() {
  return (
    <main className="min-h-screen bg-[#f9fafc]">
      <Header />

      <section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/emotional-wellbeing" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Emotional Wellbeing
          </Link>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <Image src="/placeholder.svg?key=m5h5w" alt="Feeling Anxious" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Calming Worries</h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  Lily couldn't sleep. Tomorrow was the first day at her new school, and her mind was buzzing with
                  worries. What if she couldn't find her classroom? What if the other kids didn't like her? What if the
                  work was too hard?
                </p>

                <p>
                  Her tummy felt fluttery, like there were butterflies inside. Her heart was beating fast, and she
                  couldn't seem to lie still.
                </p>

                <p>
                  Lily's mom came in to check on her. "Still awake, sweetie?" she asked, sitting on the edge of the bed.
                </p>

                <p>"I can't sleep," Lily said. "I'm worried about tomorrow."</p>

                <p>
                  "Ah, you're feeling anxious," Mom said, nodding. "That's a very normal feeling when something new is
                  happening."
                </p>

                <p>"What's anxious?" Lily asked.</p>

                <p>
                  "Anxious is when you feel worried or nervous about something that might happen," Mom explained. "It
                  can make your tummy feel funny or your heart beat fast. Sometimes it makes it hard to sleep or
                  concentrate."
                </p>

                <p>"That's exactly how I feel!" Lily said. "How did you know?"</p>

                <p>
                  Mom smiled. "Because everyone feels anxious sometimes, even grown-ups. I felt anxious on my first day
                  at my new job."
                </p>

                <p>"You did?" Lily was surprised. "What did you do?"</p>

                <p>"I have some special tricks for calming worries," Mom said. "Would you like to learn them?"</p>

                <p>Lily nodded eagerly.</p>

                <p>
                  "First, let's try some belly breathing," Mom said. "Put your hand on your tummy, like this." She
                  demonstrated, placing her hand on her stomach. "Now, breathe in slowly through your nose and feel your
                  tummy push out against your hand. Then breathe out slowly through your mouth and feel your tummy go
                  back in."
                </p>

                <p>
                  Lily tried it. In through the nose, out through the mouth. After a few breaths, she noticed her heart
                  wasn't beating as fast.
                </p>

                <p>
                  "Good job," Mom said. "Now, let's talk about those worries. Sometimes when we say our worries out
                  loud, they don't seem as big."
                </p>

                <p>Lily told Mom all her worries about the new school.</p>

                <p>
                  "Those are understandable worries," Mom said. "But let's think about what might actually happen.
                  Remember when we visited the school last week? We found your classroom together, and your teacher
                  seemed very nice."
                </p>

                <p>"That's true," Lily said.</p>

                <p>
                  "And remember how you made a friend at the park last month? You're good at making friends because
                  you're kind and you ask good questions."
                </p>

                <p>Lily smiled, remembering.</p>

                <p>
                  "And if the work is challenging, that's okay too. You can always ask for help. That's what teachers
                  are for."
                </p>

                <p>"I guess you're right," Lily said, feeling a little better.</p>

                <p>"One more trick," Mom said. "Let's imagine the best thing that could happen tomorrow."</p>

                <p>
                  Lily closed her eyes. "I could make a new friend. And maybe the teacher will read my favorite book.
                  And maybe they'll have chocolate milk at lunch!"
                </p>

                <p>Mom laughed. "That sounds like a wonderful day. Now, let's try those belly breaths again."</p>

                <p>Lily breathed slowly, in and out. The butterflies in her tummy were calmer now.</p>

                <p>
                  "Worries are like clouds," Mom said softly. "They come and go. But you have the power to make them
                  smaller."
                </p>

                <p>Lily yawned. She was feeling sleepy now. "Thanks, Mom," she murmured.</p>

                <p>"Sweet dreams, my brave girl," Mom said, kissing her forehead. "Tomorrow will be an adventure."</p>

                <p>
                  As Lily drifted off to sleep, she thought about making a new friend and having chocolate milk at
                  lunch. Maybe the new school wouldn't be so scary after all.
                </p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>How did Lily's body feel when she was anxious?</li>
                  <li>What were some of Lily's worries about the new school?</li>
                  <li>What tricks did Lily's mom teach her to calm her worries?</li>
                  <li>Have you ever felt worried about something new? What happened?</li>
                  <li>What helps you feel better when you're worried?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Practice belly breathing: put a stuffed animal on your tummy and watch it rise and fall</li>
                  <li>Draw a picture of your worries, then draw yourself being brave</li>
                  <li>
                    Create a "worry monster" that eats worries: write or draw worries on paper and feed them to the
                    monster
                  </li>
                  <li>Make a list of "what if" worries, then write a positive "what if" for each one</li>
                  <li>
                    Create a calm-down kit with items that help you feel peaceful (like a soft toy, a family photo, or a
                    favorite book)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
