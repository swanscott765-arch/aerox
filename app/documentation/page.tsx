"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import DocSidebar from "@/components/documentation/doc-sidebar"
import DocContent from "@/components/documentation/doc-content"

export default function DocumentationPage() {
  const [selectedDoc, setSelectedDoc] = useState("starship")

  return (
    <main>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">Technical Documentation</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive guides and specifications for aerospace technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <DocSidebar selectedDoc={selectedDoc} onSelectDoc={setSelectedDoc} />
            </div>
            <div className="lg:col-span-3">
              <DocContent selectedDoc={selectedDoc} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
