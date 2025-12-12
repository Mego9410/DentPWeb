import React from 'react'

export const metadata = {
  title: 'Our Team - DentPulse',
  description: 'Meet the DentPulse team dedicated to transforming dental practice finances.',
}

export default function TeamPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Our Team
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Meet the experts dedicated to transforming your dental practice&apos;s financial health
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-12">
              Our team of financial experts specializes in dental practice management and is committed to helping you achieve your financial goals.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Advisors</h3>
                <p className="text-gray-700">
                  Our certified financial advisors bring years of experience in dental practice financial management.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practice Consultants</h3>
                <p className="text-gray-700">
                  Expert consultants who understand the unique challenges facing dental practice owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

