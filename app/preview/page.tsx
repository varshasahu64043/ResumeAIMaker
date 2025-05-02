"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Share, Wand2 } from "lucide-react"
import ResumeTemplate from "@/components/resume-template"
import type { ResumeData } from "@/types/resume"
import { enhanceResumeWithAI } from "@/lib/ai-service"
import { toast } from "@/hooks/use-toast"

export default function PreviewResume() {
  const router = useRouter()
  const [resumeData, setResumeData] = useState<ResumeData | null>(null)
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("modern")

  useEffect(() => {
    // Load resume data from localStorage
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      setResumeData(JSON.parse(savedData))
    } else {
      router.push("/create")
    }
  }, [router])

    
  const handleEnhanceWithAI = async () => {
    if (!resumeData) return

    setIsEnhancing(true)
    try {
      const enhancedData = await enhanceResumeWithAI(resumeData)
      setResumeData(enhancedData)
      toast({
        title: "Resume Enhanced",
        description: "Your resume has been improved with AI suggestions.",
      })
    } catch {
      toast({
        title: "Enhancement Failed",
        description: "There was an error enhancing your resume. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsEnhancing(false)
    }
  }

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    toast({
      title: "Download Started",
      description: "Your resume is being prepared for download.",
    })
  }

  const handleShare = () => {
    // In a real app, this would generate a shareable link
    toast({
      title: "Share Link Created",
      description: "A shareable link has been copied to your clipboard.",
    })
  }

  if (!resumeData) {
    return <div className="container mx-auto p-8 text-center">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold">Resume Preview</h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => router.push("/create")}>
            Edit Resume
          </Button>
          <Button variant="outline" onClick={handleEnhanceWithAI} disabled={isEnhancing}>
            <Wand2 className="mr-2 h-4 w-4" />
            {isEnhancing ? "Enhancing..." : "Enhance with AI"}
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Tabs value={selectedTemplate} onValueChange={setSelectedTemplate}>
        <TabsList className="mb-6">
          <TabsTrigger value="modern">Modern</TabsTrigger>
          <TabsTrigger value="classic">Classic</TabsTrigger>
          <TabsTrigger value="minimal">Minimal</TabsTrigger>
        </TabsList>

        <Card className="p-6">
          <TabsContent value="modern">
            <ResumeTemplate data={resumeData} template="modern" />
          </TabsContent>

          <TabsContent value="classic">
            <ResumeTemplate data={resumeData} template="classic" />
          </TabsContent>

          <TabsContent value="minimal">
            <ResumeTemplate data={resumeData} template="minimal" />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  )
}

