export type Project = {
  index: string
  meta: string
  title: string
  disciplines: string
  href: string
}

export const projects: Project[] = [
  {
    index: '02',
    meta: '02 / ICIS · UI/UX CASE STUDY',
    title: 'Lead UI designer shaping commodity intelligence tools.',
    disciplines: 'UI/UX design / Data products / Currently at ICIS',
    href: '#work',
  },
  {
    index: '03',
    meta: '03 / SBK – SPORTSBOOK · UI/UX DESIGN',
    title: 'Modernized betting flows and improved discovery of community features.',
    disciplines:
      'Research / IA / Prototyping / Testing / Visual design / Design system development',
    href: '#work',
  },
]

export const principles = [
  {
    number: '01',
    title: 'Start with the question.',
    body: 'Understand the context before the interface. Map assumptions, listen carefully, and find the problem worth solving.',
  },
  {
    number: '02',
    title: 'Make the complex clear.',
    body: 'Turn messy journeys into useful structure. Explore alternatives, prototype the important moments, and sweat the small details.',
  },
  {
    number: '03',
    title: 'Leave room to learn.',
    body: 'Design is a hypothesis, not a finish line. Test with people, make trade-offs visible, and keep improving what matters.',
  },
]
