'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/solar', label: 'Solar Solutions' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 transition ${
                  currentPage === link.href.slice(1) || (currentPage === 'home' && link.href === '/')
                    ? 'text-blue-600 font-semibold'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
