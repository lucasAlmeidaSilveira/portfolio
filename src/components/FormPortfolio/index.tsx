import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Container } from './style';
import { Button } from '../Button';
import { InputLabel } from '../InputLabel';

export function FormPortfolio() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [phone, setPhone] = useState('');

  function handleCreatePortfolio(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === '') {
      return;
    }

    history.push(`/portfolio${name}`);
  }

  console.log(name, instagram, phone)

  return (
    <Container>
      <h1>
        login<span>Portfólio</span>
      </h1>
      <form onSubmit={handleCreatePortfolio}>
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
        <Button type='submit'>Gerar Portfolio</Button>
      </form>
    </Container>
  );
}
