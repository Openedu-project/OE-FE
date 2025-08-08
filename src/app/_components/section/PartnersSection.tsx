import { partnersData } from '@/app/_data/partners';
import React from 'react';


export function PartnersSection() {
  return (
    <section className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-0 py-2 md:mb-20 md:py-4">
      <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full overflow-hidden">
        <div className="items-center box-border gap-x-8 inline-flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-8 md:gap-x-12 md:gap-y-12">
          {partnersData.logos.map((partner) => (
            <div key={partner.id} className="relative box-border h-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[120px] md:w-40">
              <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
                <img 
                  alt={partner.alt} 
                  sizes="(max-width: 768px) 120px, 160px" 
                  src={partner.src} 
                  className="text-transparent aspect-[auto_160_/_32] box-border h-10 max-w-full object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" 
                />
              </div>
            </div>
          ))}
          
          <div className="items-center box-border gap-x-8 flex outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-8 md:gap-x-12 md:gap-y-12">
            {partnersData.logos.map((partner) => (
              <div key={`duplicate-${partner.id}`} className="relative box-border h-8 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-[120px] md:w-40">
                <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
                  <img 
                    alt={partner.alt} 
                    sizes="(max-width: 768px) 120px, 160px" 
                    src={partner.src} 
                    className="text-transparent aspect-[auto_160_/_32] box-border h-10 max-w-full object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
