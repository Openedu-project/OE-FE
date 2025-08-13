import React from "react"

export function HeroSection() {
  return (
    <>
      <div className="absolute box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] -z-50 overflow-hidden inset-0">
        <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
          <div className="relative box-border h-[200px] object-cover object-[50%_0%] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            <img
              alt="Launchpad Background"
              src="https://c.animaapp.com/me9mhdqeeGo4n5/assets/launchpad-bg.50ea39d1.svg"
              className="box-border h-full max-w-full object-cover object-[50%_0%] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full"
            />
          </div>
        </div>
      </div>
      <a
        href="/en/launchpad/my-launchpad"
        className="fixed text-blue-700 text-sm items-center box-border flex justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap z-10 rounded-md right-[30px] top-[120px]"
      >
        <div className="box-border flex justify-center max-w-[60px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap rounded-[3.35544e+07px] md:max-w-20">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full border-2 border-solid border-transparent">
            <div className="relative box-border h-[200px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap">
              <img
                alt="failed-icon"
                src="https://c.animaapp.com/me9mhdqeeGo4n5/assets/launchpad-list-icon.c8675b90.svg"
                className="aspect-[auto_80_/_80] box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
