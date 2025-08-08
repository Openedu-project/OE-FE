import React from 'react';

export function MobileExploreSection() {
  return (
    <section className="items-center bg-[linear-gradient(to_right_bottom_in_oklab,rgb(36,207,255)_0px,rgb(0,93,214)_100%)] box-border gap-x-2 flex justify-between outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 mb-[60px] px-3 py-2 md:hidden">
      <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-2.svg" alt="Icon" className="box-border h-[26px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[26px]" />
      <div className="items-center box-border gap-x-2 flex justify-between min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 md:min-h-0 md:min-w-0">
        <h3 className="text-white font-semibold box-border leading-[22.4px] min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center font-lexend md:min-h-0 md:min-w-0">Khám phá OpenEdu</h3>
        <a href="/vi/ai-agent" className="text-indigo-50 text-sm items-center bg-white box-border flex h-8 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap px-4 py-2 rounded-[3.35544e+07px] md:min-h-0 md:min-w-0">
          <span className="text-transparent text-base font-semibold bg-clip-text bg-[linear-gradient(to_right_bottom_in_oklab,rgb(36,207,255)_0px,rgb(0,93,214)_100%)] box-border block leading-[22.4px] min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap font-lexend md:min-h-0 md:min-w-0">AI Agent</span>
        </a>
      </div>
      <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-2.svg" alt="Icon" className="box-border h-[26px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[26px]" />
    </section>
  );
}
