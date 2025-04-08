"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface Skills {
  languages: string[]
  frameworks: string[]
  tools: string[]
  soft: string[]
}

interface SkillsFormProps {
  data: Skills
  updateData: (data: Skills) => void
}

export default function SkillsForm({ data, updateData }: SkillsFormProps) {
  const [skills, setSkills] = useState<Skills>(
    data.languages.length > 0
      ? data
      : {
          languages: [],
          frameworks: [],
          tools: [],
          soft: [],
        },
  )

  const [newSkill, setNewSkill] = useState({
    languages: "",
    frameworks: "",
    tools: "",
    soft: "",
  })

  const addSkill = (category: keyof Skills) => {
    if (!newSkill[category].trim()) return

    const updatedSkills = {
      ...skills,
      [category]: [...skills[category], newSkill[category].trim()],
    }

    setSkills(updatedSkills)
    updateData(updatedSkills)

    setNewSkill({
      ...newSkill,
      [category]: "",
    })
  }

  const removeSkill = (category: keyof Skills, index: number) => {
    const updatedSkills = {
      ...skills,
      [category]: skills[category].filter((_, i) => i !== index),
    }

    setSkills(updatedSkills)
    updateData(updatedSkills)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, category: keyof Skills) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill(category)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Skills</h2>
      <p className="text-gray-600">Add your technical and soft skills relevant to the IT industry.</p>

      <Card className="p-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="languages">Programming Languages</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {lang}
                  <button
                    type="button"
                    onClick={() => removeSkill("languages", index)}
                    className="ml-1 rounded-full p-1 hover:bg-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="mt-2 flex">
              <Input
                id="languages"
                value={newSkill.languages}
                onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "languages")}
                placeholder="Add a programming language (e.g., JavaScript, Python)"
              />
              <Button type="button" onClick={() => addSkill("languages")} className="ml-2">
                Add
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="frameworks">Frameworks & Libraries</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.frameworks.map((framework, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {framework}
                  <button
                    type="button"
                    onClick={() => removeSkill("frameworks", index)}
                    className="ml-1 rounded-full p-1 hover:bg-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="mt-2 flex">
              <Input
                id="frameworks"
                value={newSkill.frameworks}
                onChange={(e) => setNewSkill({ ...newSkill, frameworks: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "frameworks")}
                placeholder="Add a framework (e.g., React, Spring Boot)"
              />
              <Button type="button" onClick={() => addSkill("frameworks")} className="ml-2">
                Add
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="tools">Tools & Technologies</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {tool}
                  <button
                    type="button"
                    onClick={() => removeSkill("tools", index)}
                    className="ml-1 rounded-full p-1 hover:bg-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="mt-2 flex">
              <Input
                id="tools"
                value={newSkill.tools}
                onChange={(e) => setNewSkill({ ...newSkill, tools: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "tools")}
                placeholder="Add a tool (e.g., Git, Docker)"
              />
              <Button type="button" onClick={() => addSkill("tools")} className="ml-2">
                Add
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="soft">Soft Skills</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.soft.map((soft, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {soft}
                  <button
                    type="button"
                    onClick={() => removeSkill("soft", index)}
                    className="ml-1 rounded-full p-1 hover:bg-gray-200"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="mt-2 flex">
              <Input
                id="soft"
                value={newSkill.soft}
                onChange={(e) => setNewSkill({ ...newSkill, soft: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "soft")}
                placeholder="Add a soft skill (e.g., Communication, Leadership)"
              />
              <Button type="button" onClick={() => addSkill("soft")} className="ml-2">
                Add
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

