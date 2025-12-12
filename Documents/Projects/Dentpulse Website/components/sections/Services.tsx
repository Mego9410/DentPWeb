import React from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const services = [
  {
    title: 'Cash Flow Management',
    subtitle: 'Stay Liquid and Plan for Growth with the M.A.P. Method',
    description: 'From paying staff salaries and lab bills to investing in growth, our M.A.P. Cash Control Method keeps your dental practice financially secure and ready to expand.',
  },
  {
    title: 'Profit Maximization',
    subtitle: 'Optimize Profitability at Every Level of Your Dental Practice',
    description: 'From treatment pricing and lab costs to benchmarking against top practices, we identify and improve the key profit drivers unique to your clinic.',
  },
  {
    title: 'Debt Management',
    subtitle: 'Strategically Leverage Debt to Fuel Expansion',
    description: 'We track your dental practice loans, measure debt-to-revenue, and uncover consolidation opportunities to free cash flow for new chairs, associates, or practice acquisitions.',
  },
  {
    title: 'Tax Planning',
    subtitle: 'Keep More of Your Income with Strategic Tax Planning',
    description: 'We identify practice-specific deductions and long-term savings opportunities, reducing your tax burden while staying compliant.',
  },
  {
    title: 'Decision Making',
    subtitle: 'Confident Financial Choices for Growth and Stability',
    description: 'From equipment upgrades to hiring associates, we simulate the impact of every decision, so you make the best moves for your dental practice.',
  },
  {
    title: 'Business Exit',
    subtitle: 'Maximize Value and Exit Confidently',
    description: 'Our Exit Success Formula optimizes your financials, ensuring you leave your dental practice with maximum profit and minimal stress.',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="services-heading">
      <div className="container-custom">
        <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          How DentPulse Can Help Your Dental Practice
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} as="article">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">{service.subtitle}</h4>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services/">
            <button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2">
              Discover How DentPulse Can Transform Your Dental Practice
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

