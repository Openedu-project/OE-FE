"use client"
import React, { useState } from "react"

export function CategoryNavigation() {
  const [searchValue, setSearchValue] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="bg-[oklab(0.510862_-0.0373517_-0.1971_/_0.05)] box-border gap-x-4 flex flex-col flex-wrap justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 pl-2 pr-4 pt-2 md:flex-row">
      <nav
        aria-label="Main"
        className="relative items-center box-border flex basis-[0%] grow justify-center max-w-max outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] z-10"
      >
        <li className="box-border list-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left">
          <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] pb-1 border-b border-solid border-transparent">
            <button
              className="text-[oklab(0.136266_-0.00681703_-0.0357494_/_0.75)] text-sm font-medium items-center bg-transparent inline-flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center w-max border px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-lexend md:text-base md:font-semibold md:leading-[22.4px]"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="https://c.animaapp.com/meas1qhhBW92jF/assets/icon-2.svg"
                alt="Icon"
                className="text-sm font-medium box-border h-4 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-4 mr-2 md:text-base md:font-semibold md:leading-[22.4px]"
              />
              All Categories
              <img
                src="https://c.animaapp.com/meas1qhhBW92jF/assets/icon-3.svg"
                alt="Icon"
                className="relative text-sm font-medium box-border h-3 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-3 ml-1 top-px md:text-base md:font-semibold md:leading-[22.4px]"
              />
            </button>
          </div>
        </li>
        <div className="absolute box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] left-0 top-full"></div>
      </nav>
      <nav
        aria-label="Main"
        className="relative items-center box-border hidden basis-full grow justify-center max-w-max min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] z-10 md:flex md:min-h-[auto] md:min-w-[auto]"
      >
        <div className="relative box-border min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:min-h-[auto] md:min-w-[auto]">
          <ul className="items-center box-border gap-x-3 flex basis-[0%] grow justify-center list-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 pl-0"></ul>
        </div>
        <div className="absolute box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] left-0 top-full"></div>
      </nav>
      <div className="box-border grow max-w-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-3 md:max-w-xl">
        <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
          <div className="absolute text-slate-500 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] left-3 top-2/4">
            <img
              src="https://c.animaapp.com/meas1qhhBW92jF/assets/icon-4.svg"
              alt="Icon"
              className="box-border h-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-6"
            />
          </div>
          <input
            placeholder="Search ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-sm box-border flex h-10 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 pl-10 pr-3 py-2 rounded-[3.35544e+07px] border-solid"
          />
        </div>
      </div>
    </div>
  )
}
