import { FileText, Download } from "lucide-react"

interface PDFResourceProps {
  title: string
  description: string
  fileUrl: string
  fileSize?: string
}

export default function PDFResource({ title, description, fileUrl, fileSize }: PDFResourceProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
      <div className="bg-red-100 p-3 rounded-lg mr-4">
        <FileText className="h-6 w-6 text-red-600" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-3">
          {fileSize && <span className="text-xs text-gray-500">{fileSize}</span>}
          <a
            href={fileUrl}
            download
            className="inline-flex items-center text-sm font-medium text-[#007B5F] hover:text-[#006B4F]"
          >
            <Download className="h-4 w-4 mr-1" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
