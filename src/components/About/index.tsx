import { Contact, Container } from './style';
import { BoxContact } from './BoxContact';
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaRegSmile } from 'react-icons/fa';

export function About() {
  return (
    <Container id="about">
      <h2>Sobre mim</h2>
      <p>
      Sempre tive muita apreço com a área de tecnologia. Trabalhei como auxiliar de TI durante um ano num Colégio de educação religiosa. Hoje pretendo crescer profissionalmente, adquirir novas experiências, e fazer investimentos pessoais em minha carreira, me especializando na área de Desenvolvimento Front End, com as tecnologias de Javascript e suas libs como ReactJS.
      </p>

      <Contact>
        <BoxContact icon={<FaRegSmile />} title={'Meu nome'} description={'Lucas Almeida da Silveira'}/>
        <BoxContact icon={<FaEnvelope />} title={'E-mail'} description={'lucas.asilveira.sh@gmail.com'}/>
        <BoxContact icon={<FaInstagram />} title={'Instagram'} description={'@lucasasilveira'}/>
        <BoxContact icon={<FaPhoneAlt />} title={'Telefone'} description={'(11) 94493-5268'}/>
      </Contact>

    </Container>
  );
}
