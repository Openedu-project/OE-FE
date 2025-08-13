import React from "react"
import { upcomingCampaigns } from "../_data/campaigns"
import { CompactCampaignCard } from "../_ui/CompactCampaignCard"
export function UpcomingLaunchpad() {
  return (
    <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-20">
      <div className="items-center box-border flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-10">
        <h2 className="text-2xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
          Upcoming Launchpad
        </h2>
      </div>
      <div className="box-border gap-x-2 grid grid-cols-[repeat(2,minmax(0px,1fr))] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 md:gap-x-5 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-5">
        {upcomingCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(244,245,246)_0px_4px_30px_0px] box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-4 rounded-2xl"
          >
            <CompactCampaignCard campaign={campaign} />
          </div>
        ))}
      </div>
    </div>
  )
}
