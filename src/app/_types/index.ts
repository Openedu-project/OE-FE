export interface Course {
  readonly id: string;
  readonly title: string;
  readonly provider: string;
  readonly image: string;
  readonly href: string;
  readonly students: string;
  readonly rating: string;
  readonly level: string | null;
  readonly price: string | null;
  readonly hasVerifiedBadge: boolean;
}
