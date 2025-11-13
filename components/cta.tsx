"use client"

import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5 border-t border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Explore the Future?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Join us in discovering the next generation of aerospace technology and innovation.
        </p>
        <Link
          href="/launches"
          className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
