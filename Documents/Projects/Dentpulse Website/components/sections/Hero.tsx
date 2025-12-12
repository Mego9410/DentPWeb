import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import VideoPlayer from '@/components/ui/VideoPlayer'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding" aria-labelledby="hero-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Struggling with Cash Flow? DentPulse Transforms Your Dental Practice&apos;s Cash Flow Into Wealth in 4 Simple Steps
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Boost Cash Flow, Grow Profits & Build a More Valuable Dental Practice – While You Focus 100% On Patient Care. DentPulse&apos;s Proprietary, Proven Process Makes It Effortless
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#assessment-form">
                <Button size="lg" className="w-full sm:w-auto">
                  Watch How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <VideoPlayer
              youtubeId="" // TODO: Replace with actual YouTube video ID or use vimeoId/src prop
              title="Watch How DentPulse Works"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

