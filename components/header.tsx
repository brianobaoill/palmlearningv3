"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, User, ChevronDown, ChevronUp } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position for sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMegaMenu = (menu: string) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null)
    } else {
      setActiveMegaMenu(menu)
    }
  }

  const closeMegaMenu = () => {
    setActiveMegaMenu(null)
  }

  return (
    <header
      className={`bg-white w-full z-50 transition-all duration-300 ${isScrolled ? "fixed shadow-md" : "absolute shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/palm-learning-logo.png"
                  alt="PALM Learning Logo"
                  width={120}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* STEM Learning Mega Menu Trigger */}
              <button
                onClick={() => toggleMegaMenu("stem")}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                STEM Learning
                {activeMegaMenu === "stem" ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>

              {/* Physical Activity Mega Menu Trigger */}
              <button
                onClick={() => toggleMegaMenu("physical")}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Physical Activity
                {activeMegaMenu === "physical" ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>

              {/* Emotional Wellbeing Mega Menu Trigger */}
              <button
                onClick={() => toggleMegaMenu("emotional")}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Emotional Wellbeing
                {activeMegaMenu === "emotional" ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>

              {/* Stories & Fables Menu Trigger */}
              <button
                onClick={() => toggleMegaMenu("stories")}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Stories & Fables
                {activeMegaMenu === "stories" ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-3">
            <Link
              href="/student-login"
              className="inline-flex items-center px-4 py-2 border border-[#007B5F] text-sm font-medium rounded-md shadow-sm text-[#007B5F] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
            >
              <User className="w-4 h-4 mr-1" />
              Student Login
            </Link>
            <Link
              href="/teacher-login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
            >
              Teacher Login
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#007B5F]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* STEM Learning Mega Menu */}
      {activeMegaMenu === "stem" && (
        <div className="absolute w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">STEM Learning</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/stem-learning"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/stem-learning/activity-cards"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Activity Cards
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
                  Featured Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/stem-learning"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      STEM Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/stem-learning"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Lesson Plans
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Featured Content</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Explore our curated STEM learning resources designed to engage young minds through interactive
                    activities.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/stem-learning"
                      onClick={closeMegaMenu}
                      className="text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
                    >
                      Explore all resources <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Physical Activity Mega Menu */}
      {activeMegaMenu === "physical" && (
        <div className="absolute w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Physical Activity</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/physical-activity"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/physical-activity/resources/fundamental-movement-skills"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Fundamental Movement Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/physical-activity/plans-and-schemes"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Plans & Schemes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/physical-activity/webinars"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Webinars
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/physical-activity"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Activity Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/physical-activity"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Printable Resources
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Featured Content</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Discover activities that promote physical development and healthy habits for children of all ages.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/physical-activity"
                      onClick={closeMegaMenu}
                      className="text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
                    >
                      Explore all resources <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Emotional Wellbeing Mega Menu */}
      {activeMegaMenu === "emotional" && (
        <div className="absolute w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
                  Emotional Wellbeing
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/emotional-wellbeing"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/emotion-recognition"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Emotion Recognition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/activities"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Activities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/unit-of-work"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Unit of Work
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
                  Emotion Categories
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/happy"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Happy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/sad"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Sad
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/angry"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Angry
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/anxiety"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Anxiety
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/proud"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Proud
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/emotional-wellbeing/stories/kindness"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Kindness
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Featured Content</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Explore resources designed to help children understand and manage their emotions effectively.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/mindfulness"
                      onClick={closeMegaMenu}
                      className="text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
                    >
                      Mindfulness Activities <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stories & Fables Mega Menu */}
      {activeMegaMenu === "stories" && (
        <div className="absolute w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Story Collections</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/grimm-tales"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Grimm Tales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fable-library"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Fable Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fables"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Fables
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Featured Stories</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/fables/lion-and-mouse"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      The Lion and the Mouse
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/grimm-tales"
                      onClick={closeMegaMenu}
                      className="text-base text-gray-700 hover:text-[#007B5F]"
                    >
                      Hansel and Gretel
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
                  Learning with Stories
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Stories and fables that teach important life lessons and emotional intelligence through engaging
                    narratives.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/fables"
                      onClick={closeMegaMenu}
                      className="text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
                    >
                      Explore all stories <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* STEM Learning Mobile Menu */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleMegaMenu("stem-mobile")}
                className="w-full flex justify-between items-center bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                STEM Learning
                {activeMegaMenu === "stem-mobile" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {activeMegaMenu === "stem-mobile" && (
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link
                    href="/stem-learning"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/stem-learning/activity-cards"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Activity Cards
                  </Link>
                </div>
              )}
            </div>

            {/* Physical Activity Mobile Menu */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleMegaMenu("physical-mobile")}
                className="w-full flex justify-between items-center bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Physical Activity
                {activeMegaMenu === "physical-mobile" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {activeMegaMenu === "physical-mobile" && (
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link
                    href="/physical-activity"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/physical-activity/resources/fundamental-movement-skills"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fundamental Movement Skills
                  </Link>
                  <Link
                    href="/physical-activity/plans-and-schemes"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Plans & Schemes
                  </Link>
                  <Link
                    href="/physical-activity/webinars"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Webinars
                  </Link>
                </div>
              )}
            </div>

            {/* Emotional Wellbeing Mobile Menu */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleMegaMenu("emotional-mobile")}
                className="w-full flex justify-between items-center bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Emotional Wellbeing
                {activeMegaMenu === "emotional-mobile" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {activeMegaMenu === "emotional-mobile" && (
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link
                    href="/emotional-wellbeing"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/emotional-wellbeing/stories"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Stories
                  </Link>
                  <Link
                    href="/emotional-wellbeing/emotion-recognition"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Emotion Recognition
                  </Link>
                  <Link
                    href="/emotional-wellbeing/activities"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Activities
                  </Link>
                  <Link
                    href="/emotional-wellbeing/unit-of-work"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Unit of Work
                  </Link>
                </div>
              )}
            </div>

            {/* Stories & Fables Mobile Menu */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => toggleMegaMenu("stories-mobile")}
                className="w-full flex justify-between items-center bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Stories & Fables
                {activeMegaMenu === "stories-mobile" ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {activeMegaMenu === "stories-mobile" && (
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link
                    href="/grimm-tales"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Grimm Tales
                  </Link>
                  <Link
                    href="/fable-library"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fable Library
                  </Link>
                  <Link
                    href="/fables"
                    className="block text-gray-500 hover:text-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fables
                  </Link>
                </div>
              )}
            </div>

            {/* Login Links */}
            <Link
              href="/student-login"
              className="bg-white border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Student Login
            </Link>
            <Link
              href="/teacher-login"
              className="bg-white border-transparent text-[#007B5F] hover:bg-gray-50 hover:border-[#007B5F] hover:text-[#006B4F] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Teacher Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
