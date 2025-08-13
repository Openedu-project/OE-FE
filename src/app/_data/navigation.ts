export interface NavigationItem {
  readonly id: string
  readonly label: string
  readonly href: string
  readonly beta?: boolean
}

export const navigationData = {
  topLinks: [
    { id: "students", label: "Dành cho Học viên", href: "#" },
    { id: "instructors", label: "Dành cho Giảng viên", href: "#" },
    { id: "business", label: "Dành cho Doanh nghiệp", href: "#" },
  ] as const,

  mainNav: [
    { id: "ai-agent", label: "AI Agent", href: "/ai-agent", beta: true },
    { id: "courses", label: "Khoá học", href: "/courses" },
    { id: "news", label: "Bảng tin", href: "/news-feed" },
    { id: "launchpad", label: "Launchpad", href: "/launchpad" },
    { id: "affiliate", label: "Tiếp thị liên kết", href: "/affiliate/campaigns" },
  ] as const,
} as const
