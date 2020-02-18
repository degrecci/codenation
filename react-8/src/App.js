import React, { useState } from 'react';
import { string } from 'yup';
import { Container, Heading, Section, Loader } from 'react-bulma-components';
import { getRepositories } from './services';
import Form from './Form';
import ListRepositories from './ListRepositories';

function App() {
  const [username, setUsername] = useState('');
  const [hasError, setHasError] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const alphanumericRegex = /^[a-zA-Z0-9-]*$/;

  const schema = string()
    .required('Campo requerido')
    .max(39, 'O máximo de caracteres é 39')
    .matches(alphanumericRegex);

  const handleUsername = async event => {
    setUsername(event.target.value);
  };

  const handleSubmit = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      const isValidUsername = await schema.isValid(username);
      setHasError(!isValidUsername);

      if (isValidUsername) {
        setIsLoading(true);
        const repositories = await getRepositories({ username });
        setRepositories(repositories);
        setIsLoading(false);
      }
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
        <Form
          hasError={hasError}
          username={username}
          handleUsername={handleUsername}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <ListRepositories repositories={repositories} />
      </Container>
    </Section>
  );
}

export default App;
