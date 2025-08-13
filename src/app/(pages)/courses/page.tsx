import React from "react";
import { SearchSection } from "./_section/SearchSection";
import { CourseGrid } from "./_section/CourseGrid";

function CoursePage() {
  return (
    <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
      <SearchSection />
      <CourseGrid />
    </div>
  );
}

export default CoursePage;
