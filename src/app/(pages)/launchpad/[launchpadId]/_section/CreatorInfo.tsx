import React from "react"

export function CreatorInfo() {
  return (
    <>
      <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-7 mb-4 md:text-2xl md:leading-9">
        Người tạo & Cộng tác viên
      </h3>
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(244,245,246)_0px_4px_30px_0px] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] p-2 rounded-2xl md:p-6">
        <div className="items-center box-border gap-x-4 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4">
          <div className="relative box-border h-full min-h-[120px] min-w-[120px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] rounded-[3.35544e+07px]">
            <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
              <div className="relative box-border h-[120px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-[3.35544e+07px]">
                <img
                  alt="creator image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="https://c.animaapp.com/meciuz02INr5pY/assets/4.png"
                  className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-[3.35544e+07px] inset-0"
                />
              </div>
            </div>
          </div>
          <div className="box-border flex flex-col outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
            <p className="text-lg font-semibold box-border leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-1 md:text-2xl md:leading-8 md:mb-3">
              Ryo
            </p>
            <p className="text-xs box-border leading-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
              Educator
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
