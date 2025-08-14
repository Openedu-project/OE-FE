import React from "react"
import { FeaturesSection } from "./FeaturesSection"
import { NewestSection } from "./NewestSection"

export function MainContent() {
  return (
    <div className="box-border gap-x-10 flex flex-col max-w-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-10 w-full mx-auto p-4 md:gap-x-20 md:max-w-screen-xl md:gap-y-20 md:px-4 md:py-8">
      <div className="box-border gap-x-4 flex flex-col outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 mx-0 md:gap-x-8 md:flex-row md:gap-y-8 md:-mx-16">
        <FeaturesSection />
        <NewestSection />
      </div>
    </div>
  )
}
