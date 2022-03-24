import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import Cookies from 'js-cookie';
import { useDataProfile } from '../../hooks/useDataProfile';
import { Container, DivRow } from './style';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import { useDebounce } from 'use-debounce/lib';

export function FormPortfolio() {
  const history = useHistory();
  const [name, setName] = useState('lucasAlmeidaSilveira');
  const [occupation, setOccupation] = useState('Desenvolvedor Front-End');
  const [instagram, setInstagram] = useState('lucas_asilveira');
  const [phone, setPhone] = useState('(11) 94493-5268');
  const [valueDebounced] = useDebounce(name, 500)

  const {userData} = useDataProfile(valueDebounced);

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
