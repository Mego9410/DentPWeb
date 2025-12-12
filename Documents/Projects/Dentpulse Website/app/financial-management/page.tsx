import React from 'react'
import CTA from '@/components/sections/CTA'

export const metadata = {
  title: 'Financial Management - DentPulse',
  description: 'Learn about DentPulse financial management solutions for dental practices.',
}

export default function FinancialManagementPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Financial Management
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Transform your dental practice&apos;s financial health with our proven management strategies
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700">
              Our financial management services are designed to help dental practice owners take control of their finances, optimize cash flow, and build long-term wealth.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-gray-700">
              We provide end-to-end financial management services tailored specifically for dental practices, including cash flow optimization, profit maximization, debt management, and strategic tax planning.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

