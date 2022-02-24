import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Container, DivRow } from './style';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import { useDataProfile } from '../../hooks/useDataProfile';
import Cookies from 'js-cookie';

export function FormPortfolio() {
  const history = useHistory();
  const [name, setName] = useState('github');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useDataProfile(name);

  function handleCreatePortfolio(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === '') {
      return;
    }
    Cookies.set('userID', name);
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
            />
            <InputLabel
              label='Instagram'
              type='tel'
              placeholder='lucas_asilveira'
              setValue={setInstagram}
            />
            <InputLabel
              label='Celular'
              type='phone'
              placeholder='(11) 9999-9999'
              setValue={setPhone}
            />
          </div>
          <img src={data?.avatar_url} alt={name} />
        </DivRow>
        <Button type='submit'>Gerar Portfolio</Button>
      </form>
    </Container>
  );
}
