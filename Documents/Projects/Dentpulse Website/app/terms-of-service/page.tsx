import React from 'react'

export const metadata = {
  title: 'Terms of Service - DentPulse',
  description: 'DentPulse Terms of Service',
}

export default function TermsOfServicePage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Terms Of Services
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <p>
              Please read these Terms of Service carefully before using DentPulse services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using DentPulse services, you agree to be bound by these Terms of Service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of DentPulse services are owned by DentPulse and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

