import React, { useState } from 'react';
import { string } from 'yup'; // for only what you need

import { Container, Heading, Section } from 'react-bulma-components';

function App() {
  const [username, setUsername] = useState('');
  const schema = string()
    .required('Campo requerido')
    .max(39, 'O máximo de caracteres é 39');

  const handleSubmit = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      console.log('submit', username);
      console.log('response', await schema.isValid(username));
    }
  };

  return (
    <Section>
      <Container>
        <Heading size={5} renderAs="p">
          Github
        </Heading>
        <Heading subtitle renderAs="p">
          Veja os respositórios do seu usuário favorito!
        </Heading>
        <form>
          <input
            className="input"
            type="text"
            name="user"
            placeholder="Digite um usuário do github"
            value={username}
            onChange={event => setUsername(event.target.value)}
            onKeyPress={handleSubmit}
          />
        </form>
      </Container>
    </Section>
  );
}

export default App;
