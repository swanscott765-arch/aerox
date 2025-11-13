"use client"

import { useState } from "react"
import PortfolioCard from "./portfolio-card"

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Starship First Stage Reusability",
      category: "reusability",
      image: "abstract digital pattern for aerospace innovation",
      description: "Successfully demonstrated booster catch with chopstick arms, revolutionizing rocket reuse.",
      impact: "Reduced launch costs by 50%",
      date: "2024",
      tags: ["Starship", "Reusability", "Innovation"],
    },
    {
      id: 2,
      title: "Falcon 9 Record Flights",
      category: "achievement",
      image: "abstract digital pattern for aerospace achievement",
      description: "Achieved 300+ successful consecutive launches with first stage reusability.",
      impact: "99.7% mission success rate",
      date: "2024",
      tags: ["Falcon 9", "Reliability", "Track Record"],
    },
    {
      id: 3,
      title: "Raptor Engine Development",
      category: "technology",
      image: "abstract digital pattern for rocket engine",
      description: "Advanced methane-fueled rocket engines with unprecedented performance metrics.",
      impact: "580 kN thrust in vacuum",
      date: "2023",
      tags: ["Raptor", "Propulsion", "Engineering"],
    },
    {
      id: 4,
      title: "Starlink Constellation",
      category: "mission",
      image: "abstract digital pattern for satellite network",
      description: "Deployed 5,000+ satellites providing global internet coverage.",
      impact: "Connected millions worldwide",
      date: "2024",
      tags: ["Starlink", "Satellites", "Connectivity"],
    },
    {
      id: 5,
      title: "Lunar Gateway Program",
      category: "exploration",
      image: "abstract digital pattern for lunar exploration",
      description: "Partnership for sustainable human presence on the Moon.",
      impact: "Enables Mars missions",
      date: "2024",
      tags: ["Moon", "Exploration", "Partnership"],
    },
    {
      id: 6,
      title: "Mars Colonization Initiative",
      category: "exploration",
      image: "abstract digital pattern for mars colonization",
      description: "Long-term vision for establishing self-sustaining human civilization on Mars.",
      impact: "Makes humanity multiplanetary",
      date: "2025",
      tags: ["Mars", "Colonization", "Vision"],
    },
    {
      id: 7,
      title: "Autonomous Landing Systems",
      category: "technology",
      image: "abstract digital pattern for autonomous systems",
      description: "AI-powered precision landing with grid fin control and thrust vectoring.",
      impact: "99.9% landing accuracy",
      date: "2023",
      tags: ["AI", "Landing", "Autonomy"],
    },
    {
      id: 8,
      title: "Deep Space Missions",
      category: "mission",
      image: "abstract digital pattern for deep space exploration",
      description: "Extended missions beyond low Earth orbit carrying payloads to deep space.",
      impact: "Payload to Mars capability",
      date: "2024",
      tags: ["Deep Space", "Missions", "Payload"],
    },
  ]

  const categories = ["all", "technology", "reusability", "achievement", "mission", "exploration"]

  const filtered = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {filtered.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border p-8 mt-12">
        <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold text-primary mb-2">50%</p>
            <p className="text-muted-foreground">Reduction in launch costs through reusability</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent mb-2">5,000+</p>
            <p className="text-muted-foreground">Satellites deployed for global connectivity</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-500 mb-2">99.7%</p>
            <p className="text-muted-foreground">Mission success rate across all programs</p>
          </div>
        </div>
      </div>
    </div>
  )
}
