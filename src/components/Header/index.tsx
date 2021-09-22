import { Container } from "./style";

export function Header(){
  return (
    <Container>
      <a className='logo' href='/'><p>Portfólio</p></a>

      <nav>
        <ul>
          <li><a href='#about'>Sobre mim</a></li>
          <li><a href='#projects'>Projetos</a></li>
          <li><a href='#services'>Serviços</a></li>
          <li><a href='#skills'>Minhas skills</a></li>
        </ul>
      </nav>
    </Container>
  )
}