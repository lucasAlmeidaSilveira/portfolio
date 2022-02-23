import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Container, DivRow } from './style';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';
import { useData } from '../../hooks/useData';

export function FormPortfolio() {
  const history = useHistory();
  const [name, setName] = useState('github');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');

  const {userData} = useData(name)

  function handleCreatePortfolio(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === '') {
      return;
    }

    history.push(`/portfolio${name}`);
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
          <img src={userData?.avatar_url} alt={name} />
        </DivRow>
        <Button type='submit'>Gerar Portfolio</Button>
      </form>
    </Container>
  );
}
