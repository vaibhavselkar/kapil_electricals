'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  const whyChooseUs = [
    { title: 'Government Approved', description: 'Licensed and registered for government contracts' },
    { title: 'Expert Team', description: '15+ years of combined experience' },
    { title: 'Quality Assured', description: 'ISO certified processes and quality management' },
    { title: 'On-Time Delivery', description: 'Projects completed within agreed timelines' },
    { title: 'Cost Effective', description: 'Competitive pricing without compromising quality' },
    { title: '24/7 Support', description: 'Round-the-clock customer support available' },
  ]

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
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-blue-600 font-semibold">About</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
              <Link href="/solar" className="text-gray-700 hover:text-blue-600 transition">Solar Solutions</Link>
              <Link href="/certifications" className="text-gray-700 hover:text-blue-600 transition">Certifications</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Kapil Electricals</h1>
          <p className="text-xl text-gray-600 text-balance">Your trusted partner in electrical and solar solutions</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 text-balance">
                Kapil Electricals is a leading electrical contracting and solar solutions company with over 15 years of experience serving government, commercial, and residential clients. We specialize in large-scale electrical infrastructure projects and renewable energy solutions.
              </p>
              <p className="text-lg text-gray-600 text-balance">
                Our team of certified professionals is committed to delivering excellence, ensuring every project meets the highest standards of quality and safety.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpg"
                alt="Company"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-balance">
                To provide reliable, professional electrical and solar solutions that exceed client expectations while maintaining the highest standards of safety, quality, and customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-balance">
                To be India's most trusted electrical contracting partner, recognized for innovation, reliability, and commitment to sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Kapil Electricals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> ISO 9001:2015 Certified</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> OHSAS 18001 Safety Standard</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> Electrical License: EL/2024/XXX</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> GST Registered</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Government Registration</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> Government Contractor License</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> Ministry of Power Approved</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> Labor License: LB/2024/XXX</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-600" /> MSME Registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-balance">Let's bring your electrical and solar projects to life</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Get in Touch
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
