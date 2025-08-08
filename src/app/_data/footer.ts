export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
}

export interface FooterSection {
  readonly id: string;
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export const footerData = {
  sections: [
    {
      id: 'register',
      title: 'Đăng ký',
      links: [
        { id: 'teach', label: 'Giảng dạy trên OpenEdu', href: '#' },
        { id: 'learn', label: 'Học tập trên OpenEdu', href: '#' },
        { id: 'business', label: 'Dành cho Doanh nghiệp', href: '#' }
      ]
    },
    {
      id: 'terms',
      title: 'Điều khoản & Điều kiện',
      links: [
        { id: 'terms', label: 'OpenEdu T&C', href: '/vi/terms' },
        { id: 'faq', label: 'OpenEdu FAQ', href: '/vi/faq' },
        { id: 'privacy', label: 'Chính sách bảo mật', href: '/vi/privacy-policy' },
        { id: 'payment', label: 'Hướng dẫn thanh toán khóa học', href: '/vi/course-payment-instructions' },
        { id: 'refund', label: 'Course Purchase & Refund Policy', href: '/vi/purchase-refund-policy' }
      ]
    },
    {
      id: 'social',
      title: 'Mạng xã hội',
      links: [
        { id: 'facebook', label: 'Facebook', href: "https://www.facebook.com/OpenEduOfficial", icon: "https://c.animaapp.com/me27583zvcNERL/assets/icon-21.svg" },
        { id: 'twitter', label: 'Twitter', href: "https://x.com/OpenEdu_HQ", icon: "https://c.animaapp.com/me27583zvcNERL/assets/icon-22.svg" },
        { id: 'linkedin', label: 'LinkedIn', href: "https://www.linkedin.com/company/106319142/admin/dashboard/", icon: "https://c.animaapp.com/me27583zvcNERL/assets/icon-23.svg" },
        { id: 'youtube', label: 'YouTube', href: "https://www.youtube.com/@OpenEdu_Official", icon: "https://c.animaapp.com/me27583zvcNERL/assets/icon-24.svg" }
      ]
    }
  ] as const
} as const;
