import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'
import { SectionHeader } from '../components/SectionHeader'


const actions = [
  {
    number: '01',
    title: 'Learn',
    points: ['English', 'Programming', 'New technologies'],
  },
  {
    number: '02',
    title: 'Work',
    points: ['Gain experience', 'Develop skills', 'Build projects'],
  },
  {
    number: '03',
    title: 'Explore',
    points: ['Travel', 'Discover cultures', 'Try new experiences'],
  },
]

const path = ['Learn', 'Work', 'Grow', 'Explore']

export function GoalsSection() {
  return (
    <PresentationSection id="goals">
      <SectionHeader number="05" title="What I'll Do to Achieve My Goals" kicker="Action" />

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <ImagePlaceholder
          src="public/images/goals.jpg"
          alt="Optional image about taking action"
          caption="Optional photo — action, study, or work"
          aspect="4 / 5"
        />

        <div>
          <ol className="grid gap-4 sm:grid-cols-3">
            {actions.map((action) => (
              <li key={action.title} className="card rounded-2xl p-5">
                <p className="text-[10px] tracking-[0.22em] text-ice/80 uppercase">
                  {action.number}
                </p>
                <h3 className="mt-2 text-lg text-paper">{action.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-mist/85">
                  {action.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-sm tracking-wide text-ice">
            {path.map((step, index) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-line px-3 py-1">{step}</span>
                {index < path.length - 1 && (
                  <span className="h-px w-6 bg-ice/35 sm:w-8" aria-hidden />
                )}
              </span>
            ))}
          </div>

          <blockquote className="glow-soft mt-10 rounded-2xl border border-line bg-ink/70 px-6 py-5">
            <p className="font-display text-xl leading-snug text-paper sm:text-2xl">
              My future will not happen automatically. I am going to work for it.
            </p>
          </blockquote>
        </div>
      </div>

      <NavigationButtons
        previous={{ id: 'lifestyle', label: 'My Future Lifestyle' }}
        next={{ id: 'conclusion', label: 'Conclusion' }}
      />
    </PresentationSection>
  )
}
