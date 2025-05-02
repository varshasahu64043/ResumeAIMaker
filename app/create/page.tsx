"use client"

import { useState} from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PersonalInfoForm from "@/components/personal-info-form"
import EducationForm from "@/components/education-form"
import ExperienceForm from "@/components/experience-form"
import SkillsForm from "@/components/skills-form"
import ProjectsForm from "@/components/projects-form"
import CertificationsForm from "@/components/certifications-form"
import type { ResumeData } from "@/types/resume"

export default function CreateResume() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      name: "",
      city: "",
      location: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      linkedin: "",
      github: "",
    },
    education: [],
    experience: [],
    skills: {
      languages: [],
      frameworks: [],
      tools: [],
      soft: [],
    },
    projects: [],
    certifications: [],
  })
 
  const updateResumeData = (section: string, data: any) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }
 



  const handleNext = () => {
    const tabs = ["personal", "education", "experience", "skills", "projects", "certifications"]
    const currentIndex = tabs.indexOf(activeTab)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    // Save data to localStorage for persistence
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
    // Navigate to preview page
    router.push("/preview")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Create Your Resume</h1>
      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <PersonalInfoForm data={resumeData.personal} updateData={(data) => updateResumeData("personal", data)} />
          </TabsContent>

          <TabsContent value="education">
            <EducationForm data={resumeData.education} updateData={(data) => updateResumeData("education", data)} />
          </TabsContent>

          <TabsContent value="experience">
            <ExperienceForm data={resumeData.experience} updateData={(data) => updateResumeData("experience", data)} />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsForm data={resumeData.skills} updateData={(data) => updateResumeData("skills", data)} />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsForm data={resumeData.projects} updateData={(data) => updateResumeData("projects", data)} />
          </TabsContent>

          <TabsContent value="certifications">
            <CertificationsForm
              data={resumeData.certifications}
              updateData={(data) => updateResumeData("certifications", data)}
            />
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button onClick={handleNext}>{activeTab === "certifications" ? "Preview Resume" : "Next"}</Button>
        </div>
      </Card>
    </div>
  )
}

