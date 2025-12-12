'use client'

import React from 'react'
import Form from '@/components/ui/Form'
import { contactFormSchema } from '@/lib/validations'

export default function ContactPage() {
  const handleContactSubmit = async (data: any) => {
    // In a real application, this would send data to an API
    console.log('Contact form submitted:', data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Get in touch with our team to learn how DentPulse can transform your dental practice
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <Form
                schema={contactFormSchema}
                onSubmit={handleContactSubmit}
                submitLabel="Send Message"
                fields={[
                  {
                    name: 'name',
                    label: 'Full Name',
                    type: 'text',
                    placeholder: 'Enter your full name',
                    required: true,
                  },
                  {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                    placeholder: 'Enter your email',
                    required: true,
                  },
                  {
                    name: 'phone',
                    label: 'Phone Number (Optional)',
                    type: 'tel',
                    placeholder: 'Enter your phone number',
                    required: false,
                  },
                  {
                    name: 'message',
                    label: 'Message',
                    placeholder: 'Enter your message',
                    required: true,
                    textarea: true,
                    rows: 6,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

