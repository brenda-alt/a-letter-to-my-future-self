import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { NavigationButtons } from '../components/NavigationButtons'
import { PresentationSection } from '../components/PresentationSection'
import { scrollToSection } from '../content/sections'

export function IntroductionSection() {
  return (
    <PresentationSection id="introduction">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
        <ImagePlaceholder
          src="images/letter.jpg"
          alt="Opening portrait for the presentation"
          caption="Your opening photo"
          aspect="4 / 5"
          className="max-w-lg lg:max-w-none"
        />

        <div>
          <p className="fade-up mb-4 text-xs font-medium tracking-[0.32em] text-ice/85 uppercase">
            01  ·  Painel
          </p>
          <h1 className="font-display fade-up text-5xl leading-[1.08] font-medium text-paper sm:text-6xl lg:text-[4.25rem]">
            A Letter to My Future Self
          </h1>
          <p className="fade-up-delay mt-6 text-xl text-ice sm:text-2xl">Dreams, Career & Travel</p>
          <p className="fade-up-delay mt-8 max-w-md text-lg leading-relaxed text-mist/90">
            The future is unknown, but that’s what makes it exciting.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection('career')}
            className="fade-up-delay mt-12 text-sm tracking-[0.18em] text-ice/90 uppercase transition-colors hover:text-paper"
          >
            Start the journey →
          </button>
        </div>
      </div>

      <NavigationButtons next={{ id: 'career', label: 'My Future Career' }} />
    </PresentationSection>
  )
}
