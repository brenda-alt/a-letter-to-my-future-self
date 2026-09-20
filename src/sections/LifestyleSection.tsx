import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'
import { SectionHeader } from '../components/SectionHeader'
import { presentationImages } from '../content/images'
import { useInView } from '../hooks/useInView'

const values = ['Freedom', 'Independence', 'Travel', 'Learning', 'Balance']

export function LifestyleSection() {
  const { ref, inView } = useInView<HTMLUListElement>()

  return (
    <PresentationSection id="lifestyle">
      <SectionHeader number="04" title="My Future Lifestyle" kicker="Life" />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4r6EaP-y06m7-6pbPLK2zx8EGtkbvirzftRED5Nvfphjr1FDt8mzaxWY&s=10"
          alt="A calm image of a future lifestyle"
          caption="A photo of the life you want"
          aspect="5 / 4"
        />

        <div>
          <p className="fade-up-delay max-w-md text-lg leading-relaxed text-paper/95">
            I will choose how I live — with freedom, balance, and new experiences.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/80">
            A good future is not only about money. It is about independence.
          </p>

          <ul ref={ref} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {values.map((value, index) => (
              <li
                key={value}
                className={`card rounded-xl px-4 py-4 text-sm text-ice ${inView ? 'fade-up' : 'opacity-0'}`}
                style={{ animationDelay: inView ? `${index * 80}ms` : undefined }}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <NavigationButtons
        previous={{ id: 'dream-trip', label: 'My Dream Trip' }}
        next={{ id: 'goals', label: 'Goals' }}
      />
    </PresentationSection>
  )
}
