export interface Author {
  readonly name: string
  readonly avatar: string
}

export interface Article {
  readonly id: string
  readonly title: string
  readonly excerpt: string
  readonly date: string
  readonly image: string
  readonly author: Author
}
