import React from "react"

export function CourseSidebar() {
  return (
    <aside className="sticky box-border hidden h-full min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full top-[90px] md:block md:min-h-[auto] md:min-w-[auto] md:w-2/5">
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(244,245,246)_0px_4px_30px_0px] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-6 rounded-2xl">
        <div className="relative aspect-video box-border h-full min-h-56 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-6 rounded-2xl">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
            <div className="relative box-border h-56 min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:min-h-[auto] md:min-w-[auto]">
              <img
                alt="campaign full card image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="https://c.animaapp.com/meciuz02INr5pY/assets/2.jpg"
                className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
              />
            </div>
          </div>
        </div>
        <div className="items-center box-border gap-x-6 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-6">
          <div className="box-border min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 flex items-end  gap-1">
              <p className="text-2xl font-semibold box-border leading-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                30,005.00000000 USDT
              </p>
              <p> đã được tài trợ</p>
            </div>
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 flex items-end  gap-1">
              <p className="text-2xl font-semibold box-border leading-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                3
              </p>
              <p> nhà hỗ trợ</p>
            </div>
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] capitalize">
              <p className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                đã kết thúc
              </p>
            </div>
          </div>
          <div className="relative items-center box-border flex h-[100px] justify-center min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[100px] md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/meciuz02INr5pY/assets/icon-3.svg"
              alt="Icon"
              className="absolute box-border h-[100px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[100px]"
            />
            <img
              src="https://c.animaapp.com/meciuz02INr5pY/assets/icon-4.svg"
              alt="Icon"
              className="absolute box-border h-[100px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[100px]"
            />
            <div className="absolute items-center box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] inset-0">
              <span className="text-2xl font-bold box-border block leading-8 min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:min-h-[auto] md:min-w-[auto]">
                17%
              </span>
            </div>
          </div>
        </div>
        <button className=" flex w-full item-center justify-center cursor-pointer font-semibold box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mt-6 rounded-2xl bg-blue-700 text-white p-4">
          Cam kết khóa học này
        </button>
      </div>
    </aside>
  )
}
