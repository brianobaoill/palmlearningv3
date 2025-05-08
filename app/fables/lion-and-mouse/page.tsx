import FableHeroImage from "@/components/fable-hero-image"

export default function LionAndMousePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FableHeroImage
        src="/images/fables/lion-and-mouse.jpg"
        alt="The Lion and the Mouse - A lion caught in a trap being helped by a small mouse"
        title="The Lion and the Mouse"
      />

      <div className="mt-8 prose lg:prose-lg mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          In this classic Aesop's fable, a mighty lion spares the life of a tiny mouse who promises to return the favor
          someday. Later, when the lion is caught in a hunter's net, the mouse gnaws through the ropes to free him,
          proving that even the smallest creature can help the mightiest.
        </p>

        <blockquote className="italic border-l-4 border-gray-300 pl-4 my-6">
          "No act of kindness, no matter how small, is ever wasted."
        </blockquote>

        <h3 className="text-xl font-semibold mt-6">Moral of the Story</h3>
        <p>
          This fable teaches us that kindness is never wasted, and that even the seemingly weak or small can sometimes
          help those who are mighty and strong. It reminds us to be kind to everyone, regardless of their status or
          position.
        </p>
      </div>
    </div>
  )
}
