"use client"

import { Card } from "@/components/ui/card"

export default function LaunchFilters() {
  return (
    <Card className="p-6 border border-border sticky top-24">
      <h3 className="text-lg font-bold mb-4">Filters</h3>

      <div className="space-y-4">
        {/* Vehicle Filter */}
        <div>
          <p className="text-sm font-semibold text-foreground mb-2">Vehicle</p>
          <div className="space-y-2">
            {["Starship", "Falcon 9", "Falcon Heavy", "Dragon"].map((vehicle) => (
              <label key={vehicle} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
                <span className="text-sm text-muted-foreground hover:text-foreground">{vehicle}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-2">Location</p>
          <div className="space-y-2">
            {["Starbase, Texas", "Cape Canaveral", "Kennedy Space Center", "Vandenberg"].map((location) => (
              <label key={location} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
                <span className="text-sm text-muted-foreground hover:text-foreground">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground mb-2">Status</p>
          <div className="space-y-2">
            {["Upcoming", "Completed"].map((status) => (
              <label key={status} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-primary" />
                <span className="text-sm text-muted-foreground hover:text-foreground">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <button className="w-full mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-semibold hover:bg-secondary/80 transition-colors">
          Reset Filters
        </button>
      </div>
    </Card>
  )
}
