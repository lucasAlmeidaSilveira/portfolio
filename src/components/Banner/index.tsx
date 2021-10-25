import { useEffect, useState } from 'react';
import heroImg from '../../assets/hero.svg';
import { UserDataProps } from '../../types';
import { Container, ContentBanner } from './style';

export function Banner() {
  const [ userData, setUserData ] = useState<UserDataProps>();

  useEffect(() => {
    fetch('https://api.github.com/users/lucasAlmeidaSilveira')
      .then(response => response.json())
      .then(data => setUserData(data));
    // eslint-disable-next-line
  }, []);

  const nome = userData?.name.split(' ').slice(0, 2).join(' ');
  console.log(nome)

  return (
    <Container>
      <ContentBanner>
        <p>
          Olá, eu sou o<br />
          <span>{nome}!</span> 😁
        </p>
        <p>Desenvolvedor Web Front-End</p>
        <button>Download CV</button>
        <button>Entrar em contato</button>
      </ContentBanner>
      <img className='d-none' src={heroImg} alt='Hero' />
    </Container>
  );
}
