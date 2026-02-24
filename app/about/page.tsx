'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
      <Navbar currentPage="about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">About Kapil Electricals</h1>
          <p className="text-lg lg:text-xl text-gray-600 text-balance text-center lg:text-left">Your trusted partner in electrical and solar solutions</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">Who We Are</h2>
              <p className="text-base lg:text-lg text-gray-600 mb-4 text-balance">
                Kapil Electricals is a leading electrical contracting and solar solutions company with over 15 years of experience serving government, commercial, and residential clients. We specialize in large-scale electrical infrastructure projects and renewable energy solutions.
              </p>
              <p className="text-base lg:text-lg text-gray-600 text-balance">
                Our team of certified professionals is committed to delivering excellence, ensuring every project meets the highest standards of quality and safety.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
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
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-balance text-sm lg:text-base">
                To provide reliable, professional electrical and solar solutions that exceed client expectations while maintaining the highest standards of safety, quality, and customer service.
              </p>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-balance text-sm lg:text-base">
                To be India's most trusted electrical contracting partner, recognized for innovation, reliability, and commitment to sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Why Choose Kapil Electricals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-12 lg:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Safety Certifications</h3>
              <ul className="space-y-2 text-gray-700 text-sm lg:text-base">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> ISO 9001:2015 Certified</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> OHSAS 18001 Safety Standard</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> Electrical License: EL/2024/XXX</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> GST Registered</li>
              </ul>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Government Registration</h3>
              <ul className="space-y-2 text-gray-700 text-sm lg:text-base">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> Government Contractor License</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> Ministry of Power Approved</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> Labor License: LB/2024/XXX</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-blue-600" /> MSME Registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Let's bring your electrical and solar projects to life</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
