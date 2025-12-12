'use client'

import React from 'react'
import Form from '@/components/ui/Form'
import { assessmentFormSchema } from '@/lib/validations'

export default function CTA() {
  const handleAssessmentSubmit = async (data: any) => {
    // In a real application, this would send data to an API
    console.log('Assessment form submitted:', data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <section id="assessment-form" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white" aria-labelledby="cta-heading">
      <div className="container-custom">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Book Your Free Financial CT Scan—Fix Leaks, Unlock Profits & Build a Wealthier Practice!
        </h2>
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <Form
              schema={assessmentFormSchema}
              onSubmit={handleAssessmentSubmit}
              submitLabel="Book Your Free Assessment"
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
                  label: 'Phone Number',
                  type: 'tel',
                  placeholder: 'Enter your phone number',
                  required: true,
                },
                {
                  name: 'practiceName',
                  label: 'Practice Name (Optional)',
                  type: 'text',
                  placeholder: 'Enter your practice name',
                  required: false,
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg mb-4">
            We only have 5 spots left this month due to our personalized support. Once these spots are filled, you&apos;ll need to wait—and it will come at a higher investment. Don&apos;t miss this opportunity
          </p>
        </div>
      </div>
    </section>
  )
}

