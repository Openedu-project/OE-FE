export interface PaginationItem {
  readonly id: string;
  readonly label?: string;
  readonly className: string;
  readonly ariaLabel?: string;
  readonly icon?: string;
}

export const paginationItems: PaginationItem[] = [
  { 
    id: 'prev', 
    className: "text-sm items-center box-border inline-flex h-8 justify-center leading-5 opacity-60 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-8 rounded-md", 
    ariaLabel: 'Go to previous page',
    icon: "https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-16.svg"
  },
  { id: 'page-1', label: '1', className: "text-sm items-center bg-white box-border inline-flex h-8 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-8 border border-slate-200 rounded-md border-solid" },
  { id: 'page-2', label: '2', className: "text-sm items-center box-border inline-flex h-8 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-8 rounded-md" },
  { 
    id: 'next', 
    className: "text-sm items-center box-border inline-flex h-8 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-8 rounded-md", 
    ariaLabel: 'Go to next page',
    icon: "https://c.animaapp.com/me9bxkhnqeD7Nu/assets/icon-17.svg"
  }
] as const;