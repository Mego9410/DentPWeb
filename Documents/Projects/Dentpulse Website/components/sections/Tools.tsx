import React from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const tools = [
  {
    title: 'Real-Time Financial Insights',
    subtitle: 'Identify Critical Cash Flow Gaps',
    description: 'Get a 24/7 view of your dental practice\'s cash flow, profits, and key metrics—empowering you to make informed, growth-driven decisions.',
    linkText: 'Learn More',
    href: '#',
  },
  {
    title: 'Custom Profitability Analysis by Treatments and Associates',
    subtitle: 'Create Strategies for Cash Flow Improvement',
    description: 'Identify what\'s driving profits in your dental practice—by treatment, chair, or associate—so you can focus on what truly matters.',
    linkText: 'Learn More',
    href: '#',
  },
  {
    title: 'Automated Cash Flow Forecasting',
    subtitle: 'Evaluate the impact of Major Financial Moves',
    description: 'Always stay ahead with intelligent forecasts, giving you peace of mind and control over your dental practice\'s future.',
    linkText: 'Learn More',
    href: '#',
  },
  {
    title: 'Seamless Integration with Xero, QuickBooks, and Practice Software',
    subtitle: 'Identify the True Drivers of Positive Cash Flow',
    description: 'Bridge your dental practice management and accounting systems seamlessly. Real-time updates eliminate manual headaches.',
    linkText: 'Learn More',
    href: '#',
  },
  {
    title: 'Comprehensive Reporting Tailored for Practice Owners',
    subtitle: 'Aenean id nibh et augue faucibus',
    description: 'Ditch the jargon. Get actionable reports designed to make sense for busy dental professionals',
    linkText: 'Learn More',
    href: '#',
  },
  {
    title: 'Advanced Tax and Debt Optimization',
    subtitle: 'Automate and Enhance Your Cash Flow Strategy',
    description: 'Reduce taxes and turn debt into growth opportunities with smart strategies tailored for UK dental practices.',
    linkText: 'Learn More',
    href: '#',
  },
]

export default function Tools() {
  return (
    <section id="tools" className="section-padding bg-white" aria-labelledby="tools-heading">
      <div className="container-custom">
        <h2 id="tools-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Game-Changing Tools Designed for Thriving Dental Practices.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tools.map((tool, index) => (
            <Card key={index} as="article">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
              <h4 className="text-lg font-semibold text-primary-600 mb-3">{tool.subtitle}</h4>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <Link
                href={tool.href}
                className="text-primary-600 hover:text-primary-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
              >
                {tool.linkText} →
              </Link>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to Master Your Dental Practice&apos;s Finances? Get Started Today.
          </p>
        </div>
      </div>
    </section>
  )
}

