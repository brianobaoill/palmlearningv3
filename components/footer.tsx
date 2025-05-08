import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#007B5F] text-white mt-16 relative overflow-hidden">
      {/* Wave pattern */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="#ffffff"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/palm-learning-logo.png"
                alt="Palm Learning Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-green-100 mb-4">
              Empowering Minds Through STEM, Physical Activity and Locomotor Movement, and Emotional Wellbeing
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#stemlearning" className="text-green-100 hover:text-white transition-colors">
                  STEM Learning
                </Link>
              </li>
              <li>
                <Link href="#physicalwellbeing" className="text-green-100 hover:text-white transition-colors">
                  Physical Activity
                </Link>
              </li>
              <li>
                <Link href="#emotionalwellbeing" className="text-green-100 hover:text-white transition-colors">
                  Emotional Wellbeing
                </Link>
              </li>
              <li>
                <Link href="#checkin" className="text-green-100 hover:text-white transition-colors">
                  Daily Check-In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-green-100">Have questions or feedback? Reach out to our team.</p>
            <button className="mt-4 bg-white text-[#007B5F] px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2025 Palm Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
