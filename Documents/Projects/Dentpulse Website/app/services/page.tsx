import React from 'react'
import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'

export const metadata = {
  title: 'Services - DentPulse',
  description: 'Discover how DentPulse can help your dental practice with cash flow management, profit maximization, debt management, tax planning, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Comprehensive financial management solutions designed specifically for dental practices
          </p>
        </div>
      </section>
      <Services />
      <CTA />
    </>
  )
}

