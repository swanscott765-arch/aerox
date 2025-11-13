"use client"

import { Card } from "@/components/ui/card"
import { Clock, MapPin, Rocket } from "lucide-react"

interface Launch {
  id: number
  name: string
  date: string
  time: string
  status: "upcoming" | "completed"
  location: string
  vehicle: string
  mission: string
  description: string
  progress: number
}

export default function LaunchCard({ launch }: { launch: Launch }) {
  const statusColor = launch.status === "upcoming" ? "text-accent" : "text-green-500"
  const statusBg = launch.status === "upcoming" ? "bg-accent/10" : "bg-green-500/10"

  return (
    <Card className="p-6 border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-primary" />
            <h3 className="text-xl font-bold text-foreground">{launch.name}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{launch.mission}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBg} ${statusColor}`}>
          {launch.status === "upcoming" ? "Upcoming" : "Completed"}
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{launch.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <div className="text-xs">
            <p className="text-muted-foreground">Time</p>
            <p className="font-semibold text-foreground">{launch.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <div className="text-xs">
            <p className="text-muted-foreground">Location</p>
            <p className="font-semibold text-foreground">{launch.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-primary" />
          <div className="text-xs">
            <p className="text-muted-foreground">Vehicle</p>
            <p className="font-semibold text-foreground">{launch.vehicle}</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Date</p>
          <p className="font-semibold text-foreground">{launch.date}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-muted-foreground">Preparation</span>
          <span className="text-xs font-semibold text-primary">{launch.progress}%</span>
        </div>
        <div className="w-full h-2 bg-card rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
            style={{ width: `${launch.progress}%` }}
          ></div>
        </div>
      </div>
    </Card>
  )
}
