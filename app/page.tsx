'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Phone, Mail, Zap, Sun, Wrench, Building2, Home as HomeIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showFloating, setShowFloating] = useState(false)

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
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 text-balance">
                Reliable Electrical & Solar Solutions You Can Trust
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 text-balance">
                Delivering Quality Electrical Services & Government Projects with Professional Excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg border-blue-600 text-blue-600">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.jpg"
                alt="Electrical work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Our Work</h2>
          <div className="relative">
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{slides[currentSlide].title}</h3>
                </div>
              </div>
            </div>
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-gray-900" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-gray-900" />
            </button>
            <div className="flex justify-center gap-2 mt-4 lg:mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">About Kapil Electricals</h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8 lg:mb-12 text-balance">
            With over 15 years of experience, Kapil Electricals is a trusted partner for government, commercial, and residential electrical projects. We combine technical expertise with professional excellence.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
            <div className="p-4 lg:p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">500+</div>
              <p className="text-sm lg:text-base text-gray-700">Projects Completed</p>
            </div>
            <div className="p-4 lg:p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">15+</div>
              <p className="text-sm lg:text-base text-gray-700">Years Experience</p>
            </div>
            <div className="p-4 lg:p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">1000+</div>
              <p className="text-sm lg:text-base text-gray-700">Happy Clients</p>
            </div>
            <div className="p-4 lg:p-6 bg-blue-50 rounded-lg col-span-2 lg:col-span-1">
              <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1 lg:mb-2">200+</div>
              <p className="text-sm lg:text-base text-gray-700">Solar Installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition text-center">
                  <Icon className="w-10 lg:w-12 h-10 lg:h-12 text-blue-600 mx-auto mb-3 lg:mb-4" />
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 lg:p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-balance text-sm lg:text-base">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Contact us today for your electrical and solar needs</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />

      {/* Floating Buttons */}
      {showFloating && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 lg:gap-4 z-40">
          <a
            href="tel:+919999999999"
            className="bg-blue-600 text-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
            title="Call Now"
          >
            <Phone className="w-5 lg:w-6 h-5 lg:h-6" />
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
            title="WhatsApp"
          >
            <span className="text-lg lg:text-xl">💬</span>
          </a>
        </div>
      )}

      {/* Back to Top Button */}
      {showFloating && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 lg:right-8 bg-gray-700 text-white p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center z-40"
          title="Back to Top"
          style={{ bottom: showFloating ? '140px' : 'auto' }}
        >
          <span className="text-lg lg:text-xl">↑</span>
        </button>
      )}
    </div>
  )
}
