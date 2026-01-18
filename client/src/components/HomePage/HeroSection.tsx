import hero from '../../assets/Hero.svg'
import reading from '../../assets/reading.svg'

function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center">
        
        <div className="relative w-full max-w-md aspect-square">
          <img
            src={hero}
            alt="Documents"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative w-full max-w-xs aspect-square">
          <img
            src={reading}
            alt="Reading"
            className="h-full w-full object-contain opacity-90"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection
