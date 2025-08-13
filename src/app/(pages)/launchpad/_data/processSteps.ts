export interface ProcessStep {
  readonly id: string
  readonly number: string
  readonly title: string
  readonly items: readonly string[]
  readonly icon?: string
}

export const creatorSteps: ProcessStep[] = [
  {
    id: "create-launchpad",
    number: "1",
    title: "Create A New Launchpad",
    items: [
      "Become OpenEdu Creator",
      "Create a course and not publish yet",
      "Make a launchpad for that course",
      "Deposit 1 NEAR to send request for publishing approval",
    ],
  },
  {
    id: "get-pledging",
    number: "2",
    title: "Get Backer Pledging",
    items: [
      "The launchpad will be displayed in OpenEdu when Admin approve request to publish.",
      "Backer will review quality of course before pledging via token in OpenEdu Wallet.",
    ],
  },
  {
    id: "get-voting",
    number: "3",
    title: "Get Backer Voting",
    items: [
      "When launchpad reaches end date, Start Voting button appears.",
      "Backer join the voting stage and decide to continue or end the launchpad.",
    ],
  },
  {
    id: "get-revenue",
    number: "4",
    title: "Get Launchpad Revenue",
    items: [
      "When launchpad gets 75% YES vote from backer, launchpad can continue.",
      "Creator will receive 100% backer funding via OpenEdu wallet.",
    ],
  },
] as const

export const backerSteps: ProcessStep[] = [
  {
    id: "pledge",
    title: "Pledge",
    number: "1",
    icon: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/icon-2.svg",
    items: [
      "Review course launchpad detail",
      "Read and agree with Pledging Terms & Conditions",
      "Pledge by token via OpenEdu wallet",
    ],
  },
  {
    id: "vote",
    title: "Vote",
    number: "2",
    icon: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/icon-3.svg",
    items: [
      "Review course launchpad voting plan",
      "Read and agree with Voting Terms & Conditions",
      "Vote to agree or reject the launchpad",
    ],
  },
  {
    id: "get-share",
    title: "Get Share",
    number: "3",
    icon: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/icon-4.svg",
    items: ["Follow information from Launchpad Publishing", "User will receive profit sharing via OpenEdu Wallet"],
  },
] as const
