export interface CertificateRequirement {
  readonly id: string
  readonly text: string
}

export const certificateRequirements: CertificateRequirement[] = [
  {
    id: "assignment",
    text: "Hoàn thành & nộp bài tập cuối khoá theo đúng yêu cầu",
  },
  {
    id: "test",
    text: "Bài kiểm tra đạt tối thiểu 80% câu trả lời đúng",
  },
] as const
