export interface Partner {
  readonly id: string;
  readonly alt: string;
  readonly src: string;
}

export const partnersData = {
  logos: [
    { id: 'polkadot', alt: 'Polkadot logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/32.png" },
    { id: 'algorand', alt: 'Algorand logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/34.png" },
    { id: 'movement', alt: 'Movement logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/31.png" },
    { id: 'ethereum', alt: 'Ethereum logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/35.png" },
    { id: 'sui', alt: 'Sui logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/33.png" },
    { id: 'cardano', alt: 'Cardano logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/37.png" },
    { id: 'avail', alt: 'Avail logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/36.png" },
    { id: 'vbi', alt: 'VBI logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/54.png" },
    { id: 'near', alt: 'Near logo', src: "https://c.animaapp.com/me27583zvcNERL/assets/39.png" }
  ] as const
} as const;
