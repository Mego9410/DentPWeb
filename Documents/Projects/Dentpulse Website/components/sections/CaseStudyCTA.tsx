import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CaseStudyCTA() {
  return (
    <section className="section-padding bg-white" aria-labelledby="case-study-cta-heading">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="case-study-cta-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Results That Speak for Themselves—Are You Ready to Be Next?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            From stronger cash flow to expanded practices, DentPulse has helped dental practices to maximize profit potential, while reducing stress and overwhelm. Will your story be the next?
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We only have 5 spots left this month due to our personalized support. Once these spots are filled, you&apos;ll need to wait—and it will come at a higher investment. Don&apos;t miss this opportunity
          </p>
          <div className="space-y-4">
            <Link href="#assessment-form">
              <Button size="lg">book your free financial assessment today</Button>
            </Link>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How Dr. Manish Chitnis&apos; Dental Concepts Went from Profitable but Cash-Hungry to Doubly Profitable with a 3-Month Cash Cushion and a Second Practice Acquisition
              </h3>
              <Link href="/case-study/">
                <Button variant="outline" size="lg">
                  Click Here To See Our Case Study
                </Button>
              </Link>
            </div>
            <p className="text-gray-600 mt-8">
              Starting with a deep dive into your dental practice&apos;s finances, we uncover cash flow leaks, optimize profits, and build a roadmap for lasting financial success—all with DentPulse&apos;s proven system
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

