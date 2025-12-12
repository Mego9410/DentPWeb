import React from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import ClientLogos from '@/components/sections/ClientLogos'
import Stats from '@/components/sections/Stats'
import Steps from '@/components/sections/Steps'

// Lazy load below-the-fold sections
const Tools = dynamic(() => import('@/components/sections/Tools'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading tools section" />,
})
const Services = dynamic(() => import('@/components/sections/Services'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading services section" />,
})
const Testimonial = dynamic(() => import('@/components/sections/Testimonial'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading testimonials section" />,
})
const Glossary = dynamic(() => import('@/components/sections/Glossary'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading glossary section" />,
})
const CaseStudyCTA = dynamic(() => import('@/components/sections/CaseStudyCTA'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading case study section" />,
})
const CTA = dynamic(() => import('@/components/sections/CTA'), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading CTA section" />,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Stats />
      <Steps />
      <Tools />
      <Services />
      <Testimonial />
      <Glossary />
      <CaseStudyCTA />
      <CTA />
    </>
  )
}

