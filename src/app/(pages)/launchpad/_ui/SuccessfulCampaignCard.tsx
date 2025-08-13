import React from "react"
import { SuccessfulCampaign } from "@/app/_types"

interface SuccessfulCampaignCardProps {
  campaign: SuccessfulCampaign
}

export function SuccessfulCampaignCard({ campaign }: SuccessfulCampaignCardProps) {
  return (
    <>
      <button
        type="button"
        className="relative bg-transparent min-h-[124px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center w-full overflow-hidden mb-4 p-0 rounded-2xl"
      >
        <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
          <div className="relative aspect-video box-border h-[124px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
            <img
              alt="campaign card compact"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={campaign.image}
              className="absolute text-transparent aspect-video box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
            />
          </div>
        </div>
      </button>
      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
        <div className="items-start box-border flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
          <button
            type="button"
            className="text-xl font-semibold bg-transparent block leading-[25px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left p-0"
          >
            {campaign.title}
          </button>
        </div>
        <div
          role="progressbar"
          className="relative bg-slate-100 box-border h-1 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-2 rounded-[3.35544e+07px]"
        >
          <div className={campaign.progressBarClass}></div>
        </div>
        <div className="items-start box-border gap-x-2 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 mb-2">
          <p className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
              {campaign.funded}
            </span>{" "}
            funded
          </p>
          <span className="text-blue-700 font-semibold box-border block leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            {campaign.percentage}
          </span>
        </div>
        <p className="text-[oklch(0.723_0.219_149.579)] box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] capitalize">
          <span className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            Success
          </span>
        </p>
      </div>
    </>
  )
}
