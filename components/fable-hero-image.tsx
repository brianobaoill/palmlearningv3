import Image from "next/image"

interface FableHeroImageProps {
  src: string
  alt: string
  title: string
}

export default function FableHeroImage({ src, alt, title }: FableHeroImageProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-4">{title}</h2>
      </div>
    </div>
  )
}
