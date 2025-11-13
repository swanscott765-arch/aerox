"use client"

import { Card } from "@/components/ui/card"

export default function SystemStatus() {
  const systems = [
    { name: "Propulsion", status: "nominal", health: 99 },
    { name: "Avionics", status: "nominal", health: 97 },
    { name: "Navigation", status: "nominal", health: 98 },
    { name: "Thermal", status: "nominal", health: 95 },
    { name: "Communication", status: "nominal", health: 100 },
    { name: "Landing Legs", status: "nominal", health: 96 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nominal":
        return "text-green-500 bg-green-500/10"
      case "caution":
        return "text-accent bg-accent/10"
      case "warning":
        return "text-red-500 bg-red-500/10"
      default:
        return "text-muted-foreground bg-muted/10"
    }
  }

  return (
    <Card className="p-6 border border-border">
      <h3 className="text-xl font-bold mb-4 text-foreground">System Status</h3>
      <div className="space-y-4">
        {systems.map((system, index) => (
          <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-semibold text-foreground">{system.name}</p>
              <span className={`text-xs font-bold px-2 py-1 rounded ${getStatusColor(system.status)}`}>
                {system.status.toUpperCase()}
              </span>
            </div>
            <div className="w-full h-2 bg-card rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-accent rounded-full"
                style={{ width: `${system.health}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{system.health}% Health</p>
          </div>
        ))}
      </div>

      {/* Critical Alerts */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm font-semibold text-foreground mb-3">Alerts</p>
        <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
          <p className="text-xs text-green-500 font-medium">All systems operational - No critical alerts</p>
        </div>
      </div>
    </Card>
  )
}
