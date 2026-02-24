'use client'

import Link from 'next/link'
import { Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Certifications() {
  const certifications = [
    {
      category: 'Safety & Quality Certifications',
      items: [
        { name: 'ISO 9001:2015 Quality Management', number: 'ISO/QMS/2023/001', date: 'Valid till 2025' },
        { name: 'OHSAS 18001 Occupational Health & Safety', number: 'OHSAS/18001/2023/001', date: 'Valid till 2025' },
        { name: 'Electrical Safety Certification', number: 'ES/CERT/2024/001', date: 'Valid till 2026' },
        { name: 'Fire Safety Compliance', number: 'FS/COMP/2024/001', date: 'Valid till 2025' },
      ]
    },
    {
      category: 'Government Licenses & Registration',
      items: [
        { name: 'Government Contractor License', number: 'GC/LIC/2024/001', date: 'Valid till 2026' },
        { name: 'Electrical Contractor License', number: 'EL/2024/xxxxx', date: 'Valid till 2027' },
        { name: 'Ministry of Power Approval', number: 'MOP/APPR/2023/001', date: 'Permanent' },
        { name: 'Labor License', number: 'LB/2024/xxxxx', date: 'Valid till 2025' },
      ]
    },
    {
      category: 'Business Registration',
      items: [
        { name: 'GST Registration', number: 'GST ID: 27XXXXXXXXXXXXX', date: 'Active' },
        { name: 'MSME Registration', number: 'MSME/UD/2023/001', date: 'Active' },
        { name: 'PAN Registration', number: 'XXXXXXXXXXXXX', date: 'Active' },
        { name: 'Company Registration', number: 'CIN/2015/XXXXX', date: 'Active' },
      ]
    },
    {
      category: 'Compliance Certifications',
      items: [
        { name: 'Environmental Compliance', number: 'EC/CERT/2024/001', date: 'Valid till 2025' },
        { name: 'Electrical Safety Code Compliance', number: 'ESC/CODE/2024/001', date: 'Valid till 2026' },
        { name: 'Building Bye-Laws Compliance', number: 'BBC/COMP/2024/001', date: 'Valid till 2025' },
        { name: 'Contract Eligibility Certificate', number: 'CEC/2024/001', date: 'Valid till 2026' },
      ]
    },
  ]

  const contractEligibility = [
    'Government tenders for electrical contracts',
    'Infrastructure development projects',
    'Smart city implementation projects',
    'Industrial and commercial projects',
    'Residential complex installations',
    'Solar energy projects',
    'Defense and security installations',
    'Healthcare facility projects',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="certifications" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 text-center lg:text-left">Licenses & Certifications</h1>
          <p className="text-lg lg:text-xl text-gray-600 text-balance text-center lg:text-left">Fully certified and government-approved electrical contractor</p>
        </div>
      </section>

      {/* Certifications Table */}
      {certifications.map((cert, index) => (
        <section key={index} className={index % 2 === 0 ? 'py-12 lg:py-16 bg-white' : 'py-12 lg:py-16 bg-gray-50'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">{cert.category}</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-blue-600">
                    <th className="text-left py-3 lg:py-4 px-3 lg:px-6 font-semibold text-gray-900 text-sm lg:text-base">Certification Name</th>
                    <th className="text-left py-3 lg:py-4 px-3 lg:px-6 font-semibold text-gray-900 text-sm lg:text-base">License/Certificate Number</th>
                    <th className="text-left py-3 lg:py-4 px-3 lg:px-6 font-semibold text-gray-900 text-sm lg:text-base">Validity Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cert.items.map((item, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-gray-100/50 transition">
                      <td className="py-3 lg:py-4 px-3 lg:px-6 text-gray-700 flex items-center gap-2 text-sm lg:text-base">
                        <CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600 flex-shrink-0" />
                        <span className="line-clamp-1">{item.name}</span>
                      </td>
                      <td className="py-3 lg:py-4 px-3 lg:px-6 text-gray-600 font-mono text-xs lg:text-sm">{item.number}</td>
                      <td className="py-3 lg:py-4 px-3 lg:px-6 text-gray-600 text-xs lg:text-sm">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Contract Eligibility */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Contract Eligibility</h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 text-balance">
            With our complete certifications and government approvals, Kapil Electricals is eligible for the following project categories:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {contractEligibility.map((item, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4 p-4 lg:p-6 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 lg:w-6 h-5 lg:h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium text-sm lg:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Compliance & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Safety Standards</h3>
              <ul className="space-y-2 lg:space-y-3 text-gray-700 text-sm lg:text-base">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Indian Electrical Rules 1956</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> National Building Code 2016</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Occupational Safety Standards</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Environmental Protection Act</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Workers Compensation Act</li>
              </ul>
            </div>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
              <ul className="space-y-2 lg:space-y-3 text-gray-700 text-sm lg:text-base">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> ISO 9001:2015 Quality Management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> ISO 14001 Environmental Management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Regular Audit & Inspection</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Continuous Improvement Program</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" /> Industry Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Info */}
      <section className="py-12 lg:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">Verify Our Credentials</h2>
          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 text-balance">
            All our certifications and licenses are current and can be verified with relevant government authorities
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3">
              Request Certificate Verification
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">Trusted by Governments & Corporations</h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-balance">Our certifications ensure quality, safety, and reliability in every project</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 lg:px-8 py-3 lg:py-6 text-base lg:text-lg">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
