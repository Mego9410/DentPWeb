'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import Button from './Button'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  register: any
  textarea?: boolean
  rows?: number
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  error,
  register,
  textarea = false,
  rows = 4,
}: FormFieldProps) {
  const fieldId = `field-${name}`
  const errorId = `error-${name}`

  return (
    <div className="mb-4">
      <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={fieldId}
          {...register(name)}
          rows={rows}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent',
            error ? 'border-red-500' : 'border-gray-300'
          )}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent',
            error ? 'border-red-500' : 'border-gray-300'
          )}
        />
      )}
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

interface FormProps {
  schema: any
  onSubmit: (data: any) => Promise<void> | void
  submitLabel?: string
  fields: Array<{
    name: string
    label: string
    type?: string
    placeholder?: string
    required?: boolean
    textarea?: boolean
    rows?: number
  }>
  className?: string
}

export default function Form({ schema, onSubmit, submitLabel = 'Submit', fields, className }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = async (data: any) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await onSubmit(data)
      setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' })
      reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={cn('space-y-4', className)} noValidate>
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          error={errors[field.name]?.message as string}
          register={register}
          textarea={field.textarea}
          rows={field.rows}
        />
      ))}

      {submitStatus && (
        <div
          role="alert"
          aria-live="polite"
          className={cn(
            'p-4 rounded-md',
            submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          )}
        >
          {submitStatus.message}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : submitLabel}
      </Button>
    </form>
  )
}

