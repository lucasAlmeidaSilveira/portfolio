import { useContext } from 'react';
import { UserDataContext } from '../../contexts/userData';
import { Container, ContentBanner } from './style';

export function Banner() {
  const { userData } = useContext(UserDataContext);

  const name = userData?.data?.name.split(' ').slice(0, 2).join(' ');

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
      <img className='d-none' src={userData?.data?.avatar_url} alt={name} />
    </Container>
  );
}
