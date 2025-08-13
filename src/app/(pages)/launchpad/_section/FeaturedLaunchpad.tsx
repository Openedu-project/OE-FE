import React from "react"
import { featuredCampaigns } from "../_data/campaigns"
import { CampaignCard } from "../_ui/CampaignCard"

export function FeaturedLaunchpad() {
  return (
    <section className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] z-10 mb-20 pt-5 px-1 md:pt-8">
      <div className="items-center box-border flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-3">
        <h2 className="text-2xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
          Featuring Launchpad
        </h2>
      </div>
      <div className="items-start box-border gap-x-4 flex  outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4">
        {featuredCampaigns
          .filter((cam, index) => index === 0)
          .map((campaign, index) => {
            return (
              <div
                key={index}
                className="flex-1 bg-white box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-4 rounded-2xl"
              >
                <div className="relative box-border h-full min-h-[290px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-4 rounded-2xl">
                  <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
                    <div className="relative box-border h-[290px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
                      <img
                        alt="campain full card image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={campaign.image}
                        className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-4">
                  <div className="items-center box-border flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                    <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                      {campaign.title}
                    </h3>
                  </div>
                  <p className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                    Create by{" "}
                    <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      {campaign.creator}
                    </span>
                  </p>
                  <p className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                    Create at{" "}
                    <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      {campaign.createdAt}
                    </span>
                  </p>
                </div>
                <div
                  role="progressbar"
                  className="relative bg-slate-100 box-border h-2 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-4 rounded-[3.35544e+07px]"
                >
                  <div className="bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-83.3%] w-full"></div>
                </div>
                <div className="items-center box-border gap-x-2 flex justify-between leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2">
                  <p className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                    <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      {campaign.funded}
                    </span>{" "}
                    funded
                  </p>
                  <p className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                    <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] capitalize">
                      {campaign.status}
                    </span>
                  </p>
                </div>
              </div>
            )
          })}
        <div className="flex-1">
          {featuredCampaigns.slice(1, featuredCampaigns.length).map((campaign, index) => (
            <div key={campaign.id} className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
              <CampaignCard campaign={campaign} variant="featured" index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
