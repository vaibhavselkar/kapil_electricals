'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Sun, Leaf, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Solar() {
  const [reviews, setReviews] = useState([
    { name: 'Amit Sharma', rating: 5, text: 'Best solar installation! Saving 40% on electricity bills.' },
    { name: 'Neha Gupta', rating: 5, text: 'Professional team, excellent workmanship. Highly recommended!' },
    { name: 'Rajesh Kumar', rating: 5, text: 'Government approval was smooth. Great support!' },
    { name: 'Priya Singh', rating: 5, text: 'ROI achieved within 4 years. Very satisfied!' },
    { name: 'Vikram Patel', rating: 5, text: 'Maintenance service is excellent and prompt.' },
    { name: 'Anjali Desai', rating: 5, text: 'Industry best warranty and after-sales support.' },
  ])

  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.name && newReview.text) {
      setReviews([...reviews, newReview])
      setNewReview({ name: '', rating: 5, text: '' })
      alert('Thank you for your review!')
    }
  }

  const services = [
    { icon: Sun, title: 'Solar Panel Installation', description: 'State-of-the-art solar panel systems for homes and businesses' },
    { icon: TrendingUp, title: 'Rooftop Solar Systems', description: 'Maximum efficiency rooftop installations' },
    { icon: Leaf, title: 'Industrial Solar Solutions', description: 'Large-scale solar systems for industries' },
    { icon: CheckCircle, title: 'Government Solar Programs', description: 'Solar subsidy and government contract eligibility' },
    { icon: Zap, title: 'Solar Maintenance', description: 'Regular maintenance and performance monitoring' },
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
            <div className="flex flex-wrap items-center gap-4 justify-end">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
              <Link href="/solar" className="text-blue-600 font-semibold">Solar Solutions</Link>
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
      <section className="bg-gradient-to-br from-amber-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
                Harness the Power of the Sun
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Premium solar solutions for residential, commercial, and government projects
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Get Solar Quote
                  </Button>
                </Link>
                <Button variant="outline" className="px-8 py-6 text-lg border-blue-600 text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpg"
                alt="Solar panels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 text-balance">Save up to 80% on electricity bills over the system's lifetime</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environment Friendly</h3>
              <p className="text-gray-600 text-balance">Reduce carbon footprint and contribute to a sustainable future</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Increase Property Value</h3>
              <p className="text-gray-600 text-balance">Boost your property value with renewable energy systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Solar Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
                  <Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-balance">{review.text}</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
                  <option value={4}>⭐⭐⭐⭐ Very Good</option>
                  <option value={3}>⭐⭐⭐ Good</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                <textarea
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Share your experience..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Solar Journey Today</h2>
          <p className="text-xl mb-8 text-balance">Join hundreds of satisfied customers saving on energy costs</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Get Free Consultation
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
