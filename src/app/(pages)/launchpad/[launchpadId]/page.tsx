import React from "react"
import { CourseInfo } from "./_section/CourseInfo"
import { CreatorInfo } from "./_section/CreatorInfo"
import { CourseDescription } from "./_section/CourseDescription"
import { CourseContent } from "./_section/CourseContent"
import { CourseSidebar } from "./_section/CourseSidebar"
import { VotingPlan } from "./_section/VotingPlan"

export default function CourseDetailPage() {
  return (
    <div className="items-start box-border gap-x-6 flex justify-between max-w-none min-h-[1000px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-6 w-full mx-auto my-10 pb-24 px-2  md:px-12">
      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full px-4 md:w-3/5">
        <div className="[align-items:normal] box-border gap-x-3 flex flex-col justify-normal outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 mb-3 md:items-start md:flex-row md:justify-between">
          <h2 className="text-blue-700 text-2xl font-bold box-border leading-9 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 md:text-3xl md:leading-[45px]">
            Enterprise Blockchain Architecture & Security
          </h2>
        </div>
        <div className="relative box-border block h-full min-h-56 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden mb-6 rounded-2xl md:hidden">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
            <div className="relative box-border h-56 min-h-[auto] min-w-[auto] object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:min-h-0 md:min-w-0">
              <img
                alt="campaign full card image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="https://c.animaapp.com/meciuz02INr5pY/assets/2.jpg"
                className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full inset-0"
              />
            </div>
          </div>
        </div>
        <div className="items-center box-border gap-x-1 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-1 mb-6">
          <img
            src="https://c.animaapp.com/meciuz02INr5pY/assets/icon-2.svg"
            alt="Icon"
            className="box-border h-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-5"
          />
          <p className="text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
            Được tạo vào{" "}
            <span className="text-sm font-semibold box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-base md:leading-6">
              Feb 21, 2025
            </span>
          </p>
        </div>

        <VotingPlan />

        <div className="items-center box-border gap-x-6 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-6 mt-6 md:hidden">
          <div className="box-border min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:min-h-0 md:min-w-0">
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
              <p className="text-xl font-semibold box-border leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-2xl md:leading-8">
                $30,005.00{" "}
              </p>
              USDT đã được tài trợ
            </div>
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
              <p className="text-xl font-semibold box-border leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:text-2xl md:leading-8">
                3{" "}
              </p>
              <p className="ml-1">nhà hỗ trợ</p>
            </div>
            <div className="box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
              <p className="font-semibold box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                đã kết thúc
              </p>
            </div>
          </div>
          <div className="relative items-center box-border flex h-[100px] justify-center min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[100px] md:inline-flex md:min-h-0 md:min-w-0">
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
              <span className="text-2xl font-bold box-border block leading-8 min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:min-h-0 md:min-w-0">
                17%
              </span>
            </div>
          </div>
        </div>

        <p className="font-semibold box-border block leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mt-6 md:hidden">
          Đăng nhập để đăng ký
        </p>

        <CourseInfo />
        <CreatorInfo />
        <CourseDescription />
        <CourseContent />
      </div>

      <CourseSidebar />
    </div>
  )
}
