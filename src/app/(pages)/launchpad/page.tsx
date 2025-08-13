import React from "react"
import { HeroSection } from "./_section/HeroSection"
import { FeaturedLaunchpad } from "./_section/FeaturedLaunchpad"
import { UpcomingLaunchpad } from "./_section/UpcomingLaunchpad"
import { SuccessfulLaunchpad } from "./_section/SuccessfulLaunchpad"
import { CreatorGuide } from "./_section/CreatorGuide"
import { BackerGuide } from "./_section/BackerGuide"

function LaunchpadPage() {
  return (
    <main className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
      <HeroSection />
      <div className="box-border max-w-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full z-[1] mx-auto pb-24 px-2 md:px-12">
        <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
          <FeaturedLaunchpad />
          <UpcomingLaunchpad />
          <SuccessfulLaunchpad />
          <CreatorGuide />
          <BackerGuide />
        </div>
      </div>
    </main>
  )
}

export default LaunchpadPage
