"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PersonalInfo {
  name: string
  city: string
  location: string
  phoneNumber: string
  whatsappNumber: string
  email: string
  linkedin?: string
  github?: string
}

interface PersonalInfoFormProps {
  data: PersonalInfo
  updateData: (data: PersonalInfo) => void
}

export default function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const [formData, setFormData] = useState<PersonalInfo>(data)

  useEffect(() => {
    if (JSON.stringify(formData) !== JSON.stringify(data)) {
      updateData(formData);
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-gray-600">Enter your basic contact information that will appear at the top of your resume.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="whatsappNumber">WhatsApp Number (Optional)</Label>
          <Input
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" value={formData.city} onChange={handleChange} placeholder="New York" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Full Address (Optional)</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="123 Main St, New York, NY 10001"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
          <Input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin || ""}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile (Optional)</Label>
          <Input
            id="github"
            name="github"
            value={formData.github || ""}
            onChange={handleChange}
            placeholder="github.com/johndoe"
          />
        </div>
      </div>
    </div>
  )
}

