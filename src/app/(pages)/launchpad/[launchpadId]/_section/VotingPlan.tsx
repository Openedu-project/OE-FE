import React from "react"
import { votingPlanSteps } from "../_data/votingPlan"

export function VotingPlan() {
  return (
    <>
      <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-7 mb-4 md:text-2xl md:leading-9">
        Kế hoạch bỏ phiếu
      </h3>
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 mx-auto p-4 rounded-lg border-solid md:p-6">
        <div className="items-center box-border gap-x-8 flex flex-col justify-normal outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-8 md:items-start md:gap-x-0 md:flex-row md:justify-between md:gap-y-0">
          {votingPlanSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="items-center box-border flex flex-col shrink-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:w-auto">
                <div className="relative box-border h-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-8">
                  <div className="text-blue-700 items-center box-border flex h-8 justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-8 border border-blue-700 rounded-[3.35544e+07px] border-solid">
                    <span className="text-sm font-semibold box-border block leading-[19.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="box-border max-w-[150px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mt-2 mx-auto">
                  <p className="box-border leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend">
                    {step.sections}
                  </p>
                  <p className="text-xl font-semibold box-border leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend">
                    {step.date}
                  </p>
                </div>
              </div>
              {index < votingPlanSteps.length - 1 && (
                <div className="bg-gray-200 box-border flex h-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-0.5 mt-0 md:h-0.5 md:w-full md:mt-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
