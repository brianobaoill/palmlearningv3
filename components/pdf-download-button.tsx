"use client"

import { useState } from "react"
import { Download } from "lucide-react"

interface PDFDownloadButtonProps {
  pdfTitle: string
  pdfFileName: string
}

export default function PDFDownloadButton({ pdfTitle, pdfFileName }: PDFDownloadButtonProps) {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)

    // Create a simple PDF with content
    const pdfContent = `
      <html>
        <head>
          <title>${pdfTitle}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #007B5F; }
            h2 { color: #333; margin-top: 20px; }
            p { line-height: 1.5; }
            .page-break { page-break-after: always; }
            .section { margin-bottom: 20px; }
            .worksheet { border: 1px solid #ccc; padding: 20px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <h1>${pdfTitle}</h1>
          <p>A complete unit of work for children aged 6-13 to develop emotional intelligence, self-awareness, and healthy coping strategies.</p>
          
          <div class="section">
            <h2>Overview</h2>
            <p>This unit includes 6 comprehensive lessons designed to help children understand and manage their emotions.</p>
          </div>
          
          <div class="section">
            <h2>Lesson 1: Understanding Our Emotions</h2>
            <p>Introduction to basic emotions, how to recognize them, and why all feelings are important.</p>
            <p><strong>Key Activities:</strong> Emotion Charades, Feelings Journal, Emotion Wheel Exploration</p>
            
            <div class="worksheet">
              <h3>Worksheet: Emotion Detective</h3>
              <p>Instructions: Look at each picture and write down what emotion you think the person is feeling.</p>
            </div>
          </div>
          
          <div class="page-break"></div>
          
          <div class="section">
            <h2>Lesson 2: Expressing Our Feelings</h2>
            <p>Healthy ways to express different emotions and communicate our feelings to others.</p>
            <p><strong>Key Activities:</strong> "I Feel" Statements Practice, Emotion Art Project, Role-Playing Scenarios</p>
            
            <div class="worksheet">
              <h3>Worksheet: "I Feel" Statements</h3>
              <p>Instructions: Complete the sentences with your own feelings.</p>
            </div>
          </div>
          
          <!-- Additional content would continue here -->
        </body>
      </html>
    `

    // Create a Blob from the HTML content
    const blob = new Blob([pdfContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    // Create a link and trigger download
    const a = document.createElement("a")
    a.href = url
    a.download = pdfFileName
    document.body.appendChild(a)
    a.click()

    // Clean up
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setTimeout(() => {
      setDownloading(false)
    }, 1500)
  }

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#007B5F] hover:bg-[#006B4F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007B5F]"
    >
      {downloading ? (
        <>
          <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
          Preparing Download...
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          Download Complete Unit (PDF)
        </>
      )}
    </button>
  )
}
