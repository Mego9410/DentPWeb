'use client'

import React from 'react'
import Form from '@/components/ui/Form'
import { z } from 'zod'
import Button from '@/components/ui/Button'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function LoginPage() {
  const handleLoginSubmit = async (data: any) => {
    // In a real application, this would authenticate with an API
    console.log('Login attempt:', data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center">
            Login
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
            Access your DentPulse account
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 rounded-lg p-8">
              <Form
                schema={loginSchema}
                onSubmit={handleLoginSubmit}
                submitLabel="Sign In"
                fields={[
                  {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                    placeholder: 'Enter your email',
                    required: true,
                  },
                  {
                    name: 'password',
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Enter your password',
                    required: true,
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

