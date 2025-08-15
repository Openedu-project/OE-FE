"use client"
import React, { useState } from "react"
import { courseSections } from "../_data/courseSection"

export function CourseContent() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <>
      <h3 className="text-xl font-semibold box-border leading-[30px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-7 mb-4 md:text-2xl md:leading-9">
        Nội dung khóa học
      </h3>
      <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
        {courseSections.map((section) => (
          <div key={section.id} className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-3">
            <div className="bg-neutral-100 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] border border-violet-50 p-3 rounded-2xl border-solid">
              <div className="items-center box-border gap-x-2 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2">
                <h4 className="font-semibold box-border leading-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                  {section.title}
                </h4>
                <button
                  type="button"
                  className="bg-transparent block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center p-0"
                  onClick={() => toggleSection(section.id)}
                >
                  <img
                    src="https://c.animaapp.com/meciuz02INr5pY/assets/icon-5.svg"
                    alt="Icon"
                    className="box-border h-6 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-6"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
