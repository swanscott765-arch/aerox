export async function GET() {
  const telemetryData = [
    {
      label: "Altitude",
      value: Math.floor(Math.random() * 150000).toLocaleString() + " m",
      max: "150 km",
      percentage: Math.random() * 100,
    },
    {
      label: "Velocity",
      value: Math.floor(Math.random() * 7800).toLocaleString() + " m/s",
      max: "7,800 m/s",
      percentage: Math.random() * 100,
    },
    {
      label: "Temperature",
      value: Math.floor(Math.random() * 1200) + "°C",
      max: "1,200°C",
      percentage: Math.random() * 100,
    },
    {
      label: "Pressure",
      value: (Math.random() * 101.3).toFixed(1) + " kPa",
      max: "101.3 kPa",
      percentage: Math.random() * 100,
    },
    {
      label: "Acceleration",
      value: (Math.random() * 5).toFixed(1) + " G",
      max: "5.0 G",
      percentage: Math.random() * 100,
    },
    {
      label: "Fuel Level",
      value: Math.floor(Math.random() * 100) + "%",
      max: "100%",
      percentage: Math.random() * 100,
    },
  ]

  return Response.json(telemetryData)
}
