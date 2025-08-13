import React from 'react';
import { paginationItems } from '../_data/pagination';

export function Pagination() {
  return (
    <nav aria-label="pagination" className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mx-auto my-6">
      <ul className="items-center box-border gap-x-1 flex list-none outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-1 pl-0">
        {paginationItems.map((item) => (
          <li key={item.id} className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-left">
            <a 
              className={item.className}
              aria-label={item.ariaLabel}
            >
              {item.icon ? (
                <img src={item.icon} alt="Icon" className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-4" />
              ) : (
                item.label
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
