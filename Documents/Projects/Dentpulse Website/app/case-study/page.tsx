import React from 'react'
import Testimonial from '@/components/sections/Testimonial'
import CTA from '@/components/sections/CTA'

export const metadata = {
  title: 'Case Study - DentPulse',
  description: 'Read about how DentPulse helped Dr. Manish Chitnis transform his dental practice.',
}

export default function CaseStudyPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Case Study: Dr. Manish Chitnis
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            How Dental Concepts Went from Profitable but Cash-Hungry to Doubly Profitable with a 3-Month Cash Cushion
          </p>
        </div>
      </section>
      <Testimonial />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Transformation Journey
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Starting with a deep dive into Dr. Chitnis&apos;s dental practice finances, we uncovered cash flow leaks, optimized profits, and built a roadmap for lasting financial success—all with DentPulse&apos;s proven system.
              </p>
              <p>
                In just 18 months, Dr. Chitnis achieved remarkable results: a 3-month cash runway and expansion to a fourth dental practice location.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

