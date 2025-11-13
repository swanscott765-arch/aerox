"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface TelemetryReading {
  label: string
  value: string
  max: string
  percentage: number
}

export default function TelemetryDashboard() {
  const [telemetryData, setTelemetryData] = useState<TelemetryReading[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const response = await fetch("/api/telemetry")
        const data = await response.json()
        setTelemetryData(data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch telemetry:", error)
      }
    }

    fetchTelemetry()
    // Update telemetry every 2 seconds for live effect
    const interval = setInterval(fetchTelemetry, 2000)
    return () => clearInterval(interval)
  }, [])

  const missionTimeline = [
    { time: "T-02:14", event: "Prelaunch checks", status: "pending" },
    { time: "T-00:30", event: "Final system verification", status: "pending" },
    { time: "T-00:10", event: "Engine ignition sequence", status: "pending" },
    { time: "T+00:00", event: "Liftoff", status: "pending" },
    { time: "T+01:30", event: "Stage separation", status: "pending" },
    { time: "T+09:00", event: "Booster landing attempt", status: "pending" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Live Telemetry</h2>
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading telemetry...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {telemetryData.map((data, index) => (
              <Card key={index} className="p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-semibold text-muted-foreground">{data.label}</p>
                  <span className="text-xs text-muted-foreground">Max: {data.max}</span>
                </div>
                <p className="text-3xl font-bold text-primary mb-2">{data.value}</p>
                <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                    style={{ width: `${data.percentage}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Launch Timeline */}
      <Card className="p-6 border border-border">
        <h3 className="text-xl font-bold mb-4 text-foreground">Mission Timeline</h3>
        <div className="space-y-3">
          {missionTimeline.map((item, index) => (
            <div key={index} className="flex items-center gap-4 pb-3 border-b border-border last:border-0">
              <div className="text-sm font-bold text-primary min-w-20">{item.time}</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.event}</p>
              </div>
              <div
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  item.status === "completed" ? "bg-green-500/20 text-green-500" : "bg-muted text-muted-foreground"
                }`}
              >
                {item.status === "completed" ? "Done" : "Pending"}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
