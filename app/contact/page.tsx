'use client'

import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const services = [
    'Government Electrical Contracts',
    'Solar Installation',
    'Commercial Electrical Work',
    'Residential Wiring',
    'Maintenance & Repair',
    'Other',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">Contact Us</h1>
          <p className="text-lg lg:text-xl text-gray-600 text-balance text-center lg:text-left">Get in touch with our team for quotes and inquiries</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex gap-3 lg:gap-4">
                <Phone className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Phone</h3>
                  <p className="text-gray-600 text-sm lg:text-base">+91-9999-999-999</p>
                  <p className="text-gray-600 text-sm lg:text-base">+91-8888-888-888</p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <Mail className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Email</h3>
                  <p className="text-gray-600 text-sm lg:text-base">info@kapilelectricals.com</p>
                  <p className="text-gray-600 text-sm lg:text-base">quotes@kapilelectricals.com</p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <MapPin className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Address</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Kapil Electricals<br />
                    123 Industrial Estate<br />
                    New Delhi, 110001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-3 lg:gap-4">
                <Clock className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">Office Hours</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM<br />
                    <br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>

              <div className="pt-4 lg:pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm lg:text-base">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm lg:text-base">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm lg:text-base">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm lg:text-base">Twitter</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 bg-gray-50 p-6 lg:p-8 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm lg:text-base"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm lg:text-base"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm lg:text-base"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm lg:text-base"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-sm lg:text-base"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 lg:py-4 text-base lg:text-lg">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Our Location</h2>
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-lg shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2784521827936!2d77.25739!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01c08f9d9d9d%3A0x1234567890abcdef!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Quick Contact Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
            <a
              href="tel:+919999999999"
              className="bg-blue-600 text-white p-6 lg:p-8 rounded-lg text-center hover:bg-blue-700 transition"
            >
              <Phone className="w-10 lg:w-12 h-10 lg:h-12 mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold mb-2">Call Now</h3>
              <p className="text-sm lg:text-base">+91-9999-999-999</p>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-6 lg:p-8 rounded-lg text-center hover:bg-green-700 transition"
            >
              <span className="text-4xl lg:text-5xl mb-3 lg:mb-4 block">💬</span>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm lg:text-base">Message Us</p>
            </a>

            <a
              href="mailto:info@kapilelectricals.com"
              className="bg-orange-600 text-white p-6 lg:p-8 rounded-lg text-center hover:bg-orange-700 transition"
            >
              <Mail className="w-10 lg:w-12 h-10 lg:h-12 mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-semibold mb-2">Email</h3>
              <p className="text-sm lg:text-base">info@kapilelectricals.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Contact us today for a free consultation and quote</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
