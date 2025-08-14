"use client"
import React, { useState } from "react"
import { newestArticles } from "../_data/articles"
import { NewestArticleCard } from "../_ui/NewestArticleCard"

export function NewestSection() {
  const [activeTab, setActiveTab] = useState<"author" | "organization">("author")

  return (
    <div className="box-border flex flex-col shrink outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-auto md:shrink-0 md:w-3/12">
      <h2 className="text-blue-700 text-xl font-semibold box-border flow-root leading-7 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] border-blue-700 overflow-hidden mb-6 pl-1 border-l-2 border-solid font-lexend">
        The Newest
      </h2>
      <div className="bg-[oklab(0.510862_-0.0373517_-0.1971_/_0.1)] box-border flex flex-col grow outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full p-3 rounded-bl rounded-br rounded-tl rounded-tr">
        <div
          role="tablist"
          className="text-slate-500 items-center box-border grid grid-cols-[repeat(2,minmax(0px,1fr))] h-10 justify-center w-full mb-2 p-1 rounded-md"
        >
          <button
            type="button"
            role="tab"
            className="text-blue-700 text-sm font-medium items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] flex justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap p-2 rounded-[3.35544e+07px] font-lexend"
            onClick={() => setActiveTab("author")}
          >
            Author
          </button>
          <button
            type="button"
            role="tab"
            className="text-[oklab(0.136266_-0.00681703_-0.0357494_/_0.6)] text-sm font-medium items-center bg-transparent flex justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap p-2 rounded-[3.35544e+07px] font-lexend"
            onClick={() => setActiveTab("organization")}
          >
            Organization
          </button>
        </div>
        <div role="tabpanel" className="box-border grow outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-2">
          <div className="box-border flex flex-col h-auto outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] md:h-full">
            <div className="relative box-border grow outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
              <div className="static box-border h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-lg left-0 top-0 md:absolute">
                <div className="relative box-border h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] overflow-hidden">
                  <div className="box-border h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-scroll">
                    <div className="box-border table min-w-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      <div className="box-border gap-x-2 flex flex-row outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 md:flex-col">
                        {newestArticles.map((article) => (
                          <NewestArticleCard key={article.id} article={article} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="tabpanel"
          className="box-border hidden grow outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-2"
        ></div>
      </div>
    </div>
  )
}
