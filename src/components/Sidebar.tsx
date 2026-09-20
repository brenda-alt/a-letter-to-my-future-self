import { SECTIONS, scrollToSection, type SectionId } from '../content/sections'

type SidebarProps = {
  activeId: SectionId
  open: boolean
  onClose: () => void
  onOpen: () => void
}

export function Sidebar({ activeId, open, onClose, onOpen }: SidebarProps) {
  function go(id: string) {
    scrollToSection(id)
    onClose()
  }

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 z-50 rounded-lg border border-line bg-navy/80 px-3 py-2 text-xs tracking-[0.2em] text-paper uppercase lg:hidden"
        onClick={open ? onClose : onOpen}
        aria-expanded={open}
        aria-controls="presentation-nav"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-void/60 lg:hidden"
          aria-label="Close menu"
          onClick={onClose}
        />
      )}

      <aside
        id="presentation-nav"
        className={`glass fixed top-0 left-0 z-40 flex h-svh w-[min(22.5rem,88vw)] flex-col px-7 py-8 transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <p className="mb-10 max-w-[14rem] text-sm leading-relaxed font-medium tracking-[0.22em] text-ice uppercase">
          A Letter to My Future Self
        </p>

        <nav aria-label="Presentation sections" className="flex flex-1 flex-col gap-3 overflow-y-auto">
          {SECTIONS.map((section) => {
            const isActive = section.id === activeId
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => go(section.id)}
                className={`group relative rounded-lg px-5 py-5 text-left transition-colors ${
                  isActive ? 'bg-deep/70 text-paper' : 'text-mist/75 hover:bg-deep/40 hover:text-paper'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute top-3 bottom-3 left-0 w-0.5 rounded-full bg-ice shadow-[0_0_12px_rgb(158_192_214/0.45)]"
                    aria-hidden
                  />
                )}
                <span className="block text-base tracking-[0.22em] text-ice/80">
                  {section.number}
                </span>
                <span className="mt-1.5 block text-lg leading-snug">{section.label}</span>
              </button>
            )
          })}
        </nav>

        <p className="mt-8 text-xs tracking-[0.18em] text-mist/40 uppercase">
          A journey through six chapters
        </p>
      </aside>
    </>
  )
}
