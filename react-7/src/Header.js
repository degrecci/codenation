import React from 'react';
import { Hero, Heading, Container } from 'react-bulma-components';

function Header() {
  return (
    <Hero color="info">
      <Hero.Body>
        <Container>
          <Heading>Você consegue reconhecer a capital destes países?</Heading>
          <Heading subtitle size={4}>
            Eu sei que você consegue!
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default Header;
