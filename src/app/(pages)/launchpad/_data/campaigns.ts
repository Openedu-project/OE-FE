import { Campaign, SuccessfulCampaign } from "@/app/_types"

export const featuredCampaigns: Campaign[] = [
  {
    id: "enterprise-blockchain",
    title: "Enterprise Blockchain Architecture & Security",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/16.jpg",
    funded: "30,005.00000000 USDT",
    status: "ended",
  },
  {
    id: "blockchain-foundations",
    title: "Blockchain Foundations: From Zero to Hero",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/15.png",
    funded: "55,000.00000000 USDC",
    status: "ended",
  },
  {
    id: "ai-ml-fundamentals",
    title: "AI & Machine Learning Fundamentals",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/10.png",
    funded: "75,000.00000000 USDT",
    status: "ended",
  },
] as const

export const upcomingCampaigns: Campaign[] = [
  {
    id: "cross-chain-protocol",
    title: "Cross-Chain Protocol Development",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/17.png",
    funded: "",
    status: "upcoming",
  },
  {
    id: "defi-trading",
    title: "DeFi & Crypto Trading Masterclass",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/29.png",
    funded: "",
    status: "upcoming",
  },
  {
    id: "layer2-scaling",
    title: "Layer 2 Scaling Solutions Development",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/18.jpg",
    funded: "",
    status: "upcoming",
  },
  {
    id: "nft-development",
    title: "NFT Development & Digital Assets",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/19.jpg",
    funded: "",
    status: "upcoming",
  },
  {
    id: "privacy-smart-contracts",
    title: "Privacy-Preserving Smart Contracts",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/21.jpg",
    funded: "",
    status: "upcoming",
  },
  {
    id: "consensus-mechanism",
    title: "Advanced Consensus Mechanism Design",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/20.png",
    funded: "",
    status: "upcoming",
  },
  {
    id: "decentralized-identity",
    title: "Decentralized Identity Systems Development",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/23.png",
    funded: "",
    status: "upcoming",
  },
  {
    id: "ai-web3",
    title: "AI-Powered Web3 Solutions",
    creator: "Ryo",
    createdAt: "Feb 21, 2025",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/24.jpg",
    funded: "",
    status: "upcoming",
  },
] as const

export const successfulCampaigns: SuccessfulCampaign[] = [
  {
    id: "blockchain-ai-oracles",
    title: "Blockchain AI Oracles Development",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/27.png",
    funded: "$140,000.00",
    percentage: "84%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-15.2%] w-full",
  },
  {
    id: "neural-networks",
    title: "Neural Networks & Deep Learning Immersion",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/25.png",
    funded: "$140,000.00",
    percentage: "93%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-6.7%] w-full",
  },
  {
    id: "zero-knowledge-proof",
    title: "Zero-Knowledge Proof Development",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/26.jpg",
    funded: "$185,000.00",
    percentage: "105%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full",
  },
  {
    id: "move-language",
    title: "Move Language for Blockchain",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/28.jpg",
    funded: "$140,000.00",
    percentage: "112%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full",
  },
  {
    id: "smart-contract-dev",
    title: "Professional Smart Contract Development",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/30.jpg",
    funded: "$117,000.00",
    percentage: "97%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-2.5%] w-full",
  },
  {
    id: "tokenomics",
    title: "Tokenomics and Mechanism Design",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/33.png",
    funded: "$135,000.00",
    percentage: "100%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full",
  },
  {
    id: "rust-blockchain",
    title: "Rust for Blockchain Development",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/31.png",
    funded: "$120,000.00",
    percentage: "92%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-7.7%] w-full",
  },
  {
    id: "web3-essentials",
    title: "Web3 Essentials: A Beginner's Guide",
    image: "https://c.animaapp.com/me9mhdqeeGo4n5/assets/32.jpg",
    funded: "$70,000.00",
    percentage: "82%",
    progressBarClass:
      "bg-blue-700 box-border basis-[0%] grow h-full outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] translate-x-[-17.6%] w-full",
  },
] as const
