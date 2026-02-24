'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Projects() {
  const projects = {
    government: [
      { title: 'Smart City Electrical Grid', location: 'Delhi', year: 2023, image: '/placeholder.jpg', description: 'Large-scale electrical infrastructure for smart city project' },
      { title: 'Government Hospital Wiring', location: 'Mumbai', year: 2022, image: '/placeholder.jpg', description: 'Complete electrical installation for 500-bed hospital' },
      { title: 'Defense Base Upgrade', location: 'Bangalore', year: 2023, image: '/placeholder.jpg', description: 'High-security electrical systems upgrade' },
    ],
    commercial: [
      { title: 'IT Park Infrastructure', location: 'Pune', year: 2023, image: '/placeholder.jpg', description: 'Electrical systems for 200,000 sq ft IT park' },
      { title: 'Shopping Mall Installation', location: 'Hyderabad', year: 2022, image: '/placeholder.jpg', description: 'Complete electrical wiring and automation' },
      { title: 'Manufacturing Plant', location: 'Chennai', year: 2023, image: '/placeholder.jpg', description: 'Heavy-duty industrial electrical installation' },
    ],
    residential: [
      { title: 'Residential Complex Wiring', location: 'Gurgaon', year: 2023, image: '/placeholder.jpg', description: '50-unit residential complex electrical setup' },
      { title: 'Home Automation Installation', location: 'Noida', year: 2023, image: '/placeholder.jpg', description: 'Smart home electrical systems' },
      { title: 'Multi-Story Building', location: 'Kolkata', year: 2022, image: '/placeholder.jpg', description: '30-story building electrical infrastructure' },
    ],
  }

  const ProjectCard = ({ project }: { project: typeof projects.government[0] }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative h-48 sm:h-56 bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex justify-between text-xs sm:text-sm text-gray-500">
          <span>📍 {project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="projects" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">Our Projects</h1>
          <p className="text-lg lg:text-xl text-gray-600 text-balance text-center lg:text-left">Showcasing our expertise across government, commercial, and residential sectors</p>
        </div>
      </section>

      {/* Government Projects */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Government Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.government.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Commercial Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.commercial.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Residential Projects */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Residential Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.residential.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Your Project Starts Here</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Get a professional electrical solution tailored to your needs</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
