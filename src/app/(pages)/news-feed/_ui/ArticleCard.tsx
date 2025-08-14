import { Article } from "@/app/_types/article"
import clsx from "clsx"
import React from "react"

interface ArticleCardProps {
  article: Article
  variant: "featured" | "regular"
}

export function ArticleCard({ article, variant }: ArticleCardProps) {
  const containerClass =
    variant === "featured"
      ? "bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border col-end-auto col-start-auto min-w-64 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 rounded-lg border-solid md:col-end-[span_3] md:col-start-[span_3]"
      : "bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border min-w-64 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 rounded-lg border-solid md:min-w-0"

  return (
    <div className={containerClass}>
      <div
        className={clsx(
          "box-border gap-x-3  outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 p-3",
          variant === "featured" ? "grid grid-cols-[repeat(2,minmax(0px,1fr))]" : "flex flex-col",
        )}
      >
        <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
          <div className="relative aspect-video box-border shrink-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-bl rounded-br rounded-tl rounded-tr">
            <img
              alt={article.title}
              sizes="(max-width: 768px) 280px, 380px"
              src={article.image}
              className="absolute text-transparent box-border shrink-0 h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-bl rounded-br rounded-tl rounded-tr inset-0"
            />
          </div>
        </div>
        <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
          <p className="text-[9px] box-border leading-[12.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 font-lexend">
            {article.date}
          </p>
          <p className="font-semibold box-border flow-root h-[42px] leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] overflow-hidden mb-2 font-lexend">
            {article.title}
          </p>
          <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 p-0.5 rounded-sm">
            <div className="items-center box-border gap-x-2 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 w-full">
              <div className="items-center box-border gap-x-2 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 w-full">
                <div className="relative box-border shrink-0 h-9 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-9 border border-slate-200 rounded-[3.35544e+07px] border-solid">
                  <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
                    <div className="absolute box-border h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-[3.35544e+07px] left-0 top-0">
                      <img
                        alt={article.author.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={article.author.avatar}
                        className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full rounded-[3.35544e+07px] inset-0"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
                  <p className="text-xs font-semibold box-border flow-root leading-[16.8px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] overflow-hidden font-lexend">
                    {article.author.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs box-border flow-root leading-[16.8px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden font-lexend">
            {article.excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}
