import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function AngryStoryPage() {
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
              <Image src="/placeholder.svg?key=oorvn" alt="Feeling Angry" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Managing Anger</h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  Zach was building a tall tower with his blocks. He had been working on it all morning, and it was
                  almost as tall as he was! He carefully placed each block, making sure the tower was steady.
                </p>

                <p>
                  Just as Zach was about to place the final block on top, his little sister Emma came running into the
                  room. She didn't see the tower and bumped right into it. CRASH! All the blocks tumbled down.
                </p>

                <p>
                  Zach felt his face get hot. His hands made tight fists, and his heart started beating fast. He was
                  angry—really, really angry.
                </p>

                <p>"You ruined my tower!" he shouted. "I worked so hard on it!"</p>

                <p>Emma's eyes filled with tears. "I'm sorry," she said in a small voice. "I didn't see it."</p>

                <p>
                  Zach wanted to yell more, but then he remembered what his teacher had taught him about the "anger
                  volcano." When you feel angry, it's like hot lava building up inside you, ready to explode. But you
                  can learn to cool down the lava.
                </p>

                <p>
                  Zach took a deep breath in through his nose, and then slowly blew it out through his mouth, like he
                  was cooling down hot soup. He did this three times.
                </p>

                <p>Then he counted to five in his head. 1... 2... 3... 4... 5...</p>

                <p>
                  Zach could feel his body starting to calm down. His fists unclenched, and his face didn't feel so hot
                  anymore.
                </p>

                <p>"It's okay, Emma," he said finally. "It was an accident. You didn't mean to knock it down."</p>

                <p>Emma wiped her tears. "Can I help you build it again?" she asked.</p>

                <p>
                  Zach thought for a moment. "Sure," he said. "But this time, let's build it in the corner where no one
                  will bump into it."
                </p>

                <p>
                  As they rebuilt the tower together, Zach's dad came into the room. "I saw what happened," he said.
                  "Zach, I'm really proud of how you handled your anger. That was very mature."
                </p>

                <p>"I remembered to cool down my anger volcano," Zach explained.</p>

                <p>
                  "That's a great strategy," Dad said. "Everyone feels angry sometimes, but it's how we handle our anger
                  that matters."
                </p>

                <p>
                  "And look, Dad!" Zach said excitedly. "Our new tower is even better because Emma helped me build it."
                </p>

                <p>
                  Dad smiled. "Sometimes good things can come from difficult situations when we manage our emotions
                  well."
                </p>

                <p>
                  Zach nodded. He still felt a little disappointed about his first tower, but he was glad he hadn't let
                  his anger volcano erupt. And now he had a new, even better tower—and a happy little sister too.
                </p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>How did Zach's body feel when he got angry?</li>
                  <li>What did Zach do to calm down his "anger volcano"?</li>
                  <li>Have you ever felt really angry like Zach? What happened?</li>
                  <li>What are some ways you can calm down when you feel angry?</li>
                  <li>Why was it good that Zach calmed down instead of staying angry at Emma?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Draw your own "anger volcano" and write or draw things that help cool it down</li>
                  <li>Practice taking deep breaths when you feel strong emotions</li>
                  <li>Create a "calm down corner" with items that help you feel better when you're upset</li>
                  <li>Role-play different scenarios and practice using calming strategies</li>
                  <li>Make a list of words you can use to express your feelings when you're angry</li>
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
