'use client'

import React from 'react'
import Link from 'next/link'

const footerLinks = {
  tool: [
    { name: 'Case Studies', href: '/case-study/' },
    { name: 'Testimonials', href: '/#testimonials' },
  ],
  features: [
    { name: 'Realtime Financial Insights', href: '/#tools' },
    { name: 'Custom Profitability Analysis', href: '/#tools' },
    { name: 'Automated Cash Flow Forecasting', href: '/#tools' },
    { name: 'Seamless Integration', href: '/#tools' },
    { name: 'Comprehensive Reporting', href: '/#tools' },
    { name: 'Advanced Tax and Debt Optimization', href: '/#tools' },
  ],
  company: [
    { name: 'About Us', href: '/about/' },
    { name: 'Privacy Policy', href: '/privacy-policy/' },
    { name: 'Terms Of Services', href: '/terms-of-service/' },
    { name: 'Data Security', href: '/data-security/' },
    { name: 'Affiliate Program', href: '/affiliate-program/' },
  ],
  support: [
    { name: 'Contact', href: '/about/contact/' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'X-twitter' },
  { name: 'LinkedIn', href: '#', icon: 'Linkedin-in' },
  { name: 'Instagram', href: '#', icon: 'Instagram' },
  { name: 'Facebook', href: '#', icon: 'Facebook-f' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tool Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tool</h3>
            <ul className="space-y-2">
              {footerLinks.tool.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © DentPulse {currentYear} All rights reserved
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <span className="sr-only">{social.name}</span>
                  <span aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded"
            aria-label="Scroll to top"
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

