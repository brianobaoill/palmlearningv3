import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function SadStoryPage() {
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
              <Image src="/placeholder.svg?key=qq4nj" alt="Feeling Sad" fill className="object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">When I Feel Sad</h1>

              <div className="prose prose-lg max-w-none">
                <p>
                  Once there was a little girl named Maya. Maya usually loved to play outside, draw pictures, and laugh
                  with her friends. But today, Maya felt different. She felt sad.
                </p>

                <p>
                  Maya's shoulders drooped, and she didn't feel like playing. Her favorite teddy bear, Mr. Buttons, sat
                  beside her on the bed as she looked out the window at the rain falling outside.
                </p>

                <p>"What's wrong, Maya?" asked her mom, sitting down next to her.</p>

                <p>"I feel sad," Maya said quietly. "But I don't know why."</p>

                <p>
                  "Sometimes we feel sad even when we don't know why," Mom explained. "And that's okay. Everyone feels
                  sad sometimes."
                </p>

                <p>"Even you?" Maya asked, surprised.</p>

                <p>"Even me," Mom smiled. "When I feel sad, I like to do things that make me feel better."</p>

                <p>"Like what?" Maya wondered.</p>

                <p>
                  "Well, sometimes I take deep breaths, like this," Mom demonstrated, taking a slow, deep breath in and
                  out. Maya tried it too.
                </p>

                <p>
                  "Sometimes I talk about my feelings with someone I trust, like I'm doing with you right now," Mom
                  continued. "And sometimes, I just need a big, warm hug."
                </p>

                <p>Mom opened her arms, and Maya snuggled in for a hug. It felt warm and safe.</p>

                <p>"What else can I do when I feel sad?" Maya asked.</p>

                <p>
                  "You could draw your feelings," Mom suggested. "Or write about them. Or maybe do something kind for
                  someone else."
                </p>

                <p>
                  Maya thought about this. Then she picked up Mr. Buttons. "I think Mr. Buttons is feeling sad too.
                  Maybe I could do something nice for him to make him feel better."
                </p>

                <p>
                  Maya spent the afternoon making a special card for Mr. Buttons, with bright colors and a big heart. As
                  she focused on making her teddy bear feel better, she noticed that she was starting to feel a little
                  better too.
                </p>

                <p>"Mom," Maya said later, "I still feel a little sad, but not as much as before."</p>

                <p>
                  "That's good," Mom smiled. "It's okay to feel sad sometimes. Feelings come and go, like clouds in the
                  sky. The sad feelings will pass, and happy feelings will come back again."
                </p>

                <p>
                  Maya nodded. She knew that tomorrow might be different. The sun might shine again, and she might feel
                  like playing and laughing. But for now, it was okay to feel sad and take care of herself and Mr.
                  Buttons.
                </p>

                <h3 className="text-xl font-semibold mt-8">Discussion Questions</h3>
                <ul>
                  <li>Have you ever felt sad like Maya? What made you feel that way?</li>
                  <li>What are some things that help you feel better when you're sad?</li>
                  <li>Why do you think helping Mr. Buttons made Maya feel a little better?</li>
                  <li>What would you say to a friend who was feeling sad?</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Activities</h3>
                <ul>
                  <li>Draw a picture of what sadness looks like to you</li>
                  <li>Practice taking deep breaths when you feel strong emotions</li>
                  <li>Create a "feelings toolbox" with items that help you when you're sad</li>
                  <li>Write a letter or make a card for someone who might be feeling sad</li>
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
