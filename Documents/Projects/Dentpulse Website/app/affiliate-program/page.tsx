import React from 'react'

export const metadata = {
  title: 'Affiliate Program - DentPulse',
  description: 'Join the DentPulse Affiliate Program',
}

export default function AffiliateProgramPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Affiliate Program
          </h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <p>
              Join the DentPulse Affiliate Program and earn commissions by referring dental practices to our services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How It Works
            </h2>
            <p>
              Refer dental practices to DentPulse and earn commissions on successful referrals.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Benefits
            </h2>
            <p>
              Earn competitive commissions, access marketing materials, and track your referrals through our affiliate dashboard.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

