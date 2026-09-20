import type { ReactNode } from 'react'

type PresentationSectionProps = {
  id: string
  children: ReactNode
  className?: string
}

export function PresentationSection({
  id,
  children,
  className = '',
}: PresentationSectionProps) {
  return (
    <section
      id={id}
      className={`flex min-h-svh scroll-mt-0 items-center px-5 py-16 sm:px-8 lg:px-14 lg:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
