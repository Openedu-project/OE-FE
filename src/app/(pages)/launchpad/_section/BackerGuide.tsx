import React from "react"
import { backerSteps } from "../_data/processSteps"

export function BackerGuide() {
  return (
    <section className="items-start box-border gap-x-10 flex flex-col justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-10 pb-10 md:gap-x-16 md:flex-row md:gap-y-16">
      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:w-2/5">
        <h2 className="text-2xl font-bold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 md:text-[40px] md:leading-[50px]">
          How To Get Money From Pledging A Launchpad?
        </h2>
        <p className="text-sm box-border leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-xl md:leading-[25px]">
          With a token wallet in OpenEdu, you can easily make a donate for any course launchpad in OpenEdu Platform.
          <a
            href="/en/terms"
            className="text-blue-700 text-sm items-center box-border block h-10 justify-center leading-[17.5px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap rounded-md md:text-xl md:leading-[25px]"
          >
            Read More For Terms & Conditions
          </a>
        </p>
      </div>
      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:w-3/5">
        {backerSteps.map((step, index) => (
          <div
            key={step.id}
            className={
              index === 2
                ? "items-start backdrop-blur bg-white bg-[linear-gradient(rgb(255,255,255)_34%,oklab(0.972956_0.00374597_-0.0127641_/_0.3)_50%,oklab(0.972956_0.00374597_-0.0127641_/_0.3)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(193,195,251,0.3)_0px_4px_30px_0px] box-border flex flex-col justify-start leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] rounded-3xl md:items-center md:flex-row"
                : "items-start backdrop-blur bg-white bg-[linear-gradient(rgb(255,255,255)_34%,oklab(0.972956_0.00374597_-0.0127641_/_0.3)_50%,oklab(0.972956_0.00374597_-0.0127641_/_0.3)_100%)] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(193,195,251,0.3)_0px_4px_30px_0px] box-border flex flex-col justify-start leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-5 rounded-3xl md:items-center md:flex-row"
            }
          >
            <div className="items-center aspect-auto backdrop-blur-[2px] bg-[linear-gradient(rgb(236,237,255)_34%,rgba(242,241,255,0.3))] box-border gap-x-2.5 flex flex-col justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2.5 text-center w-full mb-4 p-4 rounded-3xl border-4 border-solid border-white md:aspect-square md:w-40 md:p-5">
              <img
                src={step.icon}
                alt="Icon"
                className="text-blue-700 box-border h-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-8 md:h-10 md:w-10"
              />
              <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 md:text-2xl md:leading-9">
                {step.title}
              </h3>
            </div>
            <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-4 md:p-6">
              <ul className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] pl-4 md:pl-5">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left md:text-base md:leading-6"
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
