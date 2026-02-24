'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Sun, Leaf, TrendingUp, CheckCircle, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Solar() {
  const [reviews] = useState([
    { name: 'Amit Sharma', rating: 5, text: 'Best solar installation! Saving 40% on electricity bills.' },
    { name: 'Neha Gupta', rating: 5, text: 'Professional team, excellent workmanship. Highly recommended!' },
    { name: 'Rajesh Kumar', rating: 5, text: 'Government approval was smooth. Great support!' },
    { name: 'Priya Singh', rating: 5, text: 'ROI achieved within 4 years. Very satisfied!' },
    { name: 'Vikram Patel', rating: 5, text: 'Maintenance service is excellent and prompt.' },
    { name: 'Anjali Desai', rating: 5, text: 'Industry best warranty and after-sales support.' },
  ])

  const services = [
    { icon: Sun, title: 'Solar Panel Installation', description: 'State-of-the-art solar panel systems for homes and businesses' },
    { icon: TrendingUp, title: 'Rooftop Solar Systems', description: 'Maximum efficiency rooftop installations' },
    { icon: Leaf, title: 'Industrial Solar Solutions', description: 'Large-scale solar systems for industries' },
    { icon: CheckCircle, title: 'Government Solar Programs', description: 'Solar subsidy and government contract eligibility' },
    { icon: Zap, title: 'Solar Maintenance', description: 'Regular maintenance and performance monitoring' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="solar" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 text-balance">
                Harness the Power of the Sun
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 text-balance">
                Premium solar solutions for residential, commercial, and government projects
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
                    Get Solar Quote
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg border-blue-600 text-blue-600">
                    Our Projects
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
              <Image
                src="/placeholder.jpg"
                alt="Solar panels"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Why Choose Solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 text-sm lg:text-base">Save up to 80% on electricity bills over the system's lifetime</p>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">Environment Friendly</h3>
              <p className="text-gray-600 text-sm lg:text-base">Reduce carbon footprint and contribute to a sustainable future</p>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">Increase Property Value</h3>
              <p className="text-gray-600 text-sm lg:text-base">Boost your property value with renewable energy systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Our Solar Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
                  <Icon className="w-10 lg:w-12 h-10 lg:h-12 text-amber-500 mx-auto mb-3 lg:mb-4" />
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-balance text-sm lg:text-base">{review.text}</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Start Your Solar Journey Today</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Join hundreds of satisfied customers saving on energy costs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg border-2 border-white text-white hover:bg-white/10 rounded-lg transition"
            >
              <Phone className="w-5 lg:w-6 h-5 lg:h-6 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
