export const profile = {
  name: "Mohammad kazem farahbakhsh",
  initials: "MK",
  role: "software engineer",
  tagline: "I build fast, accessible interfaces that feel inevitable.",
  location: "Based in Lahijan, iran — working with teams worldwide",
  bio: [
    "I'm a software engineer , i like to contract to the people for be better in anything, get their knowledge and use it",
    "Lately I spend most of my time in React and TypeScript, building design systems and performance-critical web apps for startups and product teams. I like clean abstractions, strong typing, and shipping things that hold up under real-world use.",
  ],
  resumeUrl: "/Mohammadkazem_Farahbakhsh_Resume.pdf",
  email: "mohammadkazemfarahbakhsh5@gmail.com",
};
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export type SkillCategory = {
  category: string
  items: string[]
}
export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES2023)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS','shadcn','base ui', 'CSS Modules', 'Framer Motion', 'Radix UI'],
  },
  {
    category: 'Tooling',
    items: ['Vite'],
  },
  {
    category: 'Backend & Infra',
    items: ['Nextjs','prisma', 'PostgreSQL', 'Vercel', 'Docker'],
  },
]
export type Project = {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'Melodia',
    title: 'Melodia',
    description:
      'A clean and modern music app UI design focused on simplicity, smooth user experience, and visual harmony (im still working on it) .',
    image: '/LabelMelodia.svg',
    tech: ['Next.js', 'TypeScript', 'prisma','postgreSQL', 'React'],
    liveUrl: 'https://melodia-coral.vercel.app',
    githubUrl: 'https://github.com/Mohammadfarahbakhsh/melodia',
    featured: true,
  },
  {
    id: 'OstadBun',
    title: 'OstadBun',
    description:
      'A community-driven, open-source platform built on Clarity, designed for smarter professor selection and academic planning',
    image: '/ostadbun.png',
    tech: ['Next.js', 'shadcn', 'Tailwind CSS','React'],
    liveUrl: 'https://app.ostadbun.tech/',
    githubUrl: 'https://github.com/ostadbun/app',
    featured: true,
  },
  {
    id: 'admin-panel',
    title: 'admin-panel',
    description:
      'A modern, responsive admin dashboard built with React and Vite, featuring a clean and intuitive interface for managing and displaying application data.',
    image: '/logo.png',
    tech: ['vite','tailwind', 'React'],
    liveUrl: 'https://admin-panel-gold-six.vercel.app',
    githubUrl: 'https://github.com/Mohammadfarahbakhsh/admin-panel',
  },
  {
    id: 'select-game',
    title: 'two two match',
    description:
      'responsive and modern design , much enjoyable (im still working on it)',
    image: '/react_gamepad_orbit_art.png',
    tech: ['Node.js', 'TypeScript', 'express','React', 'ESBuild'],
    githubUrl: 'https://github.com/Mohammadfarahbakhsh',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Mohammadfarahbakhsh', icon: 'github' as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/farahbakhsh', icon: 'linkedin' as const },
  { label: 'X', href: 'https://x.com/mohammad_k68470', icon: 'twitter' as const },
  { label: 'mohammadkazemfarahbakhsh5@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohammadkazemfarahbakhsh5@gmail.com', icon: 'mail' as const },
]