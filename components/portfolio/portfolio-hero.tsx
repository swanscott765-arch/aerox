"use client"

import { Card } from "@/components/ui/card"

export default function PortfolioHero() {
  const stats = [
    { label: "Successful Launches", value: "200+" },
    { label: "Reusable Flights", value: "150+" },
    { label: "Years in Operation", value: "15+" },
    { label: "Missions Completed", value: "500+" },
  ]

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-balance">Aerospace Innovation Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Breakthrough achievements in space technology, reusable rockets, and interplanetary exploration
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 border border-border text-center hover:border-primary transition-colors">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
