export interface CourseFeature {
  readonly id: string
  readonly icon: string
  readonly text: string
  readonly hasComma?: boolean
  readonly additionalText?: string
}

export const courseFeatures: CourseFeature[] = [
  {
    id: "certificate",
    icon: "https://c.animaapp.com/mec865u75K6p9o/assets/icon-8.svg",
    text: "Chứng chỉ hoàn thành",
  },
  {
    id: "tests",
    icon: "https://c.animaapp.com/mec865u75K6p9o/assets/icon-9.svg",
    text: "Tổng cộng 1 bài kiểm tra",
  },
  {
    id: "sections",
    icon: "https://c.animaapp.com/mec865u75K6p9o/assets/icon-10.svg",
    text: "4 phần",
    hasComma: true,
    additionalText: "13 bài học",
  },
  {
    id: "videos",
    icon: "https://c.animaapp.com/mec865u75K6p9o/assets/icon-11.svg",
    text: "8 bài giảng video",
  },
] as const
