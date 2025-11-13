import Navigation from "@/components/navigation"
import MissionOverview from "@/components/mission-control/mission-overview"
import TelemetryDashboard from "@/components/mission-control/telemetry-dashboard"
import SystemStatus from "@/components/mission-control/system-status"

export default function MissionControlPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">Mission Control Center</h1>
            <p className="text-muted-foreground text-lg">Real-time monitoring and telemetry data</p>
          </div>

          {/* Active Mission Overview */}
          <div className="mb-8">
            <MissionOverview />
          </div>

          {/* Main Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <TelemetryDashboard />
            </div>
            <div>
              <SystemStatus />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
