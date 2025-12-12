import React from 'react'
import Link from 'next/link'
import Card from '@/components/ui/Card'

const glossaryPosts = [
  {
    title: 'Operating Cash Flow',
    excerpt: 'What Is Operating Cash Flow in a Dental Practice? Operating Cash Flow (OCF) is the net cash your dental practice',
    href: '/glossary/operating-cash-flow/',
  },
  {
    title: 'Patient Lifetime Value (PLV)',
    excerpt: 'What Is Patient Lifetime Value (PLV) in a Dental Practice? Patient Lifetime Value (PLV) is the total revenue a patient',
    href: '/glossary/patient-lifetime-value/',
  },
  {
    title: 'PPBT™ vs PPAT™',
    excerpt: 'What Is the Difference Between PPBT™ and PPAT™ in a Dental Practice? PPBT™ (Personal Profit Before Tax) and PPAT™ (Personal',
    href: '/glossary/ppbt-vs-ppat/',
  },
]

export default function Glossary() {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="glossary-heading">
      <div className="container-custom">
        <h2 id="glossary-heading" className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Glossary Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {glossaryPosts.map((post, index) => (
            <Card key={index} as="article">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                <Link
                  href={post.href}
                  className="hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={post.href}
                className="text-primary-600 hover:text-primary-700 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
              >
                Read More →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

