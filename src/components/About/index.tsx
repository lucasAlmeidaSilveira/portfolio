import { Contact, Container } from './style';
import { BoxContact } from './BoxContact';
import { FaHouseUser, FaInstagram, FaPhoneAlt, FaRegSmile } from 'react-icons/fa';
import { useContext } from 'react';
import { UserDataContext } from '../../contexts/userData';

export function About() {
  const { userData } = useContext(UserDataContext);

  return (
    <Container id="about">
      <h2>Sobre mim</h2>
      <p>{userData.bio}</p>

      <Contact>
        <BoxContact icon={<FaRegSmile />} title={'Meu nome'} description={userData.name}/>
        <BoxContact icon={<FaHouseUser />} title={'Website'} url={userData.blog}/>
        <BoxContact icon={<FaInstagram />} title={'Instagram'} url={`https://www.instagram.com/${userData.instagram}`} description={`@${userData.instagram}`}/>
        <BoxContact icon={<FaPhoneAlt />} title={'Telefone'} description={`${userData.phone}`}/>
      </Contact>

    </Container>
  );
}
