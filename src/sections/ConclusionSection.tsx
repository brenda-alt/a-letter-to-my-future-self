import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'

const stars = [
  { top: '12%', left: '18%', delay: '0s' },
  { top: '22%', left: '72%', delay: '1.4s' },
  { top: '18%', left: '48%', delay: '2.2s' },
  { top: '8%', left: '86%', delay: '0.6s' },
  { top: '30%', left: '8%', delay: '3s' },
  { top: '14%', left: '32%', delay: '1.8s' },
]

export function ConclusionSection() {
  return (
    <PresentationSection id="conclusion" className="relative overflow-hidden">
      {stars.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="star pointer-events-none absolute h-1 w-1 rounded-full bg-paper"
          style={{ top: star.top, left: star.left, animationDelay: star.delay }}
          aria-hidden
        />
      ))}

      <div className="horizon-glow pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(ellipse_at_center,rgb(110_160_196/0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs tracking-[0.32em] text-ice/80 uppercase">06  ·  Closing</p>
        <h2 className="font-display text-3xl text-paper sm:text-5xl">The Future Is Unknown</h2>
        <p className="mt-8 text-lg text-ice sm:text-xl">
          The future is unknown, but that’s what makes it exciting.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-mist/85 sm:text-base">
          I don’t know exactly what my future will look like. Some things will probably happen
          differently from what I imagine today.
          <br />
          <br />
          But I know that I am going to keep learning, keep working for my goals, and keep exploring
          the world.
        </p>

        <div className="mx-auto mt-10 max-w-sm">
          <ImagePlaceholder
            src="public/images/conclusion.jpg"
            alt="Closing image for the journey"
            caption="A closing photo"
            aspect="16 / 9"
          />
        </div>

        <p className="font-display mt-10 text-lg text-paper sm:text-xl">
          Thank you for joining me on this journey.
        </p>
      </div>

      <div className="relative">
        <NavigationButtons previous={{ id: 'goals', label: 'Goals' }} />
      </div>
    </PresentationSection>
  )
}
