import React from 'react';

export function HeroSection() {
  return (
    <section className="box-border flex flex-col h-max max-w-[1440px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mb-[60px] mx-auto pt-4 pb-10 px-6 md:pt-10 md:px-4">
      <div className="items-start box-border gap-x-4 flex flex-col grow justify-normal outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 md:gap-x-8 md:flex-row md:justify-center md:gap-y-8">
        <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full px-2 rounded-lg md:w-[33.3333%] md:px-4">
          <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] z-10">
            <div className="box-border flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
              <div className="box-border flex max-w-[210px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mt-6">
                <img alt="Mở logo" src="https://c.animaapp.com/me27583zvcNERL/assets/30.png" className="text-transparent aspect-[auto_280_/_42] box-border max-w-full object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[280px]" />
              </div>
            </div>
            
            <h1 className="text-6xl font-medium items-center box-border gap-x-2 flex leading-[90px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 mb-4">
              <span className="text-blue-700 text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap font-lexend md:text-2xl md:leading-[33.6px]">Học tập</span>
              <span className="text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend md:text-[32px] md:leading-[44.8px]">.</span>
              <span className="text-cyan-500 text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap font-lexend md:text-2xl md:leading-[33.6px]">Chia sẻ</span>
              <span className="text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend md:text-[32px] md:leading-[44.8px]">.</span>
              <span className="text-fuchsia-400 text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap font-lexend md:text-2xl md:leading-[33.6px]">Phát triển</span>
              <span className="text-base font-bold box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] font-lexend md:text-[32px] md:leading-[44.8px]">.</span>
            </h1>
            
            <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-6">
              <h2 className="text-base box-border leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2 font-lexend md:text-xl md:leading-7">
                OpenEdu là nền tảng công nghệ giáo dục (EdTech) ứng dụng công nghệ Blockchain và AI, 
                tích hợp các yếu tố Game hóa (Gamification), nhằm nâng cao trải nghiệm giảng dạy và 
                học tập cho các tổ chức, giảng viên và học viên.
              </h2>
            </div>
            
            <div className="relative box-border inline-block max-w-[300px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden md:max-w-none">
              <a href="/vi/courses" className="text-blue-700 text-sm items-center box-border inline-flex h-fit justify-center leading-5 max-w-[300px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-md md:max-w-[340px]">
                <button type="button" className="relative text-white text-base font-bold items-center bg-blue-700 flex h-fit justify-between leading-[22.8571px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center underline-offset-4 text-nowrap w-full overflow-hidden pl-6 pr-0 py-3 rounded-[3.35544e+07px] md:text-xl md:leading-[28.5714px]">
                  <span className="relative text-base box-border block leading-[22.8571px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-[calc(100%_-_28px)] z-10 mr-4 md:text-xl md:leading-[28.5714px]">Tìm khóa học phù hợp</span>
                  <div className="relative text-base bg-white box-border leading-[22.8571px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap z-10 mr-2 p-1 rounded-[3.35544e+07px] md:text-xl md:leading-[28.5714px]">
                    <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-3.svg" alt="Icon" className="text-blue-700 text-base box-border h-6 leading-[22.8571px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-6 md:text-xl md:leading-[28.5714px]" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:w-[66.6667%]">
          <div className="relative box-border max-w-[800px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mx-auto">
            <img 
              alt="Biểu ngữ anh hùng" 
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 70vw, (max-width: 1440px) 50vw, 800px" 
              src="https://c.animaapp.com/me27583zvcNERL/assets/81.png" 
              className="relative text-transparent aspect-[auto_1080_/_573] box-border max-w-full object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[1080px] z-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
