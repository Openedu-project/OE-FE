"use client"
import React, { useState } from "react"

export function SearchSection() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <div className="items-center bg-[linear-gradient(240deg,rgba(255,255,255,0.3)_4.37%,rgba(208,174,250,0.3)_37.02%,rgba(160,244,249,0.5)_71.84%,rgba(255,255,255,0.3)_99.69%)] box-border flex h-[100px] justify-center  p-4 md:h-40 md:p-8">
        <div className="flex items-center justify-between box-border  border border-slate-200 w-full px-4 rounded-[360px]">
          <div className=" text-slate-500 box-border  left-3 top-2/4">
            <img
              src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-2.svg"
              alt="Icon"
              className="box-border h-6  w-6 "
            />
          </div>
          <input
            placeholder="Search course"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className=" flex-1 text-sm box-border flex h-10 leading-5 outline-none w-full px-10 py-2  border-solid md:h-14"
          />
          <div className=" text-slate-500 box-border  right-3 top-2/4">
            <button
              type="button"
              className="text-indigo-50 text-sm items-center bg-blue-700 flex h-7 justify-center leading-5  text-center text-nowrap w-7 p-2 rounded-[3.35544e+07px] md:h-10 md:w-10"
            >
              <img
                src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-3.svg"
                alt="Icon"
                className="box-border h-6  text-nowrap w-6"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="[align-items:normal] box-border gap-x-2 flex flex-col justify-normal  gap-y-2 p-4 md:items-center md:flex-row md:justify-between md:p-8">
        <p className="text-base font-semibold box-border leading-[22.4px]  font-lexend md:text-[28px] md:leading-[39.2px]">
          18 Results Found
        </p>
        <div className="items-center box-border gap-x-3 flex  gap-y-3">
          <button
            type="button"
            className="text-sm items-center bg-white flex h-10 justify-center leading-5  text-center text-nowrap border border-slate-200 px-4 py-2 rounded-md border-solid"
          >
            <img
              src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-4.svg"
              alt="Icon"
              className="box-border h-6  text-nowrap w-6"
            />
            <span className="box-border block  text-nowrap">Filter</span>
          </button>
          <button
            type="button"
            className="text-sm items-center bg-white gap-x-2 flex h-10 justify-center leading-5  gap-y-2 text-center text-nowrap border border-slate-200 px-4 py-2 rounded-md border-solid"
          >
            <img
              src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-5.svg"
              alt="Icon"
              className="box-border h-6  text-nowrap w-6"
            />
            <span className="box-border block  text-nowrap">Sort</span>
          </button>
        </div>
      </div>
    </>
  )
}
