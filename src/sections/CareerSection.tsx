import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'
import { SectionHeader } from '../components/SectionHeader'

const ideas = ['Technology', 'Programming', 'Learning', 'Growth']

export function CareerSection() {
  return (
    <PresentationSection id="career">
      <SectionHeader number="02" title="My Future Career" kicker="Work" />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder
          src="images/front-end.jpg"
          alt="Visual for a future career in technology"
          caption="A photo about work or learning"
          aspect="5 / 4"
        />

        <div className="fade-up-delay">
          <p className="text-lg leading-relaxed text-paper/95">I am going to work in technology.</p>
          <p className="mt-4 max-w-md leading-relaxed text-mist/90">
            I will keep learning, writing code, and growing as a professional.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {ideas.map((idea) => (
              <li
                key={idea}
                className="card rounded-xl px-4 py-3 text-sm tracking-wide text-ice"
              >
                {idea}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <NavigationButtons
        previous={{ id: 'introduction', label: 'Painel' }}
        next={{ id: 'dream-trip', label: 'My Dream Trip' }}
      />
    </PresentationSection>
  )
}
