import React from 'react'

export default function Testimonial() {
  return (
    <section id="testimonials" className="section-padding bg-white" aria-labelledby="testimonial-heading">
      <div className="container-custom">
        <h2 id="testimonial-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          What Client Says
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Meet Dr. Manish Chitnis from Dental Concepts Andover
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Dr. Manish Chitnis</h4>
                <p className="text-gray-700 italic mb-4">
                  &quot;Hear directly from Dr. Manish Chitnis about how DentPulse transformed his dental practice.&quot;
                </p>
              </div>
              <div className="space-y-3">
                <div>
                  <strong className="text-gray-900">Who is He:</strong>{' '}
                  <span className="text-gray-700">
                    A driven dental practice owner managing three clinics while striving for financial growth and stability.
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900">Challenge:</strong>{' '}
                  <span className="text-gray-700">
                    Dr. Chitnis was cash-strapped, operating with a maxed-out overdraft facility and struggling to plan for growth.
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900">What We Did:</strong>{' '}
                  <span className="text-gray-700">
                    We optimized his dental practice&apos;s cash flow management, streamlined expenses, and built a financial strategy to create a cash runway and stabilize operations.
                  </span>
                </div>
                <div>
                  <strong className="text-gray-900">What Was the Result?:</strong>{' '}
                  <span className="text-gray-700">
                    In just 18 months, Dr. Chitnis achieved a 3-month cash runway and expanded to a fourth dental practice.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-lg font-semibold text-gray-900">
                &quot;Dr. Manish Chitnis built a 3-month cash runway and expanded to a fourth location in just 18 months. Ready to join him?&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

