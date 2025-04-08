"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string
  link?: string
  startDate: string
  endDate: string
}

interface ProjectsFormProps {
  data: Project[]
  updateData: (data: Project[]) => void
}

export default function ProjectsForm({ data, updateData }: ProjectsFormProps) {
  const [projects, setProjects] = useState<Project[]>(
    data.length > 0
      ? data
      : [
          {
            id: "1",
            title: "",
            description: "",
            technologies: "",
            link: "",
            startDate: "",
            endDate: "",
          },
        ],
  )

  const handleChange = (id: string, field: string, value: string) => {
    const updatedProjects = projects.map((proj) => (proj.id === id ? { ...proj, [field]: value } : proj))
    setProjects(updatedProjects)
    updateData(updatedProjects)
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      description: "",
      technologies: "",
      link: "",
      startDate: "",
      endDate: "",
    }
    const updatedProjects = [...projects, newProject]
    setProjects(updatedProjects)
    updateData(updatedProjects)
  }

  const removeProject = (id: string) => {
    if (projects.length === 1) return
    const updatedProjects = projects.filter((proj) => proj.id !== id)
    setProjects(updatedProjects)
    updateData(updatedProjects)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Button type="button" onClick={addProject} variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <p className="text-gray-600">Add your technical projects that showcase your skills and expertise.</p>

      {projects.map((project, index) => (
        <Card key={project.id} className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Project #{index + 1}</h3>
            {projects.length > 1 && (
              <Button
                type="button"
                onClick={() => removeProject(project.id)}
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
              <Label htmlFor={`title-${project.id}`}>Project Title</Label>
              <Input
                id={`title-${project.id}`}
                value={project.title}
                onChange={(e) => handleChange(project.id, "title", e.target.value)}
                placeholder="E-commerce Website"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`technologies-${project.id}`}>Technologies Used</Label>
              <Input
                id={`technologies-${project.id}`}
                value={project.technologies}
                onChange={(e) => handleChange(project.id, "technologies", e.target.value)}
                placeholder="React, Node.js, MongoDB"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${project.id}`}>Start Date</Label>
              <Input
                id={`startDate-${project.id}`}
                type="month"
                value={project.startDate}
                onChange={(e) => handleChange(project.id, "startDate", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${project.id}`}>End Date (or Expected)</Label>
              <Input
                id={`endDate-${project.id}`}
                type="month"
                value={project.endDate}
                onChange={(e) => handleChange(project.id, "endDate", e.target.value)}
                required
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor={`link-${project.id}`}>Project Link (Optional)</Label>
              <Input
                id={`link-${project.id}`}
                value={project.link || ""}
                onChange={(e) => handleChange(project.id, "link", e.target.value)}
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label htmlFor={`description-${project.id}`}>Project Description</Label>
            <Textarea
              id={`description-${project.id}`}
              value={project.description}
              onChange={(e) => handleChange(project.id, "description", e.target.value)}
              placeholder="Describe the project, your role, and key achievements..."
              rows={4}
              required
            />
          </div>
        </Card>
      ))}
    </div>
  )
}

