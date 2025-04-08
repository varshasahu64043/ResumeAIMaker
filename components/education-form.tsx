"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  percentage: string
  cgpa?: string
  location?: string
}

interface EducationFormProps {
  data: Education[]
  updateData: (data: Education[]) => void
}

export default function EducationForm({ data, updateData }: EducationFormProps) {
  const [educations, setEducations] = useState<Education[]>(
    data.length > 0
      ? data
      : [
          {
            id: "1",
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            percentage: "",
            cgpa: "",
            location: "",
          },
        ],
  )

  const handleChange = (id: string, field: string, value: string) => {
    const updatedEducations = educations.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    setEducations(updatedEducations)
    updateData(updatedEducations)
  }

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      percentage: "",
      cgpa: "",
      location: "",
    }
    const updatedEducations = [...educations, newEducation]
    setEducations(updatedEducations)
    updateData(updatedEducations)
  }

  const removeEducation = (id: string) => {
    if (educations.length === 1) return
    const updatedEducations = educations.filter((edu) => edu.id !== id)
    setEducations(updatedEducations)
    updateData(updatedEducations)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Education</h2>
        <Button type="button" onClick={addEducation} variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </div>

      <p className="text-gray-600">Add your educational background, including 10th, 12th, and graduation details.</p>

      {educations.map((education, index) => (
        <Card key={education.id} className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Education #{index + 1}</h3>
            {educations.length > 1 && (
              <Button
                type="button"
                onClick={() => removeEducation(education.id)}
                variant="ghost"
                size="sm"
                className="text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`institution-${education.id}`}>Institution/School</Label>
              <Input
                id={`institution-${education.id}`}
                value={education.institution}
                onChange={(e) => handleChange(education.id, "institution", e.target.value)}
                placeholder="Harvard University"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`degree-${education.id}`}>Degree/Certificate</Label>
              <Input
                id={`degree-${education.id}`}
                value={education.degree}
                onChange={(e) => handleChange(education.id, "degree", e.target.value)}
                placeholder="Bachelor's, 10th, 12th"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`field-${education.id}`}>Field of Study</Label>
              <Input
                id={`field-${education.id}`}
                value={education.field}
                onChange={(e) => handleChange(education.id, "field", e.target.value)}
                placeholder="Computer Science"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${education.id}`}>Location (Optional)</Label>
              <Input
                id={`location-${education.id}`}
                value={education.location || ""}
                onChange={(e) => handleChange(education.id, "location", e.target.value)}
                placeholder="Cambridge, MA"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${education.id}`}>Start Date</Label>
              <Input
                id={`startDate-${education.id}`}
                type="month"
                value={education.startDate}
                onChange={(e) => handleChange(education.id, "startDate", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${education.id}`}>End Date (or Expected)</Label>
              <Input
                id={`endDate-${education.id}`}
                type="month"
                value={education.endDate}
                onChange={(e) => handleChange(education.id, "endDate", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`percentage-${education.id}`}>Percentage</Label>
              <Input
                id={`percentage-${education.id}`}
                value={education.percentage}
                onChange={(e) => handleChange(education.id, "percentage", e.target.value)}
                placeholder="85%"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`cgpa-${education.id}`}>CGPA (Optional)</Label>
              <Input
                id={`cgpa-${education.id}`}
                value={education.cgpa || ""}
                onChange={(e) => handleChange(education.id, "cgpa", e.target.value)}
                placeholder="3.8/4.0"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

