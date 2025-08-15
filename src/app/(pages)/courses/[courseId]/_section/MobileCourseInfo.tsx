import React from "react"
import { CourseDetails } from "./CourseDetails"
import { InstructorSection } from "./InstructorSection"
import { CourseCurriculum } from "./CourseCurriculum"
import { CertificateSection } from "./CertificateSection"

export function MobileCourseInfo() {
  return (
    <div className="box-border gap-x-6 flex flex-col min-h-[auto] min-w-[auto] outline-[oklab(0.137053_-0.00715154_-0.0352408_/_0.5)] gap-y-6 md:hidden md:min-h-0 md:min-w-0">
      <CourseDetails />
      <InstructorSection />
      <CourseCurriculum />
      <CertificateSection />
    </div>
  )
}
