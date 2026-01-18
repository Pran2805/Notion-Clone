import Heading from "../components/HomePage/Heading"
import HeroSection from "../components/HomePage/HeroSection"
import Footer from "../components/HomePage/Footer"

function HomePage() {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 min-h-[85vh]">

                <Heading />
                <HeroSection />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
