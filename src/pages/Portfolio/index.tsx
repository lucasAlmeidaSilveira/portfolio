import { About } from '../../components/About';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Projects } from '../../components/Projects';
import { Services } from '../../components/Services';
import { Skills } from '../../components/Skills';

export function Portfolio() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Footer />
    </>
  );
}
