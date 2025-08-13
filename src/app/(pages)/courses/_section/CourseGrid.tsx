import React from 'react';
import { Pagination } from './Pagination';
import { CourseCard } from './CourseCard';
import { courses } from '../_data/courses';
export function CourseGrid() {
  return (
    <>
      <div className="box-border gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 p-4 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:p-8">
        {courses.map((course) => (
          <div key={course.id} className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
      
      <Pagination />
    </>
  );
}
