export const SECTIONS = [
  { id: 'introduction', number: '01', label: 'Painel' },
  { id: 'career', number: '02', label: 'My Future Career' },
  { id: 'dream-trip', number: '03', label: 'My Dream Trip' },
  { id: 'lifestyle', number: '04', label: 'My Future Lifestyle' },
  { id: 'goals', number: '05', label: "What I'll Do to Achieve My Goals" },
  { id: 'conclusion', number: '06', label: 'Conclusion' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
