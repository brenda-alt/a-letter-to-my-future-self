import { scrollToSection } from '../content/sections'

type NavTarget = {
  id: string
  label: string
}

type NavigationButtonsProps = {
  previous?: NavTarget
  next?: NavTarget
}

export function NavigationButtons({ previous, next }: NavigationButtonsProps) {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
      {previous ? (
        <button
          type="button"
          onClick={() => scrollToSection(previous.id)}
          className="text-sm tracking-wide text-mist/80 transition-colors hover:text-paper"
        >
          ← {previous.label}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button
          type="button"
          onClick={() => scrollToSection(next.id)}
          className="text-sm tracking-wide text-ice transition-colors hover:text-paper"
        >
          {next.label} →
        </button>
      ) : (
        <span />
      )}
    </div>
  )
}
