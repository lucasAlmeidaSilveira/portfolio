import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <GlobalStyle />
    </>
  );
}

