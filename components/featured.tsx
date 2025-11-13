"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function Featured() {
  const features = [
    {
      icon: "🚀",
      title: "Live Launch Tracking",
      description: "Real-time updates on upcoming and in-flight missions with telemetry data",
      href: "/launches",
    },
    {
      icon: "📊",
      title: "Mission Control",
      description: "Advanced monitoring dashboard for mission status and analytics",
      href: "/mission-control",
    },
    {
      icon: "📚",
      title: "Documentation",
      description: "Comprehensive guides and technical specifications for aerospace tech",
      href: "/documentation",
    },
    {
      icon: "⭐",
      title: "Portfolio",
      description: "Showcase of groundbreaking aerospace projects and achievements",
      href: "/portfolio",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Everything You Need</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete platform for aerospace exploration and technology advancement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <Card className="h-full p-6 hover:border-primary transition-colors cursor-pointer group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
