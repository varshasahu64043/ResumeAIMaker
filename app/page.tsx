import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold">Resume Maker AI</h1>
          <nav className="ml-auto flex gap-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/templates" className="text-sm font-medium hover:underline">
              Templates
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Create Professional Resumes with AI</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Build standout resumes in minutes with our AI-powered resume builder. Tailored for IT industry
              professionals.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/create">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Enter Your Details</h3>
                <p className="text-gray-600">Fill in your personal information, education, experience, and skills.</p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">AI Enhancement</h3>
                <p className="text-gray-600">
                  Our AI analyzes your information and suggests improvements to make your resume stand out.
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Download & Share</h3>
                <p className="text-gray-600">
                  Get your professional resume in multiple formats ready to share with employers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">AI-Powered Content</h3>
                <p className="text-gray-600">Get suggestions for better wording and professional descriptions.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">IT Industry Focus</h3>
                <p className="text-gray-600">Templates and suggestions tailored for technology professionals.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Multiple Templates</h3>
                <p className="text-gray-600">Choose from various professional designs to match your style.</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Export Options</h3>
                <p className="text-gray-600">Download your resume as PDF, DOCX, or share a direct link.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Resume Maker AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

