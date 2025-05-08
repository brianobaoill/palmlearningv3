"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Update the component props to include optional link and linkText
interface SectionCardProps {
  id?: string
  title: string
  description?: string
  alternate?: boolean
  children?: ReactNode
  icon?: LucideIcon
  imageQuery?: string
  imageSrc?: string
  link?: string
  linkText?: string
  color?: string
}

// Add a link at the bottom of the card if link and linkText are provided
export default function SectionCard({
  id,
  title,
  description,
  alternate,
  children,
  icon: Icon,
  imageQuery,
  imageSrc,
  link,
  linkText,
  color,
}: SectionCardProps) {
  return (
    <motion.section
      id={id}
      className={`p-8 md:p-12 max-w-4xl mx-auto rounded-xl mt-8 transition-all duration-300 ${
        alternate
          ? "bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff] border border-blue-100"
          : "bg-white border border-gray-100"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className={`p-3 rounded-lg ${alternate ? "bg-blue-100" : "bg-[#e5f3ff]"}`}>
                <Icon className="w-6 h-6 text-[#007B5F]" />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-[#007B5F]">{title}</h3>
              {description && <p className="text-gray-700 leading-relaxed">{description}</p>}
            </div>
          </div>
          {children && <div className="mt-6">{children}</div>}
          {link && linkText && (
            <div className="mt-4">
              <Link href={link} className="inline-flex items-center text-[#007B5F] font-medium hover:underline">
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        {(imageQuery || imageSrc) && (
          <div className="md:w-1/3 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-[200px] h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-[#e5f3ff] to-[#f0f8ff]"
            >
              {imageSrc ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={imageSrc || "/placeholder.svg"}
                    alt={title}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  {id === "stemlearning" && (
                    <div className="w-24 h-24 text-[#0099CC]">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                        <path d="M12 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 22V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                  {id === "physicalwellbeing" && (
                    <div className="w-24 h-24 text-[#F9A826]">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {/* New, better physical activity icon */}
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 14.5C8 14.5 9.5 16.5 12 16.5C14.5 16.5 16 14.5 16 14.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 8.5C8.5 9.05228 8.05228 9.5 7.5 9.5C6.94772 9.5 6.5 9.05228 6.5 8.5C6.5 7.94772 6.94772 7.5 7.5 7.5C8.05228 7.5 8.5 7.94772 8.5 8.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M17.5 8.5C17.5 9.05228 17.0523 9.5 16.5 9.5C15.9477 9.5 15.5 9.05228 15.5 8.5C15.5 7.94772 15.9477 7.5 16.5 7.5C17.0523 7.5 17.5 7.94772 17.5 8.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M9 12C9 12 10 13 12 13C14 13 15 12 15 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 13V16.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 16.5L16.5 16.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  {id === "emotionalwellbeing" && (
                    <div className="w-24 h-24 text-[#FF6B6B]">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          fill="currentColor"
                        />
                        <path d="M12 7V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M7 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M19 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  )
}
