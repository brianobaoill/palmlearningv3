"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const artsAndCrafts = [
  {
    id: "kindness-tree",
    title: "Kindness Tree",
    shortDescription: "Create a beautiful tree with leaves showing acts of kindness.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Brown construction paper or cardboard</li>
        <li>Green, yellow, and red construction paper</li>
        <li>Scissors</li>
        <li>Glue or tape</li>
        <li>Markers or colored pencils</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Cut out a large tree trunk and branches from brown paper.</li>
        <li>Cut leaf shapes from green, yellow, and red paper.</li>
        <li>On each leaf, write or draw an act of kindness you've done or plan to do.</li>
        <li>Attach the leaves to the branches.</li>
        <li>Display your Kindness Tree where everyone can see it and be inspired!</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>How does it feel when someone is kind to you?</li>
        <li>What are some ways you can show kindness at school?</li>
        <li>Why is kindness important?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=kindness tree craft, colorful paper leaves, child-friendly",
  },
  {
    id: "wish-tree",
    title: "Wish Tree",
    shortDescription: "Create a tree filled with hopes, dreams, and wishes.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Brown construction paper or cardboard</li>
        <li>Blue, purple, and pink construction paper</li>
        <li>String or ribbon</li>
        <li>Scissors</li>
        <li>Hole punch</li>
        <li>Markers or colored pencils</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Cut out a large tree trunk and branches from brown paper.</li>
        <li>Cut star or cloud shapes from colored paper.</li>
        <li>On each shape, write a wish, hope, or dream.</li>
        <li>Punch a hole in each shape and tie string through it.</li>
        <li>Hang the wishes from the branches of your tree.</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>What are some things you hope for?</li>
        <li>How can you work toward making your wishes come true?</li>
        <li>Why is it important to have hopes and dreams?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=wish tree craft, hanging paper stars, child art project",
  },
  {
    id: "worry-tree",
    title: "Worry Tree",
    shortDescription: "A tree where children can place their worries to help let them go.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Brown construction paper or cardboard</li>
        <li>Light blue or green construction paper</li>
        <li>Scissors</li>
        <li>Glue or tape</li>
        <li>Markers or colored pencils</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Cut out a large tree trunk and branches from brown paper.</li>
        <li>Cut leaf or cloud shapes from blue or green paper.</li>
        <li>On each shape, write or draw a worry.</li>
        <li>Attach the worries to the branches.</li>
        <li>Optional: At the end of the week, remove one worry that no longer bothers you.</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>How does it feel to put your worry on the tree?</li>
        <li>What are some ways you can handle worries?</li>
        <li>Who can you talk to when you're worried?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=worry tree craft, paper leaves with writing, calming activity",
  },
  {
    id: "friendship-stones",
    title: "Friendship Stones",
    shortDescription: "Create colorful stones with positive messages to share with friends.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Smooth stones or rocks</li>
        <li>Acrylic paint or paint pens</li>
        <li>Clear sealer (optional)</li>
        <li>Paintbrushes</li>
        <li>Water cups and paper towels</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Clean and dry the stones thoroughly.</li>
        <li>Paint the stones with a base color and let dry.</li>
        <li>Add designs, patterns, or positive words like "Kind," "Friend," "Smile," etc.</li>
        <li>Once dry, apply a clear sealer if desired.</li>
        <li>Share your friendship stones with classmates or keep them as reminders of positive qualities.</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>What makes someone a good friend?</li>
        <li>How do you feel when you share something with a friend?</li>
        <li>What positive words would you use to describe your friends?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=painted friendship rocks, colorful stones with positive words",
  },
  {
    id: "emotion-masks",
    title: "Emotion Masks",
    shortDescription: "Create masks that represent different emotions to explore feelings.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Paper plates</li>
        <li>Popsicle sticks</li>
        <li>Markers or crayons</li>
        <li>Construction paper</li>
        <li>Scissors</li>
        <li>Glue</li>
        <li>Optional: yarn, buttons, feathers</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Give each child a paper plate.</li>
        <li>Have them draw a face showing a specific emotion (happy, sad, angry, surprised, etc.).</li>
        <li>Cut out eyes so they can see through the mask.</li>
        <li>Decorate with additional materials if desired.</li>
        <li>Attach a popsicle stick to hold the mask up to their face.</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>How can you tell what emotion someone is feeling by looking at their face?</li>
        <li>What makes you feel this emotion?</li>
        <li>What can you do when you feel this way?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=emotion masks craft, paper plate faces, children's art project",
  },
  {
    id: "feelings-jar",
    title: "Feelings Jar",
    shortDescription: "Create a colorful jar that represents different emotions and feelings.",
    fullDescription: `
      <h3>Materials Needed:</h3>
      <ul>
        <li>Clear plastic jar with lid</li>
        <li>Colored sand, salt, or chalk</li>
        <li>Small bowls</li>
        <li>Funnel</li>
        <li>Paper and pencil</li>
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        <li>Assign different colors to different emotions (e.g., red for anger, yellow for happiness).</li>
        <li>Create colored sand by mixing salt or sand with chalk or food coloring.</li>
        <li>Have children think about their feelings that day or week.</li>
        <li>Add layers of colored sand to represent their feelings.</li>
        <li>Seal the jar and keep it as a visual representation of emotions.</li>
      </ol>
      
      <h3>Discussion Questions:</h3>
      <ul>
        <li>Which emotion takes up the most space in your jar?</li>
        <li>How do your emotions change throughout the day?</li>
        <li>What would you like your feelings jar to look like tomorrow?</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=400&query=feelings jar craft, layered colored sand in clear jar",
  },
]

export default function ArtsAndCrafts() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)

  const selectedActivityData = artsAndCrafts.find((activity) => activity.id === selectedActivity)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artsAndCrafts.map((activity) => (
          <motion.div
            key={activity.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedActivity(activity.id)}
          >
            <div className="relative h-48">
              <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-gray-600 mb-4">{activity.shortDescription}</p>
              <button
                className="text-purple-600 font-medium hover:underline flex items-center"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedActivity(activity.id)
                }}
              >
                View Instructions <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">{selectedActivityData?.title}</h2>
                <button onClick={() => setSelectedActivity(null)} className="p-2 rounded-full hover:bg-gray-100">
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedActivityData?.image || ""}
                    alt={selectedActivityData?.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedActivityData?.fullDescription || "" }}
                />

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
