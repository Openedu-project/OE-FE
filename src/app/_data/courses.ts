export interface Course {
  readonly id: string;
  readonly title: string;
  readonly instructor: string;
  readonly students: string;
  readonly rating: string;
  readonly level?: string;
  readonly price?: string;
  readonly href: string;
  readonly image: string;
  readonly verified?: boolean;
}

export const coursesData = {
  featured: [
    {
      id: 'saga-hackathon',
      title: 'Cuộc thi Saga Vietnam Hackathon',
      instructor: 'VBI Academy',
      students: '174',
      rating: '5.0',
      href: "https://vbiacademy.edu.vn/courses/cuoc-thi-saga-vietnam-hackathon-45552",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/43.jpg"
    },
    {
      id: 'lisk-layer2',
      title: 'Lisk - Layer2 Zero Camp ',
      instructor: 'VBI Academy',
      students: '221',
      rating: '5.0',
      level: 'Beginner',
      href: "https://vbiacademy.edu.vn/courses/lisk-protocol-layer-zero-camp-88230",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/64.png"
    },
    {
      id: 'genai-training',
      title: 'Tập huấn Kỹ Năng GenAI Cho Cán Bộ Đoàn Hội',
      instructor: 'Phổ cập AI',
      students: '101966',
      rating: '5.0',
      href: "https://phocap.ai/courses/tap-huan-ky-nang-genai-cho-can-bo-doan-hoi-52175",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/42.png",
      verified: true
    },
    {
      id: 'web3-development',
      title: 'Phát triển Web3: Từ Blockchain Cơ Bản Đến Lập Trình Smart Contract Solidity Nâng Cao',
      instructor: 'VBI Academy',
      students: '816',
      rating: '5.0',
      href: "https://vbiacademy.edu.vn/courses/web3-development-with-solidity",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/80.png"
    },
    {
      id: 'open-campus',
      title: 'Master Open Campus ',
      instructor: 'VBI Academy',
      students: '6298',
      rating: '5.0',
      href: "https://vbiacademy.edu.vn/courses/opencampus-bootcamp-63382",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/46.png"
    },
    {
      id: 'saga-bootcamp',
      title: 'Saga Bootcamp 2025 ',
      instructor: 'VBI Academy',
      students: '967',
      rating: '5.0',
      level: 'Beginner',
      href: "https://vbiacademy.edu.vn/courses/saga-bootcamp-10231",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/75.png"
    },
    {
      id: 'web3-ai-contest',
      title: 'Khoá học hướng dẫn Cuộc thi Toàn quốc về ý tưởng công nghệ Web3 & AI',
      instructor: 'VBI Academy',
      students: '318',
      rating: '5.0',
      level: 'Beginner',
      href: "https://vbiacademy.edu.vn/courses/khoa-hoc-huong-dan-cuoc-thi-y-tuong-khoi-nghiep-whf-26925",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/86.png"
    },
    {
      id: 'blockchain-intro',
      title: 'Nhập môn lập trình Blockchain',
      instructor: 'OpenEdu',
      students: '8',
      rating: '5.0',
      level: 'Beginner',
      price: '680.000,00 ₫',
      href: '/vi/courses/blockchain-43679',
      image: "https://c.animaapp.com/me27583zvcNERL/assets/87.png"
    },
    {
      id: 'web3-ideathon',
      title: 'Cuộc thi Web3 Ideathon 2025',
      instructor: 'VBI Academy',
      students: '204',
      rating: '5.0',
      href: "https://vbiacademy.edu.vn/courses/cuoc-thi-web-ideathon-61179",
      image: "https://c.animaapp.com/me27583zvcNERL/assets/71.jpg",
      verified: true
    }
  ] as const
} as const;
