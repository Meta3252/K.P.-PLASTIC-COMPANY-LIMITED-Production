import HeroSlider from './components/HeroSlider';
import AboutCompany from './components/AboutCompany';
import Services from './components/Services';
import LogoScroller from "./components/LogoScroller";

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSlider />
      </section>
      <section id="about">
        <AboutCompany />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <LogoScroller />
      </section>
    </>
  );
}

