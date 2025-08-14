import { Campaign } from "@/app/_types"
import React from "react"

interface CampaignCardProps {
  campaign: Campaign
  variant: "featured"
  index: number
}

export function CampaignCard({ campaign, variant, index }: CampaignCardProps) {
  return (
    <div className="w-full box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
      <div className="bg-white box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-4 p-4 rounded-2xl">
        <div className="items-start box-border gap-x-4 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 mb-4">
          <button
            type="button"
            className="relative bg-transparent block h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center w-2/5 overflow-hidden p-0 rounded-2xl"
          >
            <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
              <div className="relative box-border h-[140px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
                <img
                  alt="campain full card image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={campaign.image}
                  className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
                />
              </div>
            </div>
          </button>
          <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-3/5">
            <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
              <button
                type="button"
                className="bg-transparent block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left w-full mb-2 p-0"
              >
                <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                  {campaign.title}
                </h3>
              </button>
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
          </div>
        </div>
        <div
          role="progressbar"
          className="relative bg-slate-100 box-border h-2 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-4 rounded-[3.35544e+07px]"
        >
          <div className="bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-33.3%] w-full"></div>
        </div>
        <div className="items-center box-border gap-x-2 flex justify-between leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2">
          <p className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
              {campaign.funded}
            </span>{" "}
            funded
          </p>
          <p className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            {campaign.status}
          </p>
        </div>
      </div>
    </div>
  )
}
