import React from "react"
import { courseFeatures } from "../_data/courseFeatures"

export function CourseSidebar() {
  return (
    <div className="relative box-border col-end-auto col-start-auto outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] md:col-end-[span_1] md:col-start-[span_1]">
      <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] top-[68px]">
        <div className="shadow-none box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] border-slate-200 p-0 rounded-lg border-0 border-solid md:shadow-[rgb(244,245,246)_0px_4px_30px_0px] md:border md:border-[oklab(0.562847_-0.0466164_-0.157356_/_0.2)] md:px-4 md:py-6">
          <div className="box-border hidden outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full overflow-hidden mb-5 md:block">
            <div className="relative box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full pb-[56.25%]">
              <div className="absolute bg-slate-100 box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] rounded-lg inset-0">
                <div className="box-border flex justify-center outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full">
                  <div className="relative aspect-video box-border min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full rounded-lg md:min-h-[auto] md:min-w-[auto]">
                    <img
                      alt="ZGqr6JKz98i0LH8l_Frame-1984077988.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src="https://c.animaapp.com/mec865u75K6p9o/assets/4.png"
                      className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full rounded-lg inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="box-border block h-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] border-slate-200 mb-6 border-b-0 border-x-0 border-solid md:hidden" />

          <div className="box-border gap-x-1 flex flex-col outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-1 mb-4">
            <div className="text-lg font-semibold box-border leading-[22.5px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] capitalize font-plus_jakarta_sans md:text-xl md:leading-7">
              Khóa học này bao gồm:
            </div>
            <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] rounded-lg">
              <div className="text-sm box-border gap-x-1 grid grid-cols-[repeat(1,minmax(0px,1fr))] leading-[19.6px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-1 font-plus_jakarta_sans">
                {courseFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className="items-center box-border gap-x-3 flex outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-3"
                  >
                    <img
                      src={feature.icon}
                      alt="Icon"
                      className="box-border h-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-5"
                    />
                    <span className="box-border block outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
                      {feature.text}
                      {feature.hasComma && (
                        <span className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] mr-1">
                          ,
                        </span>
                      )}
                      {feature.additionalText && ` ${feature.additionalText}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="box-border h-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] border-slate-200 border-b-0 border-x-0 border-solid" />

          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full rounded-lg">
            <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] py-4">
              <span className="text-xl font-semibold box-border leading-7 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] uppercase font-plus_jakarta_sans">
                Miễn phí
              </span>
            </div>
            <div className="items-center box-border flex outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
              <div className="items-center box-border flex outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full">
                <button
                  type="button"
                  className="text-sky-50 text-sm items-center bg-sky-600 flex grow h-fit justify-center leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-center text-nowrap mr-3 px-4 py-2 rounded-md font-plus_jakarta_sans"
                >
                  Đăng nhập để vào học ngay
                </button>
                <button
                  type="button"
                  className="text-sm items-center bg-white flex shrink-0 h-8 justify-center leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-center text-nowrap w-8 border border-sky-600 mr-3 p-0 rounded-md border-solid md:p-2"
                >
                  <img
                    src="https://c.animaapp.com/mec865u75K6p9o/assets/icon-12.svg"
                    alt="Icon"
                    className="box-border h-[18px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-nowrap w-[18px]"
                  />
                </button>
                <button
                  type="button"
                  className="relative text-sm items-center bg-white flex h-8 justify-center leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-center text-nowrap w-8 border border-sky-600 p-0 rounded-md border-solid md:p-2"
                >
                  <img
                    src="https://c.animaapp.com/mec865u75K6p9o/assets/icon-13.svg"
                    alt="Icon"
                    className="text-sky-600 box-border h-[18px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-nowrap w-[18px] md:h-4 md:w-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
