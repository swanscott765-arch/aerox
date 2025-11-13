"use client"

import { Card } from "@/components/ui/card"
import { ArrowUpRight, Award } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  impact: string
  date: string
  tags: string[]
}

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:20px_20px] group-hover:scale-105 transition-transform duration-500"></div>
        <div className="absolute top-3 right-3">
          <Award className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs font-semibold text-primary uppercase mb-1">{project.category}</p>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>

        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

        {/* Impact */}
        <div className="bg-primary/10 rounded p-3 mb-4 border border-primary/20">
          <p className="text-xs font-semibold text-primary">Key Impact</p>
          <p className="text-sm font-bold text-foreground">{project.impact}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-card border border-border rounded text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="text-xs text-muted-foreground border-t border-border pt-3">{project.date}</p>
      </div>
    </Card>
  )
}
