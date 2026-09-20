import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'
import { SectionHeader } from '../components/SectionHeader'
import { presentationImages } from '../content/images'

const tags = ['Beijing', 'Shanghai', 'Culture', 'Food', 'Technology', 'Tradition']

export function DreamTripSection() {
  return (
    <PresentationSection id="dream-trip" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgb(158 192 214 / 0.35) 1px, transparent 1px), linear-gradient(90deg, rgb(158 192 214 / 0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative">
        <SectionHeader number="03" title="My Dream Trip" kicker="Travel" />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ImagePlaceholder
            src="public/images/shanghai.jpg"
            alt="China — Beijing, Shanghai, temples, food, and streets"
            caption="China, Beijing, Shanghai, temples, food, streets"
            aspect="4 / 5"
          />

          <div className="fade-up-delay">
            <p className="font-display text-4xl text-paper">China</p>
            <p className="mt-5 max-w-md leading-relaxed text-mist/90">
            I am going to visit Beijing and Shanghai. I will explore the cities, 
            try traditional Chinese food, and visit the Great Wall of China.
            </p>
            <p className="mt-3 text-sm text-ice/90">I am going to try new experiences.</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-3 py-1.5 text-xs tracking-[0.14em] text-ice uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <NavigationButtons
          previous={{ id: 'career', label: 'My Future Career' }}
          next={{ id: 'lifestyle', label: 'My Future Lifestyle' }}
        />
      </div>
    </PresentationSection>
  )
}
