import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'About Us - DentPulse',
  description: 'Learn about DentPulse and our mission to transform dental practice finances.',
}

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            About DentPulse
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Transforming dental practice finances, one practice at a time
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 space-y-6">
            <p>
              DentPulse is dedicated to helping dental practice owners transform their cash flow into wealth through our proprietary, proven process.
            </p>
            <p>
              We understand the unique financial challenges facing dental practices and provide tailored solutions that help you focus on what matters most: patient care.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Our Mission
            </h2>
            <p>
              To empower dental practice owners with the financial insights and tools they need to build profitable, valuable practices while maintaining their focus on exceptional patient care.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/contact/">
              <Button>Contact Us</Button>
            </Link>
            <Link href="/about/team/">
              <Button variant="outline">Meet Our Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

