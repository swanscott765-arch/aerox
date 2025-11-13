"use client"

import { Card } from "@/components/ui/card"

interface DocContentProps {
  selectedDoc: string
}

export default function DocContent({ selectedDoc }: DocContentProps) {
  const docContent: Record<string, { title: string; sections: Array<{ heading: string; content: string }> }> = {
    starship: {
      title: "Starship Overview",
      sections: [
        {
          heading: "Introduction",
          content:
            "Starship is a super-heavy lift launch system in development by SpaceX for long-duration, interplanetary flights. It is intended to become the primary SpaceX orbital vehicle for cargo and passenger transport.",
        },
        {
          heading: "Specifications",
          content: `Height: 120 meters
Empty Mass: 120 metric tonnes
Gross Liftoff Weight: 5,000 metric tonnes
Propellant Capacity: 1,200 cubic meters
Payload Capacity: Up to 150 metric tonnes to low Earth orbit`,
        },
        {
          heading: "Key Features",
          content: `Fully reusable two-stage orbital launch system
Raptor 2 engines for both stages
Advanced thermal protection system
Autonomous landing and booster catch capability
Long-duration spaceflight capability`,
        },
        {
          heading: "Flight Envelope",
          content:
            "Starship is designed to carry crew and cargo to the Earth orbit, Moon, and Mars. With its powerful engines and large payload capacity, it enables long-duration missions beyond low Earth orbit.",
        },
      ],
    },
    falcon9: {
      title: "Falcon 9 Rocket",
      sections: [
        {
          heading: "Overview",
          content:
            "Falcon 9 is an orbital rocket capable of carrying cargo and crew to low Earth orbit and beyond. It is the worlds first orbital class reusable rocket.",
        },
        {
          heading: "Specifications",
          content: `Height: 70 meters
First Stage Thrust: 7,607 kN
Second Stage Thrust: 934 kN
Payload Capacity: Up to 22.8 metric tonnes to LEO
Reusability: First stage lands vertically`,
        },
        {
          heading: "Proven Record",
          content:
            "With over 200 consecutive successful launches, Falcon 9 is the most reliable orbital-class launch vehicle in operation today.",
        },
      ],
    },
    propulsion: {
      title: "Raptor 2 Engines",
      sections: [
        {
          heading: "Engine Specifications",
          content: `Propellant: Methane and Liquid Oxygen
Chamber Pressure: 300+ bar
Thrust: 510 kN (sea level), 580 kN (vacuum)
Specific Impulse: 380 seconds (vacuum)
Throttle Range: 20%-100%`,
        },
        {
          heading: "Design Innovations",
          content: `Gas generator cycle for efficient power
Staged combustion improves performance
Advanced cooling techniques
Designed for rapid reusability`,
        },
      ],
    },
    avionics: {
      title: "Avionics Systems",
      sections: [
        {
          heading: "Flight Computer",
          content:
            "Triple-redundant flight computer with autonomous decision-making capabilities for launch, flight, and landing phases.",
        },
        {
          heading: "Sensors",
          content: `Inertial Measurement Units (IMU)
Accelerometers and Gyroscopes
Pressure sensors
Temperature monitors
Engine performance sensors`,
        },
        {
          heading: "Communication",
          content:
            "Continuous telemetry link with ground stations. Commands sent via secure encrypted channels. Real-time vehicle status monitoring.",
        },
      ],
    },
    landing: {
      title: "Landing Systems",
      sections: [
        {
          heading: "Vertical Landing",
          content:
            "Starship uses engine throttling and aerodynamic control surfaces to achieve precise vertical landings. The process is fully autonomous.",
        },
        {
          heading: "Grid Fins",
          content:
            "Deployable grid fins provide aerodynamic control during reentry and landing phases without adding significant weight.",
        },
        {
          heading: "Landing Legs",
          content:
            "Hydraulic landing legs extend just before touchdown to provide stable base and absorb landing loads.",
        },
      ],
    },
    materials: {
      title: "Materials & Construction",
      sections: [
        {
          heading: "Primary Materials",
          content: `Stainless steel for structure - chosen for high temperature resistance
Thermal protection tiles for reentry protection
Advanced composites for selected components`,
        },
        {
          heading: "Manufacturing",
          content:
            "Welded stainless steel construction using latest friction stir welding technology for strong, lightweight joints.",
        },
      ],
    },
    safety: {
      title: "Safety Protocols",
      sections: [
        {
          heading: "Redundancy Systems",
          content:
            "Triple-redundant computers. Multiple engine ignition systems. Backup hydraulics. Comprehensive abort capability.",
        },
        {
          heading: "Testing",
          content:
            "Extensive ground testing before each flight. Real-time health monitoring. Rapid abort procedures for any anomalies.",
        },
      ],
    },
    training: {
      title: "Operator Training",
      sections: [
        {
          heading: "Launch Operations",
          content:
            "Comprehensive training for launch site personnel. Simulator training for all operations. Certification required.",
        },
        {
          heading: "Flight Operations",
          content:
            "Mission planning and execution. Real-time monitoring and decision making. Emergency response procedures.",
        },
      ],
    },
  }

  const doc = docContent[selectedDoc] || docContent.starship

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-foreground">{doc.title}</h2>
      </div>

      <div className="space-y-4">
        {doc.sections.map((section, index) => (
          <Card key={index} className="p-6 border border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">{section.heading}</h3>
            <div className="space-y-2">
              {section.content.split("\n").map((line, i) => (
                <p key={i} className={`text-muted-foreground leading-relaxed ${line.startsWith(" ") ? "pl-4" : ""}`}>
                  {line.trim()}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Related Resources */}
      <Card className="p-6 border border-border bg-secondary/30">
        <h3 className="font-bold mb-3 text-foreground">Related Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Technical Specifications", "User Manuals", "Video Tutorials"].map((resource, index) => (
            <button
              key={index}
              className="text-left px-4 py-2 rounded-md bg-card border border-border hover:border-primary transition-colors text-sm text-muted-foreground hover:text-foreground"
            >
              {resource} →
            </button>
          ))}
        </div>
      </Card>
    </div>
  )
}
