export interface VotingPlanStep {
  readonly id: string
  readonly number: string
  readonly sections: string
  readonly date: string
}

export const votingPlanSteps: VotingPlanStep[] = [
  { id: "step1", number: "1", sections: "5 sections", date: "3/6/2025" },
  { id: "step2", number: "2", sections: "6 sections", date: "3/10/2025" },
  { id: "step3", number: "3", sections: "6 sections", date: "3/16/2025" },
  { id: "step4", number: "4", sections: "5 sections", date: "3/25/2025" },
] as const
