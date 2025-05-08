import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ProudStoryPage() {
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
              <Image src="/placeholder.svg?key=hdheg" alt="Feeling Proud" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Growing Confidence</h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  Mia stared at the bicycle with its shiny blue frame and silver handlebars. It was her birthday
                  present, and it was perfect—except for one thing. It didn't have training wheels.
                </p>

                <p>"I can't ride it," Mia told her dad. "I'll fall."</p>

                <p>
                  "You might fall," Dad agreed. "Most people do when they're learning something new. But I'll be right
                  beside you, holding on until you're ready."
                </p>

                <p>Mia shook her head. "I'm not good at new things," she said quietly.</p>

                <p>
                  Dad sat down next to her. "Can I tell you a secret?" he asked. "No one is good at new things right
                  away. Being good at something takes practice and persistence."
                </p>

                <p>"What's persistence?" Mia asked.</p>

                <p>
                  "It means you keep trying, even when it's hard," Dad explained. "Remember when you learned to tie your
                  shoes? You didn't get it right the first time, or even the tenth time. But you kept practicing, and
                  now you can do it easily."
                </p>

                <p>
                  Mia thought about this. She had forgotten how hard it was to learn to tie her shoes. Now she could do
                  it without even thinking about it.
                </p>

                <p>
                  "How about we just try sitting on the bike today?" Dad suggested. "We don't have to go anywhere. Just
                  get a feel for it."
                </p>

                <p>That didn't sound too scary. Mia nodded.</p>

                <p>
                  They took the bike to the driveway, and Mia sat on the seat while Dad held the bike steady. It felt
                  higher than she expected, but also exciting.
                </p>

                <p>"Good job," Dad said. "Want to try putting your feet on the pedals?"</p>

                <p>
                  Mia did, and Dad showed her how to use the brakes. They practiced just sitting and braking for a
                  while.
                </p>

                <p>"I think I'm ready to try moving a little," Mia said finally.</p>

                <p>"That's my brave girl," Dad smiled. "I'll hold onto the back of the seat and run alongside you."</p>

                <p>
                  Mia pedaled slowly while Dad jogged beside her, keeping the bike steady. They went up and down the
                  driveway several times.
                </p>

                <p>"You're doing great!" Dad encouraged her. "I'm going to hold on with just one hand now."</p>

                <p>Mia felt a flutter of nervousness but kept pedaling. She was doing it!</p>

                <p>
                  Over the next few days, they practiced a little each afternoon. Dad gradually held on less and less,
                  until one day he was just resting his fingertips on the bike.
                </p>

                <p>"I think you're ready to try on your own," he said. "I'll be right behind you."</p>

                <p>Mia took a deep breath. "Okay," she said. "I can do this."</p>

                <p>
                  She started pedaling, and after a moment, she realized Dad wasn't touching the bike anymore. She was
                  riding by herself! She wobbled a little but kept going.
                </p>

                <p>"I'm doing it!" she called excitedly. "Dad, look! I'm riding a bike!"</p>

                <p>"You sure are!" Dad cheered. "I'm so proud of you!"</p>

                <p>
                  Mia carefully used the brakes to stop, just like they had practiced. Her heart was racing, but not
                  from fear—from excitement.
                </p>

                <p>"I did it," she said, beaming. "I was scared, but I did it anyway."</p>

                <p>
                  "That's what courage is," Dad said. "Not the absence of fear, but doing something even though you're
                  afraid."
                </p>

                <p>"I feel proud of myself," Mia realized. It was a warm, glowing feeling in her chest.</p>

                <p>
                  "You should be proud," Dad said. "You set a goal, you worked hard, and you achieved it. That's
                  something to celebrate."
                </p>

                <p>
                  As they walked back to the house, Mia thought about what she had learned. It wasn't just how to ride a
                  bike—it was how to believe in herself, how to persist when things were difficult, and how good it felt
                  to accomplish something challenging.
                </p>

                <p>"Dad," she said, "what else can I learn to do?"</p>

                <p>Dad laughed. "The sky's the limit, Mia. The sky's the limit."</p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>Why was Mia afraid to ride the bike at first?</li>
                  <li>What did Mia's dad mean when he talked about "persistence"?</li>
                  <li>How did Mia and her dad break down the big task of learning to ride a bike?</li>
                  <li>Have you ever felt proud of yourself for accomplishing something difficult? What was it?</li>
                  <li>What are some things you'd like to learn to do, even if they seem challenging?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Create an "I Can" jar: write down things you've learned to do on slips of paper</li>
                  <li>Draw a "confidence ladder" with steps representing small goals that lead to a bigger goal</li>
                  <li>Make a list of positive self-talk phrases to use when trying something challenging</li>
                  <li>
                    Create a "Growth Mindset" poster with phrases like "I can learn new things" and "Mistakes help me
                    grow"
                  </li>
                  <li>Start a "Proud Moments" journal where you record achievements, big and small</li>
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
