import Navigation from "@/components/navigation"
import LaunchGrid from "@/components/launches/launch-grid"
import LaunchFilters from "@/components/launches/launch-filters"

export default function LaunchesPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Mission Launch Tracker</h1>
            <p className="text-muted-foreground text-lg">Track upcoming and past launches in real-time</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <LaunchFilters />
            </div>
            <div className="lg:col-span-3">
              <LaunchGrid />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
