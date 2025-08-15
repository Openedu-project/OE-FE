export interface CurriculumLesson {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly duration: string
}

export interface CurriculumSection {
  readonly id: string
  readonly title: string
  readonly lessons?: CurriculumLesson[]
}

export const curriculumSections: CurriculumSection[] = [
  {
    id: "section1",
    title: "Phần 1: Hướng dẫn trước khi tham gia khoá học",
    lessons: [
      {
        id: "lesson1",
        title: "Bài học 1",
        description: "Bài phát biểu khai mạc chương trình của Bí Thư BCH Trung ương Đoàn Nguyễn Tường Lâm",
        duration: "1 video",
      },
      {
        id: "lesson2",
        title: "Bài học 2",
        description: "Hướng dẫn tham gia Khoá học : Tập huấn kỹ năng Gen AI cho cán bộ Đoàn Hội",
        duration: "1 video",
      },
    ],
  },
  {
    id: "section2",
    title: "Phần 2: Nội dung Tập huấn kỹ năng Gen AI",
  },
  {
    id: "section3",
    title: "Phần 3: Bài kiểm tra cuối khoá",
  },
  {
    id: "section4",
    title: "Phần 4: Nhận chứng chỉ khoá học",
  },
] as const
