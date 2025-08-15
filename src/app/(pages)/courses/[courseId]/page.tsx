import React from "react"
import { CourseHero } from "./_section/CourseHero"
import { CourseContent } from "./_section/CourseContent"
import { CourseSidebar } from "./_section/CourseSidebar"

function CourseDetailPage() {
  return (
    <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)]">
      <div className="box-border outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] p-2 md:p-10">
        <div className="box-border gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <div className="box-border col-end-auto col-start-auto outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] md:col-end-[span_2] md:col-start-[span_2]">
            <CourseHero />
            <CourseContent />
          </div>
          <CourseSidebar />
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage
