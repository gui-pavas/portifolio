import Header from "./components/header";
import AboutSection from "./components/sections/about-section";
import ContactSection from "./components/sections/contact-section";
import HeroSection from "./components/sections/hero-section";
import ExperienceSection from "./components/sections/experience-section";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050816]">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}
