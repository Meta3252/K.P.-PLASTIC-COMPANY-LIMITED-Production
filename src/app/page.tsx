import HeroSlider from './components/HeroSlider';
import AboutCompany from './components/AboutCompany';
import Services from './components/Services';
import LogoScroller from "./components/LogoScroller";
import ExecutiveVideo from './components/ExecutiveVideo';
import NewProductShowcase from './components/NewProductShowcase';

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSlider />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <AboutCompany />
      </section>
      <section id="executive-video">
        <ExecutiveVideo variant="home" />
      </section>
      <NewProductShowcase />
      {/* <section id="projects">
        <LogoScroller />
      </section> */}
    </>
  );
}

