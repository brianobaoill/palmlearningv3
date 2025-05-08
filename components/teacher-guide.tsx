import { BookOpen, Download, Printer } from "lucide-react"

interface TeacherGuideProps {
  title: string
  description?: string
  tips: string[]
  className?: string
}

export default function TeacherGuide({ title, description, tips, className = "" }: TeacherGuideProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-amber-100">
            <BookOpen className="h-5 w-5 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 ml-3">{title}</h3>
        </div>

        {description && <p className="text-gray-600 mb-4">{description}</p>}

        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-2">Tips for Teachers</h4>
          <ul className="list-disc pl-5 space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-gray-700">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 mt-6">
          <button className="flex items-center text-sm text-gray-700 hover:text-[#007B5F]">
            <Download className="h-4 w-4 mr-1" />
            Download Guide
          </button>
          <button className="flex items-center text-sm text-gray-700 hover:text-[#007B5F]">
            <Printer className="h-4 w-4 mr-1" />
            Print Guide
          </button>
        </div>
      </div>
    </div>
  )
}
