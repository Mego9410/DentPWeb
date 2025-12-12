import React from 'react'

export const metadata = {
  title: 'Privacy Policy - DentPulse',
  description: 'DentPulse Privacy Policy',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <p>
              At DentPulse, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including contact information, practice details, and financial data necessary to provide our services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

