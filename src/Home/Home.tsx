import HeroSection from './components/HeroSection/HeroSection'
import WebStylesSection from './components/WebStylesSection/WebStylesSection'
import ShowcaseSection from './components/ShowcaseSection/ShowcaseSection'
import AboutSection from './components/AboutSection/AboutSection'
import ContactSection from './components/ContactSection/ContactSection'

import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <HeroSection />
      <WebStylesSection />
      <ShowcaseSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}