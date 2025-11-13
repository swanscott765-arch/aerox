"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Zap } from "lucide-react"

export default function MissionOverview() {
  return (
    <Card className="p-6 border border-border bg-gradient-to-br from-primary/10 to-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Current Mission */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Active Mission</h3>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">Starship IFT-7</p>
          <p className="text-sm text-muted-foreground">Integrated Flight Test 7</p>
        </div>

        {/* Flight Status */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">Flight Status</h3>
          </div>
          <p className="text-2xl font-bold text-accent mb-1">On Schedule</p>
          <p className="text-sm text-muted-foreground">T- 2 hours 14 minutes</p>
        </div>

        {/* System Health */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-green-500" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase">System Health</h3>
          </div>
          <p className="text-2xl font-bold text-green-500 mb-1">98.7%</p>
          <p className="text-sm text-muted-foreground">All systems nominal</p>
        </div>
      </div>
    </Card>
  )
}
