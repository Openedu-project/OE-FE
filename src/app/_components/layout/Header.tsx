import { navigationData } from '@/app/_data/navigation';
import React from 'react';


export function Header() {
  return (
    <header className="sticky box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] z-50 left-0 top-0">
      <div className="bg-zinc-900 box-border gap-x-2 hidden outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 md:flex">
        {navigationData.topLinks.map((link) => (
          <a key={link.id} href={link.href} className="text-white text-sm items-center box-border inline-flex h-10 justify-center leading-5 min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap mx-4 my-1 rounded-md font-lexend md:flex md:min-h-[auto] md:min-w-[auto]">
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="items-center bg-blue-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border gap-x-1 flex shrink-0 h-14 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-1 w-full p-3 md:px-6">
        <button type="button" className="text-sm items-center bg-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap w-10 mr-2 p-0 rounded-md md:hidden md:min-h-0 md:min-w-0">
          <img src="https://c.animaapp.com/me27583zvcNERL/assets/icon-1.svg" alt="Icon" className="text-indigo-50 box-border h-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-5" />
        </button>
        
        <a href="/vi" className="text-sm items-center box-border flex h-10 justify-center leading-5 min-w-[57px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-[57px] rounded-md md:w-[172px]">
          <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-full border-2 border-solid border-transparent">
            <img 
              alt="OpenEdu" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              src="https://c.animaapp.com/me27583zvcNERL/assets/28.png" 
              className="text-transparent aspect-[auto_57_/_40] box-border h-8 max-w-full object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-full md:aspect-[auto_172_/_40]" 
            />
          </div>
        </a>
        
        <ul className="text-indigo-50 box-border gap-x-3 hidden list-none min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-3 ml-6 pl-0 md:flex md:min-h-[auto] md:min-w-[auto]">
          {navigationData.mainNav.map((item) => (
            <li key={item.id} className="box-border min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left md:min-h-[auto] md:min-w-[auto]">
              <a href={item.href} className={item.beta ? "relative text-sm font-normal items-center bg-[linear-gradient(to_right_bottom_in_oklab,rgb(36,207,255)_0px,rgb(0,93,214)_100%)] box-border inline-flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap px-3 py-2 rounded-2xl font-lexend md:text-base md:font-semibold md:leading-[22.4px]" : "relative text-sm font-normal items-center box-border inline-flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap p-2 rounded-md font-lexend md:text-base md:font-semibold md:leading-[22.4px]"}>
                {item.label}
                {item.beta && (
                  <div className="absolute text-slate-950 text-xs font-semibold items-center bg-slate-100 box-border flex leading-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap border border-slate-200 px-1.5 py-0.5 rounded-[3.35544e+07px] border-solid -right-6 -top-2">BETA</div>
                )}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="box-border flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] ml-auto">
          <a href="/vi/login?next=%2Fvi" className="text-blue-700 text-xs items-center bg-white box-border flex h-8 justify-center leading-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap border border-blue-700 mr-1 px-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:text-sm md:leading-5 md:px-3">Đăng nhập</a>
          <a href="/vi/signup?next=%2Fvi" className="text-indigo-50 text-xs items-center bg-blue-700 box-border flex h-8 justify-center leading-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap px-1 rounded-bl rounded-br rounded-tl rounded-tr md:text-sm md:leading-5 md:px-3">Đăng ký</a>
        </div>
        
        <button type="button" role="combobox" className="text-white text-sm items-center aspect-square bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_0px,rgb(255,255,255)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] flex h-8 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center capitalize w-8 border ml-0 p-1 rounded-[3.35544e+07px] border-solid border-white md:ml-2">
          <span className="box-border flow-root outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] overflow-hidden">vi</span>
        </button>
      </div>
    </header>
  );
}
