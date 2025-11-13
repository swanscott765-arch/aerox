"use client"

import { Card } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

interface DocSidebarProps {
  selectedDoc: string
  onSelectDoc: (doc: string) => void
}

export default function DocSidebar({ selectedDoc, onSelectDoc }: DocSidebarProps) {
  const docs = [
    { id: "starship", title: "Starship Overview", icon: "🚀", category: "Vehicles" },
    { id: "falcon9", title: "Falcon 9", icon: "🛸", category: "Vehicles" },
    { id: "propulsion", title: "Raptor Engines", icon: "⚡", category: "Systems" },
    { id: "avionics", title: "Avionics Systems", icon: "📡", category: "Systems" },
    { id: "landing", title: "Landing Systems", icon: "🎯", category: "Systems" },
    { id: "materials", title: "Materials & Construction", icon: "⚙️", category: "Engineering" },
    { id: "safety", title: "Safety Protocols", icon: "🛡️", category: "Operations" },
    { id: "training", title: "Operator Training", icon: "📚", category: "Operations" },
  ]

  const categories = Array.from(new Set(docs.map((d) => d.category)))

  return (
    <Card className="p-6 border border-border sticky top-24 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">Documentation</h3>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <p className="text-xs font-semibold uppercase text-muted-foreground mb-3">{category}</p>
            <div className="space-y-2">
              {docs
                .filter((d) => d.category === category)
                .map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => onSelectDoc(doc.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                      selectedDoc === doc.id
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-card border border-transparent"
                    }`}
                  >
                    <span className="mr-2">{doc.icon}</span>
                    {doc.title}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-semibold hover:bg-secondary/80 transition-colors">
        Download PDF
      </button>
    </Card>
  )
}
