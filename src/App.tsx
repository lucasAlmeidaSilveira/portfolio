import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Footer />
      <GlobalStyle />
    </>
  );
}

