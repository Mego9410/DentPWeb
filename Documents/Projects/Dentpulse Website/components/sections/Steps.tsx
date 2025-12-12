import React from 'react'

const steps = [
  {
    number: 'Step 1',
    emoji: '🩺',
    title: 'Assessment: Your Financial CT Scan',
    description: 'Just like diagnosing a patient, we take a deep dive into your cash flow, profits, debt, and taxes—pinpointing exactly what\'s holding your practice back and uncovering untapped growth opportunities.',
    detailedTitle: 'Assessment—Your Financial CT Scan',
    detailedDescription: 'Just like diagnosing a patient, we evaluate your dental practice\'s cash flow, profits, debts, and taxes to identify what\'s holding you back and where you can grow.',
  },
  {
    number: 'Step 2',
    emoji: '📈',
    title: 'Wealth Plan: Your Financial Treatment Blueprint',
    description: 'No more guesswork. We craft a personalized financial roadmap—helping you boost cash flow, grow profits, minimize taxes, and increase your practice\'s long-term value.',
    detailedTitle: 'Wealth Building Plan—Your Growth Blueprint',
    detailedDescription: 'Just like diagnosing a patient, we evaluate your dental practice\'s cash flow, profits, debts, and taxes to identify what\'s holding you back and where you can grow.',
  },
  {
    number: 'Step 3',
    emoji: '⚡',
    title: 'Implementation: No Spreadsheets, Just Results',
    description: 'Say goodbye to Excel nightmares. We optimize your finances, streamline operations, and unlock hidden patient revenue—so you can focus on what matters most: your patients.',
    detailedTitle: 'Implementation—No Spreadsheets, Just Results',
    detailedDescription: '',
  },
  {
    number: 'Step 4',
    emoji: '🔄',
    title: 'Monitoring: Routine Financial Check-Ups',
    description: 'Like regular patient care, we monitor your financial health, make proactive adjustments, and ensure your practice stays profitable, stress-free, and primed for growth.',
    detailedTitle: 'Monitoring—Routine Financial Check-Ups',
    detailedDescription: '',
  },
]

export default function Steps() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="steps-heading">
      <div className="container-custom">
        <h2 id="steps-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          4 Simple Steps to a Profitable & Financially Secure Dental Practice
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4" role="img" aria-label={step.emoji}>
                {step.emoji}
              </div>
              <div className="text-sm font-semibold text-primary-600 mb-2">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

