import React, { useState } from 'react';
import { string } from 'yup';
import { Container, Heading, Section } from 'react-bulma-components';
import { getRepositories } from './services';

function App() {
  const [username, setUsername] = useState('');
  const [hasError, setHasError] = useState(false);
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
        const repositories = await getRepositories({ username });
        console.log(repositories);
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
        <form>
          <div className="field">
            <div className="control">
              <input
                className={`input${hasError ? ' is-danger' : ''}`}
                type="text"
                name="user"
                placeholder="Digite um usuário do github"
                value={username}
                onChange={handleUsername}
                onKeyPress={handleSubmit}
              />
            </div>
          </div>
        </form>
      </Container>
    </Section>
  );
}

export default App;