import Navigation from "@/components/navigation"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"
import PortfolioHero from "@/components/portfolio/portfolio-hero"

export default function PortfolioPage() {
  return (
    <main>
      <Navigation />
      <PortfolioHero />
      <div className="bg-gradient-to-b from-background to-card/30 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid />
        </div>
      </div>
    </main>
  )
}
