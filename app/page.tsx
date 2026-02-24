'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Phone, Mail, Zap, Sun, Wrench, Building2, Home as HomeIcon, CheckCircle, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showFloating, setShowFloating] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const slides = [
    { title: 'Electrical Panel Installation', image: '/placeholder.jpg' },
    { title: 'Government Project Works', image: '/placeholder.jpg' },
    { title: 'Solar Panel Installation', image: '/placeholder.jpg' },
    { title: 'Wiring & Infrastructure', image: '/placeholder.jpg' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { icon: Building2, title: 'Government Contracts', description: 'Large-scale government electrical projects' },
    { icon: Sun, title: 'Solar Solutions', description: 'Solar installation and power systems' },
    { icon: Zap, title: 'Commercial Work', description: 'Industrial and commercial electrical systems' },
    { icon: HomeIcon, title: 'Residential Services', description: 'Home wiring and installation' },
    { icon: Wrench, title: 'Maintenance & Repair', description: 'Regular maintenance and repairs' },
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', rating: 5, text: 'Excellent work on our government project. Highly professional!' },
    { name: 'Priya Singh', rating: 5, text: 'Best solar installation experience. Great team!' },
    { name: 'Arun Patel', rating: 5, text: 'Reliable and trustworthy. Completed on schedule.' },
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
              <Link href="/" className="text-sm text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="/projects" className="text-sm text-gray-700 hover:text-blue-600 transition">Projects</Link>
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
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
                Reliable Electrical & Solar Solutions You Can Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Delivering Quality Electrical Services & Government Projects with Professional Excellence
              </p>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8 py-6 text-lg border-blue-600 text-blue-600">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpg"
                alt="Electrical work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Work</h2>
          <div className="relative">
            <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">{slides[currentSlide].title}</h3>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Kapil Electricals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12 text-balance">
            With over 15 years of experience, Kapil Electricals is a trusted partner for government, commercial, and residential electrical projects. We combine technical expertise with professional excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-700">Projects Completed</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-700">Solar Installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-balance">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-balance">Contact us today for your electrical and solar needs</p>
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
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91-XXXXXXXXXX</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@kapilelectricals.com</li>
                <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Kapil Electricals. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      {showFloating && (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
          <a
            href="tel:+919999999999"
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
            title="Call Now"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
            title="WhatsApp"
          >
            <span className="text-lg">💬</span>
          </a>
        </div>
      )}

      {/* Back to Top Button */}
      {showFloating && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-32 right-8 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center z-40"
          title="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  )
}
