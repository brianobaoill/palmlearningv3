import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function HappyStoryPage() {
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
              <Image src="/placeholder.svg?key=i2bnu" alt="Feeling Happy" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Finding Joy</h1>

              <div className="prose prose-lg max-w-none">
                <p>"It's raining AGAIN," groaned Sam, looking out the window. "This is the worst day ever."</p>

                <p>
                  Sam's grandpa was visiting, and he chuckled from his armchair. "The worst day ever? That's quite a
                  statement."
                </p>

                <p>"But it is!" Sam insisted. "We were supposed to go to the park, and now we can't. And I'm bored."</p>

                <p>
                  Grandpa put down his book. "You know, Sam, when I was a boy, my grandmother taught me a special game.
                  It's called the Joy Treasure Hunt."
                </p>

                <p>Sam looked skeptical. "What kind of game is that?"</p>

                <p>
                  "It's a game where you look for little moments of joy, even on days that seem disappointing," Grandpa
                  explained. "Joy is all around us, but sometimes we have to be treasure hunters to find it."
                </p>

                <p>"How do you play?" Sam asked, a little curious despite himself.</p>

                <p>
                  "First, we need a Joy Journal," Grandpa said. He took a small notebook from his pocket. "I always
                  carry mine. Then, throughout the day, we write down or draw little things that bring us joy."
                </p>

                <p>"Like what?" Sam asked.</p>

                <p>
                  "Well, this morning I wrote down 'the smell of fresh coffee' and 'watching a robin build a nest
                  outside the kitchen window,'" Grandpa said. "They're small things, but they made me smile."
                </p>

                <p>Sam thought about this. "I don't think I can find anything joyful today," he said doubtfully.</p>

                <p>"Let's try together," Grandpa suggested. "I'll help you get started."</p>

                <p>
                  Sam's mom found them a small notebook, and Sam decorated the cover with the words "Sam's Joy Journal."
                </p>

                <p>
                  "Now, let's think," Grandpa said. "What's something that made you smile today, even for a moment?"
                </p>

                <p>
                  Sam thought hard. "Well... I did like the pancakes Mom made for breakfast. Especially with the
                  blueberries."
                </p>

                <p>"Perfect!" Grandpa said. "Write that down."</p>

                <p>Sam wrote: "Blueberry pancakes for breakfast."</p>

                <p>"What else?" Grandpa prompted.</p>

                <p>
                  "I guess... I was happy when Max (that's our dog) did that funny stretch when he woke up from his nap.
                  He looked like he was doing yoga!" Sam giggled at the memory.
                </p>

                <p>"That sounds joyful to me," Grandpa smiled. "Add it to your journal."</p>

                <p>
                  As the rainy day went on, Sam and Grandpa continued their Joy Treasure Hunt. They found joy in the
                  cozy sound of rain on the roof, in making hot chocolate with extra marshmallows, and in building a
                  blanket fort in the living room.
                </p>

                <p>
                  Later, when Mom suggested they bake cookies, Sam excitedly added "the smell of chocolate chip cookies
                  baking" to his journal.
                </p>

                <p>
                  By evening, Sam's journal had a whole page of joyful moments. He was surprised at how many he had
                  found.
                </p>

                <p>
                  "You know what, Grandpa?" Sam said as they sat by the window, watching the rain turn the sunset into a
                  spectacular show of colors. "This wasn't the worst day ever after all."
                </p>

                <p>"What was your favorite joy treasure today?" Grandpa asked.</p>

                <p>
                  Sam thought for a moment. "I think... just spending time with you and learning this game. Can we play
                  again tomorrow?"
                </p>

                <p>
                  "Absolutely," Grandpa said, giving Sam a hug. "The wonderful thing about joy is that there's always
                  more to find, even on rainy days."
                </p>

                <p>
                  As Sam added "beautiful sunset" and "Grandpa hugs" to his journal, he realized that joy wasn't about
                  having perfect days—it was about noticing the perfect moments in every day.
                </p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>Why was Sam unhappy at the beginning of the story?</li>
                  <li>What is the Joy Treasure Hunt game?</li>
                  <li>What were some of the joyful moments Sam found during the day?</li>
                  <li>Have you ever felt disappointed about something, but then found joy anyway?</li>
                  <li>What are some small things that bring you joy?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Create your own Joy Journal and record at least three joyful moments each day</li>
                  <li>Take a "joy walk" where you look for beautiful or interesting things in your neighborhood</li>
                  <li>Draw a "joy map" of your home, marking spots where you've experienced happy moments</li>
                  <li>Create a "joy jar": write joyful moments on slips of paper and collect them in a jar</li>
                  <li>Take photos of things that bring you joy and create a collage or digital slideshow</li>
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
