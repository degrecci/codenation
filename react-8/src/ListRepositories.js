import React from 'react';
import {
  Card,
  Media,
  Image,
  Content,
  Heading,
  Columns
} from 'react-bulma-components';

export default function ListRepositories({ repositories }) {
  return (
    <Columns style={{ marginTop: '10px' }}>
      {repositories.map(repository => (
        <Columns.Column size={4} key={repository.id} data-test="repositorio">
          <Card>
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image
                    size={64}
                    alt="64x64"
                    src={repository.owner.avatar_url}
                  />
                </Media.Item>
                <Media.Item>
                  <Heading size={4}>{repository.name}</Heading>
                  <Heading subtitle size={6}>
                    {repository.owner.login}
                  </Heading>
                </Media.Item>
              </Media>
              <Content>{repository.description}</Content>
            </Card.Content>
          </Card>
        </Columns.Column>
      ))}
    </Columns>
  );
}
