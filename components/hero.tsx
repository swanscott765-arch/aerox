"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-3 py-1 bg-secondary rounded-full border border-border">
          <span className="text-xs font-semibold text-accent uppercase">Welcome to AeroX</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
          Advancing Aerospace <span className="text-primary">Innovation</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
          Explore the future of space technology. Track missions in real-time, learn from our documentation, and
          discover breakthrough aerospace innovations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/launches"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            View Launches
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/mission-control"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-md font-semibold hover:bg-card transition-colors"
          >
            Mission Control
          </Link>
        </div>
      </div>
    </section>
  )
}
