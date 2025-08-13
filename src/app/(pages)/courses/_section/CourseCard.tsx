import { Course } from '@/app/_types';
import React from 'react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <a href={course.href} className="text-blue-700 text-sm items-center box-border inline-flex h-full justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-md">
      <div className="text-slate-950 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border gap-x-3 flex flex-col h-full min-h-[360px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 underline-offset-4 text-nowrap w-full border border-slate-200 mx-auto p-4 rounded-lg border-solid">
        <div className="relative bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.5)] box-border shrink-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-sm">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full border-2 border-solid border-transparent">
            <div className="relative aspect-video box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-bl rounded-br rounded-tl rounded-tr">
              <img 
                alt={course.title} 
                sizes="(max-width: 768px) 280px, 380px" 
                src={course.image} 
                className="absolute text-transparent box-border h-full max-w-full object-cover outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-bl rounded-br rounded-tl rounded-tr inset-0" 
              />
            </div>
          </div>
          <div className="absolute box-border gap-x-1 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-1 underline-offset-4 text-nowrap w-full z-30 left-2 bottom-2"></div>
        </div>
        
        <div className="box-border gap-x-3 flex basis-full flex-col outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 underline-offset-4 text-nowrap">
          <p className="text-base font-bold box-border flex h-[45px] leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 overflow-hidden font-lexend">{course.title}</p>
          
          <div className="text-blue-700 items-center box-border gap-x-4 flex leading-[19.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 underline-offset-4 text-nowrap font-lexend">
            <p className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap">{course.provider}</p>
            {course.hasVerifiedBadge && (
              <div className="bg-green-600 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-12 ml-auto -mr-3 rounded-l-[3.35544e+07px]">
                <div className="items-center box-border grid h-6 justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-6">
                  <img src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-13.svg" alt="Icon" className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-4" />
                </div>
              </div>
            )}
          </div>
          
          <div className="box-border gap-x-4 flex justify-between leading-[19.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 underline-offset-4 text-nowrap font-lexend">
            <div className="box-border gap-x-2 flex flex-wrap outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap">
              <div className="items-center box-border gap-x-2 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap">
                <img src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-6.svg" alt="Icon" className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-4" />
                <span className="box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap">{course.students}</span>
              </div>
              
              <div role="none" className="bg-slate-200 box-border shrink-0 h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-px"></div>
              
              <div className="items-center box-border flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap rounded-sm">
                <span className="box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap mr-1">{course.rating}</span>
                <img src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-7.svg" alt="Icon" className="box-border h-[13px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-3" />
              </div>
              
              {course.level && (
                <>
                  <div role="none" className="bg-slate-200 box-border shrink-0 h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-px"></div>
                  <div className="items-center box-border gap-x-2 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap">
                    <img src="https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-8.svg" alt="Icon" className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-4" />
                    <span className="box-border block outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap">{course.level}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className={course.price ? "box-border gap-x-2 flex flex-col outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap" : "text-green-600 font-bold box-border leading-[19.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap font-lexend"}>
            {course.price ? (
              <div className="items-center box-border gap-x-2 flex flex-wrap outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 underline-offset-4 text-nowrap">
                <span className="font-bold box-border block leading-[19.6px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap font-lexend">{course.price}</span>
              </div>
            ) : (
              "Free"
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
