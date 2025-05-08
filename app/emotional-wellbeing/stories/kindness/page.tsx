import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function KindnessStoryPage() {
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
              <Image src="/placeholder.svg?key=avsat" alt="Being Kind" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">The Power of Kindness</h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  It was the first day at a new school for Omar, and his stomach felt like it was tied in knots.
                  Everything was unfamiliar—the hallways, the classrooms, the faces. He missed his old school and his
                  old friends.
                </p>

                <p>
                  At lunchtime, Omar sat alone at the end of a long table. He unwrapped his sandwich slowly, not feeling
                  very hungry. He watched the other kids chatting and laughing together, feeling invisible.
                </p>

                <p>
                  A few tables away, Ellie noticed the new boy sitting by himself. She remembered how she had felt on
                  her first day last year—scared and lonely. She had promised herself that if she ever saw someone
                  feeling that way, she would do something about it.
                </p>

                <p>
                  Ellie picked up her lunch tray and walked over to Omar's table. "Hi, I'm Ellie," she said with a
                  friendly smile. "Can I sit with you?"
                </p>

                <p>Omar looked up, surprised. "Sure," he said. "I'm Omar."</p>

                <p>"Are you new here?" Ellie asked, though she already knew the answer.</p>

                <p>Omar nodded. "We moved here last week. This is my first day."</p>

                <p>
                  "First days can be tough," Ellie said. "I was new last year. Do you want me to show you around after
                  lunch?"
                </p>

                <p>Omar felt the knot in his stomach loosen a little. "That would be great," he said.</p>

                <p>
                  As they ate, Ellie told Omar about the school—which teachers were nice, which days had the best lunch
                  options, and where the best spot was to read during free time. Omar found himself smiling for the
                  first time that day.
                </p>

                <p>
                  After lunch, Ellie introduced Omar to some of her friends. They invited him to play basketball with
                  them at recess. Omar wasn't very good at basketball, but no one seemed to mind. They just encouraged
                  him and cheered when he finally made a basket.
                </p>

                <p>
                  On the bus ride home, Omar thought about how different the day had turned out from what he had
                  expected. One small act of kindness from Ellie had changed everything.
                </p>

                <p>
                  The next morning, Omar spotted a girl he hadn't seen before, looking lost in the hallway. She was
                  clutching her schedule and glancing around nervously.
                </p>

                <p>
                  Without hesitation, Omar walked over to her. "Hi, I'm Omar," he said. "Are you trying to find your
                  classroom?"
                </p>

                <p>
                  The girl nodded, relief washing over her face. "I'm Mei. It's my first day, and I can't find Room 23."
                </p>

                <p>"I know where that is," Omar said. "I can show you. I was new yesterday, so I know how it feels."</p>

                <p>
                  As they walked to her classroom, Omar realized something important: kindness wasn't just about making
                  others feel better—it made him feel better too. There was a warm glow in his chest, a feeling of
                  connection and purpose.
                </p>

                <p>
                  At lunch, Omar invited Mei to sit with him and Ellie. Soon, their table was full of laughter and
                  conversation.
                </p>

                <p>
                  "You know what my grandma always says?" Ellie told the group. "She says kindness is like a
                  boomerang—it always comes back to you."
                </p>

                <p>
                  Omar thought about how Ellie's kindness had come back to her through his kindness to Mei. It was like
                  a chain reaction, spreading from person to person.
                </p>

                <p>
                  That evening, when Omar's mom asked about his day, he told her about Ellie and Mei and the basketball
                  game.
                </p>

                <p>"It sounds like you've made some good friends," his mom said.</p>

                <p>"I have," Omar agreed. "And I learned something important too."</p>

                <p>"What's that?" his mom asked.</p>

                <p>
                  Omar thought for a moment. "I learned that kindness has power," he said. "It can change a bad day into
                  a good one. It can turn strangers into friends. And the best part is, anyone can do it."
                </p>

                <p>His mom smiled. "That's a pretty big lesson for your second day of school."</p>

                <p>Omar grinned. "I can't wait to see what I'll learn tomorrow."</p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>How did Omar feel on his first day at the new school?</li>
                  <li>What did Ellie do that was kind?</li>
                  <li>How did Ellie's kindness affect Omar?</li>
                  <li>What did Omar do when he saw Mei looking lost?</li>
                  <li>What did Omar mean when he said "kindness has power"?</li>
                  <li>Have you ever experienced kindness from someone when you needed it?</li>
                  <li>Have you ever shown kindness to someone else? How did it make you feel?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Create a "Kindness Chain": Write acts of kindness on strips of paper and link them together</li>
                  <li>
                    Make "Kindness Coupons" to give to family and friends (e.g., "Good for one hug" or "I'll help with a
                    chore")
                  </li>
                  <li>
                    Start a classroom "Kindness Jar": When someone sees an act of kindness, they write it down and put
                    it in the jar
                  </li>
                  <li>Draw a "Kindness Ripple Effect" showing how one kind act can spread to many people</li>
                  <li>Create a "Kindness Calendar" with a small act of kindness to perform each day</li>
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
