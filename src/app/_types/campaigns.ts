export interface Campaign {
  readonly id: string
  readonly title: string
  readonly creator: string
  readonly createdAt: string
  readonly image: string
  readonly funded: string
  readonly status: string
}

export interface SuccessfulCampaign {
  readonly id: string
  readonly title: string
  readonly image: string
  readonly funded: string
  readonly percentage: string
  readonly progressBarClass: string
}
