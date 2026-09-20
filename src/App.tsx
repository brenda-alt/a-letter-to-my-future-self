import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { SECTIONS, type SectionId } from './content/sections'
import { CareerSection } from './sections/CareerSection'
import { ConclusionSection } from './sections/ConclusionSection'
import { DreamTripSection } from './sections/DreamTripSection'
import { GoalsSection } from './sections/GoalsSection'
import { IntroductionSection } from './sections/IntroductionSection'
import { LifestyleSection } from './sections/LifestyleSection'

function App() {
  const [activeId, setActiveId] = useState<SectionId>('introduction')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id
        if (nextId && SECTIONS.some((section) => section.id === nextId)) {
          setActiveId(nextId as SectionId)
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '-8% 0px -42% 0px',
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-stage min-h-svh">
      <Sidebar
        activeId={activeId}
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      />

      <main className="lg:pl-[22.5rem]">
        <IntroductionSection />
        <CareerSection />
        <DreamTripSection />
        <LifestyleSection />
        <GoalsSection />
        <ConclusionSection />
      </main>
    </div>
  )
}

export default App
