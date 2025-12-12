import React from 'react'

const stats = [
  {
    value: '357K+',
    label: 'PROFIT INCREASED',
    description: 'Last year we achieved significant profit increases for our clients',
  },
  {
    value: '225K+',
    label: 'BANK BALANCE IMPROVED',
    description: 'Improved bank balances across all client practices',
  },
  {
    value: '£1.2m',
    label: 'AVG DENTAL PRACTICE VALUE INCREASED',
    description: 'Average increase in practice value for our clients',
  },
]

export default function Stats() {
  return (
    <section className="section-padding bg-white" aria-labelledby="stats-heading">
      <div className="container-custom">
        <h2 id="stats-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Transform Your Dental Practice, One Financial Insight At a Time. Last Year We Achieved The Following Results For Our Clients
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg"
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2" aria-label={stat.value}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

