export async function GET() {
  try {
    // Fetch from SpaceX public API
    const response = await fetch("https://api.spacexdata.com/v4/launches", {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error("Failed to fetch SpaceX data")
    }

    const launches = await response.json()

    // Transform SpaceX data to match our interface
    const transformed = launches.slice(0, 12).map((launch: any) => {
      const launchDate = new Date(launch.date_utc)
      const now = new Date()
      const isUpcoming = launchDate > now

      return {
        id: launch.id,
        name: launch.name,
        date: launchDate.toISOString().split("T")[0],
        time:
          launchDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "UTC",
          }) + " UTC",
        status: isUpcoming ? "upcoming" : "completed",
        location: launch.launchpad || "TBD",
        vehicle: launch.rocket?.name || "Unknown",
        mission: launch.mission_name || launch.name,
        description: launch.details || "SpaceX launch mission",
        progress: isUpcoming ? Math.random() * 60 : 100,
      }
    })

    return Response.json(transformed)
  } catch (error) {
    console.error("Error fetching launches:", error)
    return Response.json([], { status: 500 })
  }
}
