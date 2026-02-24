'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

  const ProjectCard = ({ project }: any) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>📍 {project.location}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">Kapil Electricals</span>
            </Link>
            <div className="flex flex-wrap items-center gap-4 justify-end">
              <Link href="/" className="text-sm text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="/projects" className="text-sm text-blue-600 font-semibold">Projects</Link>
              <Link href="/solar" className="text-sm text-gray-700 hover:text-blue-600 transition">Solar</Link>
              <Link href="/certifications" className="text-sm text-gray-700 hover:text-blue-600 transition">Certifications</Link>
              <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600 transition">Contact</Link>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-sm">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 text-balance">Showcasing our expertise across government, commercial, and residential sectors</p>
        </div>
      </section>

      {/* Government Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Government Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.government.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Commercial Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.commercial.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Residential Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Residential Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.residential.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Project Starts Here</h2>
          <p className="text-xl mb-8 text-balance">Get a professional electrical solution tailored to your needs</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Kapil Electricals</h3>
              <p className="text-sm">Professional electrical and solar solutions for all your needs.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link href="/solar" className="hover:text-white transition">Solar Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Government Contracts</a></li>
                <li><a href="#" className="hover:text-white transition">Commercial Work</a></li>
                <li><a href="#" className="hover:text-white transition">Residential Services</a></li>
                <li><a href="#" className="hover:text-white transition">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 +91-XXXXXXXXXX</li>
                <li>✉️ info@kapilelectricals.com</li>
                <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Kapil Electricals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
