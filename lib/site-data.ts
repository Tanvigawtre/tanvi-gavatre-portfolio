export const profile = {
  name: 'Tanvi Gavatre',
  role: 'BCA Student · Developer',
  intro:
    'I\u2019m a developer who enjoys understanding how things work, then building them to work better.',
  about: [
    'I\u2019m currently pursuing my Bachelor\u2019s of Computer Applications at JSPM, S. Rajarshi Shahu College of Engineering, Pune.',
    'My focus sits at the intersection of clean web experiences, practical software development, and cybersecurity fundamentals.',
  ],
  portrait: '/images/tanvi-portrait.jpeg',
  details: [
    
    { label: 'Education', value: 'BCA · 3rd Year' },
    { label: 'CGPA', value: '9.2' },
  ],
}

export const links = {
  github: 'https://github.com/Tanvigawtre',
  linkedin: 'https://www.linkedin.com/in/tanvi-gawatre/',
  email: 'gawatretanvi@gmail.com',
  roadintel: 'https://roadintel.vercel.app/',
  roadintelRepo: 'https://github.com/Tanvigawtre',
  // Set to the resume file path (e.g. '/tanvi-gavatre-resume.pdf') once available.
  resume: null as string | null,
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'project', label: 'Project' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Web', skills: ['HTML / CSS', 'JavaScript'] },
  { title: 'Programming', skills: ['Java', 'Python', 'C / C++'] },
  { title: 'Database', skills: ['SQL'] },
  { title: 'Systems & Tools', skills: ['Networking', 'Git / GitHub'] },
]

export const project = {
  title: 'RoadIntel',
  subtitle: 'Smart Road Infrastructure Monitoring Platform',
  core: 'RoadIntel is an AI-powered RoadWatch platform for road quality monitoring, citizen reporting, AI-assisted road defect verification, road risk prioritization, repair tracking, contractor accountability, and public spending transparency.',
  oneLine:
    'RoadIntel converts citizen road complaints into AI-verified, geo-tagged, authority-assigned, publicly trackable repair actions with spending visibility and before/after repair proof.',
  alignment: [
    'Road quality monitoring',
    'Citizen issue reporting',
    'Public spending tracking',
    'Responsible authority routing',
    'Repair progress tracking',
    'Contractor accountability',
    'Before/after repair proof',
    'Transparent road infrastructure governance',
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
}

export type Certificate = {
  id: string
  title: string
  issuer: string
  image: string | null
  alt: string
}

export const achievement = {
  title: 'Find the Bug 4.0',
  badges: ['3rd Place', 'Second Runner-Up'],
  event: 'E-Summit \u201926',
  venue: 'IIT Dharwad',
  image: '/images/find-the-bug-iit-dharwad.jpeg',
  alt: 'Certificate of Appreciation from E-Summit \u201926, IIT Dharwad, presented to Tanvi Gavatre for placing third in Find the Bug 4.0',
}

export const certificates: Certificate[] = [
  {
    id: 'iste',
    title: 'ISTE Certificate',
    issuer: 'Indian Society for Technical Education',
    image: '/images/iste-certificate.jpeg',
    alt: 'ISTE certificate awarded to Tanvi Gavatre',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Certificate',
    issuer: 'Certificate to be added',
    // Replace with '/images/cyber-security-certificate.jpeg' once provided.
    image: null,
    alt: 'Cyber Security certificate awarded to Tanvi Gavatre',
  },
]
