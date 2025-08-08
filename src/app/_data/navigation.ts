export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly beta?: boolean;
}

export const navigationData = {
  topLinks: [
    { id: 'students', label: 'Dành cho Học viên', href: '#' },
    { id: 'instructors', label: 'Dành cho Giảng viên', href: '#' },
    { id: 'business', label: 'Dành cho Doanh nghiệp', href: '#' }
  ] as const,
  
  mainNav: [
    { id: 'ai-agent', label: 'AI Agent', href: '/vi/ai-agent', beta: true },
    { id: 'courses', label: 'Khoá học', href: '/vi/courses' },
    { id: 'news', label: 'Bảng tin', href: '/vi/news-feed' },
    { id: 'launchpad', label: 'Launchpad', href: '/vi/launchpad' },
    { id: 'affiliate', label: 'Tiếp thị liên kết', href: '/vi/affiliate/campaigns' }
  ] as const
} as const;
