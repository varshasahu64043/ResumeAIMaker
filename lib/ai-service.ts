"use client"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import type { ResumeData } from "@/types/resume"

export async function enhanceResumeWithAI(resumeData: ResumeData): Promise<ResumeData> {
  try {
    // Create a deep copy of the resume data
    const enhancedData = JSON.parse(JSON.stringify(resumeData)) as ResumeData

    // Enhance experience descriptions
    if (enhancedData.experience.length > 0) {
      for (let i = 0; i < enhancedData.experience.length; i++) {
        const exp = enhancedData.experience[i]
        if (exp.description) {
          const { text } = await generateText({
            model: openai("gpt-4o"),
            prompt: `Improve the following job description to be more professional, impactful, and achievement-oriented. Use bullet points and focus on quantifiable achievements. Original description: "${exp.description}"`,
          })

          enhancedData.experience[i].description = text
        }
      }
    }

    // Enhance project descriptions
    if (enhancedData.projects.length > 0) {
      for (let i = 0; i < enhancedData.projects.length; i++) {
        const project = enhancedData.projects[i]
        if (project.description) {
          const { text } = await generateText({
            model: openai("gpt-4o"),
            prompt: `Improve the following project description to highlight technical skills, challenges overcome, and results achieved. Make it concise but impactful. Original description: "${project.description}"`,
          })

          enhancedData.projects[i].description = text
        }
      }
    }

    return enhancedData
  } catch (error) {
    console.error("Error enhancing resume with AI:", error)
    // Return original data if enhancement fails
    return resumeData
  }
}

