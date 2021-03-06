import React, { useState } from 'react';
import { string } from 'yup';
import { Container, Heading, Section } from 'react-bulma-components';
import { getRepositories } from './services';
import Form from './Form';
import RepositoryCard from './RepositoryCard';

function App() {
  const [username, setUsername] = useState('');
  const [hasError, setHasError] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const alphanumericRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

  const schema = string()
    .required('Campo requerido')
    .max(39, 'O máximo de caracteres é 39')
    .matches(alphanumericRegex);

  const handleUsername = async event => {
    setUsername(event.target.value);
  };

  const listRepositories = async () => {
    const { repositories, status } = await getRepositories({ username });
    setResponse('');
    setRepositories(repositories);

    if (repositories.length < 1) {
      return setResponse('empty');
    }

    if (status === 404) {
      setResponse('404');
      return setRepositories([]);
    }
  };

  const handleSubmit = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      const isValidUsername = await schema.isValid(username);
      setHasError(!isValidUsername);

      if (isValidUsername) {
        setIsLoading(true);
        await listRepositories();
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
        {response === '404' && <div data-test="nao-encontrado">404</div>}
        {response === 'empty' && (
          <div data-test="sem-repositorios">Sem repositórios</div>
        )}
        {repositories.length > 0 &&
          repositories.map(repository => (
            <Container data-test="repositorio" key={repository.id}>
              <RepositoryCard repository={repository} />
            </Container>
          ))}
      </Container>
    </Section>
  );
}

export default App;
