import React from "react"
import { CourseDetails } from "./CourseDetails"
import { InstructorSection } from "./InstructorSection"
import { CourseCurriculum } from "./CourseCurriculum"
import { CertificateSection } from "./CertificateSection"
import { MobileCourseInfo } from "./MobileCourseInfo"

export function CourseContent() {
  return (
    <>
      <div className="box-border gap-x-6 hidden flex-col outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-6 md:flex">
        <CourseDetails />
        <InstructorSection />
        <CourseCurriculum />
        <CertificateSection />
      </div>

      <MobileCourseInfo />
    </>
  )
}
