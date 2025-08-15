export interface CourseSection {
  readonly id: string
  readonly title: string
}

export const courseSections: CourseSection[] = [
  { id: "section1", title: "Section 1: Enterprise Architecture" },
  { id: "section2", title: "Section 2: Security Protocols" },
  { id: "section3", title: "Section 3: Implementation" },
  { id: "section4", title: "Section 4: Governance" },
]
