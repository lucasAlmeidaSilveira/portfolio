import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useDataProfile } from '../../hooks/useDataProfile';
import { Container, DivRow } from './style';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';

export function FormPortfolio() {
  const history = useHistory();
  const [name, setName] = useState('github');
  const [occupation, setOccupation] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');

  const {userData} = useDataProfile(name);

  function handleCreatePortfolio(event: FormEvent) {
    if (name.trim() === '') {
      return;
    }
    Cookies.set('userID', name);
    Cookies.set('occupation', occupation);
    Cookies.set('instagram', instagram);
    Cookies.set('phone', phone);

    history.push('/portfolio');
  }

  return (
    <Container>
      <h1>
        login<span>Portfólio</span>
      </h1>
      <form onSubmit={handleCreatePortfolio}>
        <DivRow>
          <div>
            <InputLabel
              label='ID do Github'
              type='text'
              placeholder='lucasAlmeidaSilveira'
              setValue={setName}
              value={name}
            />
            <InputLabel
              label='Ocupação/Profissão'
              type='text'
              placeholder='Desenvolvedor Front-End'
              setValue={setOccupation}
              value={occupation}
            />
            <InputLabel
              label='Instagram'
              type='tel'
              placeholder='lucas_asilveira'
              setValue={setInstagram}
              value={instagram}
            />
            <InputLabel
              label='Celular'
              type='phone'
              placeholder='(11) 9999-9999'
              setValue={setPhone}
              value={phone}
            />
          </div>
          <img src={userData?.avatar_url} alt={name} />
        </DivRow>
        <Button type='submit'>Gerar Portfolio</Button>
      </form>
    </Container>
  );
}
