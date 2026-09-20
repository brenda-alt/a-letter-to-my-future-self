type SectionHeaderProps = {
  number: string
  title: string
  kicker?: string
}

export function SectionHeader({ number, title, kicker }: SectionHeaderProps) {
  return (
    <header className="fade-up mb-8">
      <p className="mb-3 text-xs font-medium tracking-[0.32em] text-ice/80 uppercase">
        {number}
        {kicker ? `  ·  ${kicker}` : ''}
      </p>
      <h2 className="text-3xl font-light tracking-tight text-paper sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </header>
  )
}
