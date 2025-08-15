import { Course, coursesData } from "@/app/_data/courses"
import React from "react"

function FeaturedCourseCard({ course }: { course: Course }) {
  return (
    <div key={course.id} className="relative h-full w-full">
      <a href={course.href} className="inline-flex h-full w-full rounded-md">
        <div className="bg-white shadow-[rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] flex flex-col h-full min-h-[360px] w-full border border-slate-200 mx-auto p-4 rounded-lg">
          <div className="relative w-full rounded-sm">
            <div className="flex justify-center w-full border-2 border-transparent">
              <div className="relative aspect-video w-full rounded">
                <img
                  alt={course.title}
                  sizes="(max-width: 768px) 280px, 380px"
                  src={course.image}
                  className="absolute h-full w-full object-cover rounded inset-0"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 flex-1">
            <p className="text-base font-bold h-[45px] overflow-hidden font-lexend">{course.title}</p>
            <div className="text-blue-700 flex gap-x-4 font-lexend">
              <p>{course.instructor}</p>
              {course.verified && (
                <div className="bg-green-600 w-12 ml-auto -mr-3 rounded-l-full">
                  <div className="grid h-6 w-6 justify-center">
                    <img
                      src="https://c.animaapp.com/me27583zvcNERL/assets/icon-13.svg"
                      alt="Icon"
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between font-lexend">
              <div className="flex flex-wrap gap-x-2">
                <div className="flex items-center gap-x-2">
                  <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-6.svg" alt="Icon" className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
                <div className="bg-slate-200 w-px h-full" />
                <div className="flex items-center rounded-sm">
                  <span className="mr-1">{course.rating}</span>
                  <img
                    src="https://c.animaapp.com/me27583zvcNERL/assets/icon-7.svg"
                    alt="Icon"
                    className="h-[13px] w-3"
                  />
                </div>
                <div className="bg-slate-200 w-px h-full" />
                {course.level && (
                  <div className="flex items-center gap-x-2">
                    <img
                      src="https://c.animaapp.com/me27583zvcNERL/assets/icon-12.svg"
                      alt="Icon"
                      className="h-4 w-4"
                    />
                    <span>{course.level}</span>
                  </div>
                )}
              </div>
            </div>
            {course.price ? (
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2 flex-wrap">
                  <span className="font-bold font-lexend">{course.price}</span>
                </div>
              </div>
            ) : (
              <div className="text-green-600 font-bold font-lexend">Miễn phí</div>
            )}
          </div>
        </div>
      </a>
    </div>
  )
}

export function FeaturedCoursesSection() {
  return (
    <section className="flex max-w-[1440px] w-full mb-[60px] mx-auto px-6">
      <div className="w-full">
        <div className="flex justify-between mb-6 items-center">
          <h2 className="text-xl font-bold leading-7 mb-2 font-lexend md:text-[32px] md:leading-[44.8px]">
            Khoá học nổi bật
          </h2>
          <div className="flex gap-x-2 gap-y-2 items-center">
            <div className="flex gap-x-2 gap-y-2">
              <button
                type="button"
                className="text-indigo-50 text-sm items-center bg-blue-700 flex h-8 justify-center leading-5 opacity-50 text-center w-8 border border-slate-200 p-0 rounded-full border-solid -left-12 top-2/4"
              >
                <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-4.svg" alt="Icon" className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="text-indigo-50 text-sm items-center bg-blue-700 flex h-8 justify-center leading-5 text-center w-8 border border-slate-200 p-0 rounded-full border-solid -right-12 top-2/4"
              >
                <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-5.svg" alt="Icon" className="h-4 w-4" />
              </button>
            </div>
            <a
              href="/vi/courses"
              className="text-blue-700 text-sm items-center bg-white flex h-10 justify-center leading-5 underline-offset-4 border border-blue-700 px-4 py-2 rounded-md border-solid"
            >
              Xem tất cả
            </a>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-hidden">
            <div className="flex -ml-4">
              <div role="group" className="basis-full shrink-0 pl-4">
                <div className="grid gap-x-4 gap-y-4 pb-4 grid-cols-1 md:grid-cols-4">
                  {coursesData.featured.map((course: any) => (
                    <FeaturedCourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
