import React from 'react'

export const metadata = {
  title: 'Data Security - DentPulse',
  description: 'DentPulse Data Security Information',
}

export default function DataSecurityPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Data Security
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <p>
              At DentPulse, we take data security seriously and implement industry-standard measures to protect your information.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Security Measures
            </h2>
            <p>
              We use encryption, secure servers, and regular security audits to protect your data.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Compliance
            </h2>
            <p>
              We comply with relevant data protection regulations and industry standards to ensure your information is handled securely.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal information at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

