import React from 'react';

import { Container, Heading, Section } from 'react-bulma-components';

function App() {
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
          />
        </form>
      </Container>
    </Section>
  );
}

export default App;
