"use client"

import type { ResumeData } from "@/types/resume"
import { formatDate } from "@/lib/utils"
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  FileCode,
} from "lucide-react"

interface ResumeTemplateProps {
  data: ResumeData
  template: "modern" | "classic" | "minimal"
}

export default function ResumeTemplate({ data, template }: ResumeTemplateProps) {
  if (template === "modern") {
    return <ModernTemplate data={data} />
  } else if (template === "classic") {
    return <ClassicTemplate data={data} />
  } else {
    return <MinimalTemplate data={data} />
  }
}

function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 shadow-lg">
      <div className="border-b border-blue-600 pb-6">
        <h1 className="text-3xl font-bold text-blue-700">{data.personal.name}</h1>
        <div className="mt-4 flex flex-wrap gap-4">
          {data.personal.phoneNumber && (
            <div className="flex items-center gap-1 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>{data.personal.phoneNumber}</span>
            </div>
          )}
          {data.personal.email && (
            <div className="flex items-center gap-1 text-sm">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>{data.personal.email}</span>
            </div>
          )}
          {data.personal.city && (
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{data.personal.city}</span>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center gap-1 text-sm">
              <Linkedin className="h-4 w-4 text-blue-600" />
              <span>{data.personal.linkedin}</span>
            </div>
          )}
          {data.personal.github && (
            <div className="flex items-center gap-1 text-sm">
              <Github className="h-4 w-4 text-blue-600" />
              <span>{data.personal.github}</span>
            </div>
          )}
        </div>
      </div>

      {data.education.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-700">
            <GraduationCap className="h-5 w-5" /> Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-sm font-medium">
                  {edu.degree} in {edu.field}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="mt-1 text-sm">
                  {edu.percentage && `Percentage: ${edu.percentage}`}
                  {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-700">
            <Briefcase className="h-5 w-5" /> Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <h3 className="font-semibold">{exp.position}</h3>
                <p className="text-sm font-medium">
                  {exp.company}, {exp.location}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="mt-1 text-sm whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(data.skills.languages.length > 0 ||
        data.skills.frameworks.length > 0 ||
        data.skills.tools.length > 0 ||
        data.skills.soft.length > 0) && (
        <div className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-700">
            <Code className="h-5 w-5" /> Skills
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Programming Languages</h3>
                <p className="text-sm">{data.skills.languages.join(", ")}</p>
              </div>
            )}
            {data.skills.frameworks.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Frameworks & Libraries</h3>
                <p className="text-sm">{data.skills.frameworks.join(", ")}</p>
              </div>
            )}
            {data.skills.tools.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Tools & Technologies</h3>
                <p className="text-sm">{data.skills.tools.join(", ")}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Soft Skills</h3>
                <p className="text-sm">{data.skills.soft.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-700">
            <FileCode className="h-5 w-5" /> Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium">Technologies: {project.technologies}</p>
                {project.link && (
                  <p className="text-xs text-blue-600">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.link}
                    </a>
                  </p>
                )}
                <p className="mt-1 text-sm whitespace-pre-line">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.certifications.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold text-blue-700">
            <Award className="h-5 w-5" /> Certifications & Training
          </h2>
          <div className="space-y-4">
            {data.certifications.map((cert, index) => (
              <div key={index} className="border-l-2 border-blue-200 pl-4">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm font-medium">{cert.issuer}</p>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>
                    Issued: {formatDate(cert.date)}
                    {cert.expiry && ` | Expires: ${formatDate(cert.expiry)}`}
                  </span>
                </div>
                {cert.credentialId && <p className="text-xs">Credential ID: {cert.credentialId}</p>}
                {cert.credentialUrl && (
                  <p className="text-xs text-blue-600">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ClassicTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 shadow-lg">
      <div className="border-b-2 border-gray-300 pb-6 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wider">{data.personal.name}</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {data.personal.phoneNumber && (
            <div className="flex items-center gap-1 text-sm">
              <Phone className="h-4 w-4 text-gray-600" />
              <span>{data.personal.phoneNumber}</span>
            </div>
          )}
          {data.personal.email && (
            <div className="flex items-center gap-1 text-sm">
              <Mail className="h-4 w-4 text-gray-600" />
              <span>{data.personal.email}</span>
            </div>
          )}
          {data.personal.city && (
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span>{data.personal.city}</span>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center gap-1 text-sm">
              <Linkedin className="h-4 w-4 text-gray-600" />
              <span>{data.personal.linkedin}</span>
            </div>
          )}
          {data.personal.github && (
            <div className="flex items-center gap-1 text-sm">
              <Github className="h-4 w-4 text-gray-600" />
              <span>{data.personal.github}</span>
            </div>
          )}
        </div>
      </div>

      {data.education.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold uppercase tracking-wider">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold">{edu.institution}</h3>
                  <p className="text-sm">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="mt-1 text-sm">
                    {edu.percentage && `Percentage: ${edu.percentage}`}
                    {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold uppercase tracking-wider">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-sm">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="mt-1 text-sm whitespace-pre-line">{exp.description}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {(data.skills.languages.length > 0 ||
        data.skills.frameworks.length > 0 ||
        data.skills.tools.length > 0 ||
        data.skills.soft.length > 0) && (
        <div className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold uppercase tracking-wider">Skills</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Programming Languages:</h3>
                <p className="text-sm">{data.skills.languages.join(", ")}</p>
              </div>
            )}
            {data.skills.frameworks.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Frameworks & Libraries:</h3>
                <p className="text-sm">{data.skills.frameworks.join(", ")}</p>
              </div>
            )}
            {data.skills.tools.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Tools & Technologies:</h3>
                <p className="text-sm">{data.skills.tools.join(", ")}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold">Soft Skills:</h3>
                <p className="text-sm">{data.skills.soft.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold uppercase tracking-wider">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm">Technologies: {project.technologies}</p>
                  {project.link && (
                    <p className="text-xs text-gray-600">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.link}
                      </a>
                    </p>
                  )}
                  <p className="mt-1 text-sm whitespace-pre-line">{project.description}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  {formatDate(project.startDate)} - {formatDate(project.endDate)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.certifications.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 border-b border-gray-300 pb-1 text-xl font-bold uppercase tracking-wider">
            Certifications & Training
          </h2>
          <div className="space-y-4">
            {data.certifications.map((cert, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm">{cert.issuer}</p>
                  {cert.credentialId && <p className="text-xs">Credential ID: {cert.credentialId}</p>}
                  {cert.credentialUrl && (
                    <p className="text-xs">
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600">
                        Verify Credential
                      </a>
                    </p>
                  )}
                </div>
                <div className="text-right text-sm text-gray-600">
                  Issued: {formatDate(cert.date)}
                  {cert.expiry && <div>Expires: {formatDate(cert.expiry)}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MinimalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 shadow-lg">
      <div className="pb-4">
        <h1 className="text-2xl font-bold">{data.personal.name}</h1>
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">
          {data.personal.phoneNumber && <span>{data.personal.phoneNumber}</span>}
          {data.personal.email && <span>{data.personal.email}</span>}
          {data.personal.city && <span>{data.personal.city}</span>}
          {data.personal.linkedin && <span>{data.personal.linkedin}</span>}
          {data.personal.github && <span>{data.personal.github}</span>}
        </div>
      </div>

      {data.education.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="mb-2 text-lg font-medium">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
                <p className="text-sm">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-sm text-gray-600">
                  {edu.percentage && `Percentage: ${edu.percentage}`}
                  {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="mb-2 text-lg font-medium">Experience</h2>
          <div className="space-y-3">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-sm">
                  {exp.company}, {exp.location}
                </p>
                <p className="mt-1 text-sm whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(data.skills.languages.length > 0 ||
        data.skills.frameworks.length > 0 ||
        data.skills.tools.length > 0 ||
        data.skills.soft.length > 0) && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="mb-2 text-lg font-medium">Skills</h2>
          <div className="space-y-2">
            {data.skills.languages.length > 0 && (
              <p className="text-sm">
                <span className="font-medium">Programming Languages:</span> {data.skills.languages.join(", ")}
              </p>
            )}
            {data.skills.frameworks.length > 0 && (
              <p className="text-sm">
                <span className="font-medium">Frameworks & Libraries:</span> {data.skills.frameworks.join(", ")}
              </p>
            )}
            {data.skills.tools.length > 0 && (
              <p className="text-sm">
                <span className="font-medium">Tools & Technologies:</span> {data.skills.tools.join(", ")}
              </p>
            )}
            {data.skills.soft.length > 0 && (
              <p className="text-sm">
                <span className="font-medium">Soft Skills:</span> {data.skills.soft.join(", ")}
              </p>
            )}
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="mb-2 text-lg font-medium">Projects</h2>
          <div className="space-y-3">
            {data.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{project.title}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(project.startDate)} - {formatDate(project.endDate)}
                  </span>
                </div>
                <p className="text-sm">Technologies: {project.technologies}</p>
                {project.link && (
                  <p className="text-xs text-gray-600">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.link}
                    </a>
                  </p>
                )}
                <p className="mt-1 text-sm whitespace-pre-line">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.certifications.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="mb-2 text-lg font-medium">Certifications & Training</h2>
          <div className="space-y-3">
            {data.certifications.map((cert, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="font-medium">{cert.name}</h3>
                  <span className="text-sm text-gray-600">Issued: {formatDate(cert.date)}</span>
                </div>
                <p className="text-sm">{cert.issuer}</p>
                {cert.expiry && <p className="text-xs text-gray-600">Expires: {formatDate(cert.expiry)}</p>}
                {cert.credentialId && <p className="text-xs text-gray-600">Credential ID: {cert.credentialId}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

