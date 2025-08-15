"use client"
import React, { useState } from "react"
import { curriculumSections } from "../_data/curriculum"

export function CourseCurriculum() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    section1: true,
  })

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <div className="box-border gap-x-1 flex flex-col min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-1 md:min-h-[auto] md:min-w-[auto]">
      <div className="text-lg font-semibold box-border leading-[22.5px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] capitalize font-plus_jakarta_sans md:text-xl md:leading-7 md:min-h-[auto] md:min-w-[auto]">
        Nội dung khóa học
      </div>
      <div className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] rounded-lg md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-full">
          {curriculumSections.map((section) => (
            <div key={section.id} className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
              <div className="box-border flex outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] mb-2">
                <button
                  type="button"
                  className={
                    section.id === "section1"
                      ? "font-medium items-center bg-slate-100 flex basis-[0%] grow justify-between leading-[22.4px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left border border-[oklab(0.562847_-0.0466164_-0.157356_/_0.1)] p-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid font-plus_jakarta_sans md:min-h-[auto] md:min-w-[auto]"
                      : "font-medium items-center bg-[oklab(0.562847_-0.0466164_-0.157356_/_0.1)] flex basis-[0%] grow justify-between leading-[22.4px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left border border-[oklab(0.562847_-0.0466164_-0.157356_/_0.1)] p-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid font-plus_jakarta_sans md:min-h-[auto] md:min-w-[auto]"
                  }
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                  <img
                    src="https://c.animaapp.com/mec865u75K6p9o/assets/icon-5.svg"
                    alt="Icon"
                    className="box-border shrink-0 h-4 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-4"
                  />
                </button>
              </div>

              <div
                role="region"
                className={
                  expandedSections[section.id]
                    ? "text-sm box-border leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] overflow-hidden"
                    : "text-sm box-border hidden leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] overflow-hidden"
                }
              >
                {section.lessons && (
                  <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] pb-4">
                    <ul className="text-[oklab(0.137053_-0.00715154_-0.0352408_/_0.6)] font-semibold box-border leading-[19.6px] list-none outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] pl-0 font-plus_jakarta_sans">
                      {section.lessons.map((lesson, index) => (
                        <li
                          key={lesson.id}
                          className={
                            index === 0
                              ? "box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left mb-2"
                              : "box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left"
                          }
                        >
                          <button
                            type="button"
                            className="relative font-normal items-center bg-transparent gap-x-1 inline-flex h-fit justify-center leading-5 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-1 text-center w-full border border-[oklab(0.137053_-0.00715154_-0.0352408_/_0.1)] p-2 rounded-md border-solid"
                          >
                            <img
                              src="https://c.animaapp.com/mec865u75K6p9o/assets/icon-6.svg"
                              alt="Icon"
                              className="box-border h-4 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] w-4"
                            />
                            <div className="items-start box-border gap-x-0.5 flex basis-[0%] flex-col grow min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-0.5 md:min-h-[auto] md:min-w-[auto]">
                              <span className="text-sky-600 text-[10px] font-normal box-border block leading-[14px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] md:text-xs md:font-semibold md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto]">
                                {lesson.title}
                              </span>
                              <span className="text-[oklab(0.137053_-0.00715154_-0.0352408_/_0.9)] font-normal box-border block basis-[0%] grow leading-5 min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] text-left md:font-semibold md:leading-[19.6px] md:min-h-[auto] md:min-w-[auto]">
                                {lesson.description}
                              </span>
                              <div className="text-sky-600 text-[10px] box-border leading-[14px] min-h-0 min-w-0 outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] md:text-xs md:leading-[16.8px] md:min-h-[auto] md:min-w-[auto]">
                                <span className="text-[10px] box-border leading-[14px] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] md:text-xs md:leading-[16.8px]">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
