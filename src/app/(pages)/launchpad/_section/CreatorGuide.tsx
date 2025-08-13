import React from "react"
import { creatorSteps } from "../_data/processSteps"

export function CreatorGuide() {
  return (
    <section className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-20">
      <div className="box-border max-w-[720px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mx-auto">
        <h2 className="text-2xl font-bold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-6 md:text-[40px] md:leading-[50px]">
          How Many Step For Creator To Get Revenue From A Launchpad?
        </h2>
        <p className="text-sm box-border leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-xl md:leading-[25px]">
          With a token wallet and a team of trusted experts in your domain, you can raise money or make a donation for
          your course on OpenEdu!
          <a
            href="/en/terms"
            className="text-blue-700 text-sm items-center box-border block h-10 justify-center leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap px-4 py-2 rounded-md md:text-xl md:leading-[25px]"
          >
            Read More For Terms & Conditions
          </a>
        </p>
      </div>
      <div className="items-center box-border gap-x-5 flex flex-col justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-5 mt-10 md:gap-x-8 md:flex-row md:gap-y-8"></div>
      <div className="box-border gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-5 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        {creatorSteps.map((step, index) => (
          <div
            key={step.id}
            className={
              index === 1
                ? "box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-0 md:mt-16"
                : "box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"
            }
          >
            <div className="items-center backdrop-blur-[2px] bg-[linear-gradient(rgb(255,255,255)_25%,rgb(242,241,255)_80%)] box-border gap-x-2 flex flex-col justify-center min-h-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 p-4 rounded-3xl border-4 border-solid border-white md:gap-x-4 md:min-h-[400px] md:gap-y-4 md:px-8 md:py-6">
              <span className="text-blue-700 text-sm font-semibold items-center box-border flex h-8 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-8 border-blue-700 rounded-[3.35544e+07px] border-2 border-solid md:text-base md:h-10 md:leading-6 md:w-10">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold box-border leading-[25px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mb-2 md:text-2xl md:leading-[30px]">
                {step.title}
              </h3>
              <ul className="text-sm box-border leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left pl-4 md:text-base md:leading-5 md:pl-5">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm box-border leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
