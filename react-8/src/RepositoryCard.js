import React from 'react';
import { Card, Media, Image, Content, Heading } from 'react-bulma-components';

export default function RepositoryCard({ repository }) {
  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src={repository.owner.avatar_url} />
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
  );
}
