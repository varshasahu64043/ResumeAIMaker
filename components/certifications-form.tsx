"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  expiry?: string
  credentialId?: string
  credentialUrl?: string
}

interface CertificationsFormProps {
  data: Certification[]
  updateData: (data: Certification[]) => void
}

export default function CertificationsForm({ data, updateData }: CertificationsFormProps) {
  const [certifications, setCertifications] = useState<Certification[]>(
    data.length > 0
      ? data
      : [
          {
            id: "1",
            name: "",
            issuer: "",
            date: "",
            expiry: "",
            credentialId: "",
            credentialUrl: "",
          },
        ],
  )

  const handleChange = (id: string, field: string, value: string) => {
    const updatedCertifications = certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    setCertifications(updatedCertifications)
    updateData(updatedCertifications)
  }

  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      expiry: "",
      credentialId: "",
      credentialUrl: "",
    }
    const updatedCertifications = [...certifications, newCertification]
    setCertifications(updatedCertifications)
    updateData(updatedCertifications)
  }

  const removeCertification = (id: string) => {
    if (certifications.length === 1) return
    const updatedCertifications = certifications.filter((cert) => cert.id !== id)
    setCertifications(updatedCertifications)
    updateData(updatedCertifications)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Certifications & Training</h2>
        <Button type="button" onClick={addCertification} variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add Certification
        </Button>
      </div>

      <p className="text-gray-600">Add your professional certifications and training programs.</p>

      {certifications.map((certification, index) => (
        <Card key={certification.id} className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium">Certification #{index + 1}</h3>
            {certifications.length > 1 && (
              <Button
                type="button"
                onClick={() => removeCertification(certification.id)}
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
              <Label htmlFor={`name-${certification.id}`}>Certification Name</Label>
              <Input
                id={`name-${certification.id}`}
                value={certification.name}
                onChange={(e) => handleChange(certification.id, "name", e.target.value)}
                placeholder="AWS Certified Solutions Architect"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`issuer-${certification.id}`}>Issuing Organization</Label>
              <Input
                id={`issuer-${certification.id}`}
                value={certification.issuer}
                onChange={(e) => handleChange(certification.id, "issuer", e.target.value)}
                placeholder="Amazon Web Services"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`date-${certification.id}`}>Issue Date</Label>
              <Input
                id={`date-${certification.id}`}
                type="month"
                value={certification.date}
                onChange={(e) => handleChange(certification.id, "date", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`expiry-${certification.id}`}>Expiry Date (Optional)</Label>
              <Input
                id={`expiry-${certification.id}`}
                type="month"
                value={certification.expiry || ""}
                onChange={(e) => handleChange(certification.id, "expiry", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`credentialId-${certification.id}`}>Credential ID (Optional)</Label>
              <Input
                id={`credentialId-${certification.id}`}
                value={certification.credentialId || ""}
                onChange={(e) => handleChange(certification.id, "credentialId", e.target.value)}
                placeholder="ABC123XYZ"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`credentialUrl-${certification.id}`}>Credential URL (Optional)</Label>
              <Input
                id={`credentialUrl-${certification.id}`}
                value={certification.credentialUrl || ""}
                onChange={(e) => handleChange(certification.id, "credentialUrl", e.target.value)}
                placeholder="https://www.credential.net/abc123xyz"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

