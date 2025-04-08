export interface PersonalInfo {
  name: string
  city: string
  location: string
  phoneNumber: string
  whatsappNumber: string
  email: string
  linkedin?: string
  github?: string
}

export interface Education {
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

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

export interface Skills {
  languages: string[]
  frameworks: string[]
  tools: string[]
  soft: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string
  link?: string
  startDate: string
  endDate: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiry?: string
  credentialId?: string
  credentialUrl?: string
}

export interface ResumeData {
  personal: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skills
  projects: Project[]
  certifications: Certification[]
}

