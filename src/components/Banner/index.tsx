import { useContext } from 'react';
import heroImg from '../../assets/hero.svg';
import { UserDataContext } from '../../contexts/userData';
import { Container, ContentBanner } from './style';

export function Banner() {
  const { userData } = useContext(UserDataContext);
  console.log(userData)

  const name = userData?.name.split(' ').slice(0, 2).join(' ');

  return (
    <Container>
      <ContentBanner>
        <p>
          Olá, eu sou o<br />
          <span>{name}!</span> 😁
        </p>
        <p>Desenvolvedor Web Front-End</p>
        <button>Download CV</button>
        <button>Entrar em contato</button>
      </ContentBanner>
      <img className='d-none' src={userData?.avatar_url} alt='Hero' />
    </Container>
  );
}
