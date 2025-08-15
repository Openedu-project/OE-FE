import React from "react"

export function CourseInfo() {
  return (
    <>
      <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-7 mb-4 md:text-2xl md:leading-9">
        Course
      </h3>
      <div className="items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(244,245,246)_0px_4px_30px_0px] box-border gap-x-2 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 p-3 rounded-2xl md:gap-x-3 md:gap-y-3 md:p-4">
        <div className="relative aspect-video box-border h-24 min-h-24 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] overflow-hidden rounded-xl md:h-full md:min-h-[120px] md:rounded-2xl">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
            <div className="relative box-border h-[120px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
              <img
                alt="campaign full card image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="https://c.animaapp.com/meciuz02INr5pY/assets/6.png"
                className="absolute text-transparent box-border h-full max-w-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
              />
            </div>
          </div>
        </div>
        <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[70%]">
          <h4 className="text-lg font-semibold box-border leading-[27px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-1.5 md:text-xl md:leading-[30px] md:mb-2">
            Enterprise Blockchain Architecture & Security
          </h4>
          <p className="text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-1.5 md:text-base md:leading-6 md:mb-2">
            Được tạo bởi{" "}
            <span className="text-sm font-semibold box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
              Ryo
            </span>
          </p>
          <p className="text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
            Được tạo vào{" "}
            <span className="text-sm font-semibold box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
              Feb 19, 2025
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
