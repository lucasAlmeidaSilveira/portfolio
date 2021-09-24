import heroImg from '../../assets/hero.svg';
import { Container, ContentBanner } from './style';

export function Banner() {
  return (
    <Container>
      <ContentBanner>
        <p>
          Olá, eu sou o<br />
          <span>Lucas!</span> 😁
        </p>
        <p>Desenvolvedor Web Front-End</p>
        <button>Download CV</button>
        <button>Entrar em contato</button>
      </ContentBanner>
      <img className='d-none' src={heroImg} alt='Hero' />
    </Container>
  );
}
