"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

interface ExperienceFormProps {
  data: Experience[]
  updateData: (data: Experience[]) => void
}

export default function ExperienceForm({ data, updateData }: ExperienceFormProps) {
  const [experiences, setExperiences] = useState<Experience[]>(
    data.length > 0
      ? data
      : [
          {
            id: "1",
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ],
  )

  const handleChange = (id: string, field: string, value: any) => {
    const updatedExperiences = experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    setExperiences(updatedExperiences)
    updateData(updatedExperiences)
  }

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    const updatedExperiences = [...experiences, newExperience]
    setExperiences(updatedExperiences)
    updateData(updatedExperiences)
  }

  const removeExperience = (id: string) => {
    if (experiences.length === 1) return
    const updatedExperiences = experiences.filter((exp) => exp.id !== id)
    setExperiences(updatedExperiences)
    updateData(updatedExperiences)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <Button type="button" onClick={addExperience} variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add Experience
        </Button>
      </div>

      <p className="text-gray-600">Add your work experience, including internships and part-time roles.</p>

      {experiences.map((experience, index) => (
        <Card key={experience.id} className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Experience #{index + 1}</h3>
            {experiences.length > 1 && (
              <Button
                type="button"
                onClick={() => removeExperience(experience.id)}
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
              <Label htmlFor={`company-${experience.id}`}>Company/Organization</Label>
              <Input
                id={`company-${experience.id}`}
                value={experience.company}
                onChange={(e) => handleChange(experience.id, "company", e.target.value)}
                placeholder="Google Inc."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`position-${experience.id}`}>Position/Title</Label>
              <Input
                id={`position-${experience.id}`}
                value={experience.position}
                onChange={(e) => handleChange(experience.id, "position", e.target.value)}
                placeholder="Software Engineer"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${experience.id}`}>Location</Label>
              <Input
                id={`location-${experience.id}`}
                value={experience.location}
                onChange={(e) => handleChange(experience.id, "location", e.target.value)}
                placeholder="Mountain View, CA"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${experience.id}`}>Start Date</Label>
              <Input
                id={`startDate-${experience.id}`}
                type="month"
                value={experience.startDate}
                onChange={(e) => handleChange(experience.id, "startDate", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${experience.id}`}>End Date</Label>
              <Input
                id={`endDate-${experience.id}`}
                type="month"
                value={experience.endDate}
                onChange={(e) => handleChange(experience.id, "endDate", e.target.value)}
                disabled={experience.current}
                required={!experience.current}
              />
            </div>

            <div className="space-y-2 flex items-center">
              <input
                id={`current-${experience.id}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
                checked={experience.current}
                onChange={(e) => handleChange(experience.id, "current", e.target.checked)}
              />
              <Label htmlFor={`current-${experience.id}`} className="ml-2">
                I currently work here
              </Label>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor={`description-${experience.id}`}>Description</Label>
            <Textarea
              id={`description-${experience.id}`}
              value={experience.description}
              onChange={(e) => handleChange(experience.id, "description", e.target.value)}
              placeholder="Describe your responsibilities and achievements..."
              rows={4}
              required
            />
          </div>
        </Card>
      ))}
    </div>
  )
}

