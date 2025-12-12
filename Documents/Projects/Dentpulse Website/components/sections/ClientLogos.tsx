import React from 'react'

export default function ClientLogos() {
  return (
    <section className="section-padding bg-white" aria-label="Our Clients">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our Clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {/* Placeholder for client logos - replace with actual logo images */}
          <div className="text-gray-400 text-sm">Client Logo 1</div>
          <div className="text-gray-400 text-sm">Client Logo 2</div>
          <div className="text-gray-400 text-sm">Client Logo 3</div>
          <div className="text-gray-400 text-sm">Client Logo 4</div>
        </div>
      </div>
    </section>
  )
}

