import { useParams } from 'react-router-dom';
import { About } from '../../components/About';
import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Projects } from '../../components/Projects';
import { Services } from '../../components/Services';
import { Skills } from '../../components/Skills';

interface ParamsProps {
  name: string;
}

export function Portfolio() {
  let { name } = useParams<ParamsProps>();

  console.log('params',name);
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
