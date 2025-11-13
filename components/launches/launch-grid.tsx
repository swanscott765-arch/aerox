"use client"

import { useState, useEffect } from "react"
import LaunchCard from "./launch-card"

interface Launch {
  id: string
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

export default function LaunchGrid() {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [launches, setLaunches] = useState<Launch[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/launches")
        const data = await response.json()
        setLaunches(data)
      } catch (error) {
        console.error("Failed to fetch launches:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLaunches()
    // Refresh data every 5 minutes
    const interval = setInterval(fetchLaunches, 300000)
    return () => clearInterval(interval)
  }, [])

  const filtered = selectedStatus === "all" ? launches : launches.filter((l) => l.status === selectedStatus)

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", "upcoming", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedStatus === status
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-foreground hover:border-primary"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading live launch data...</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((launch) => (
            <LaunchCard key={launch.id} launch={launch} />
          ))}
        </div>
      )}
    </div>
  )
}
