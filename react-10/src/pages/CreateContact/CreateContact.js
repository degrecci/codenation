import React from "react";
import ButtonLink from "../../components/ButtonLink";
import Card from "../../components/Card";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function CreateContact() {
  return (
    <div>
      <Card.Header>
        <Card.Title>Novo contato</Card.Title>
        <ButtonContainer>
          <ButtonLink to="/">Voltar</ButtonLink>
          <ButtonLink to="/" bgColor="#57DA64" color="#fff">
            Criar contato
          </ButtonLink>
        </ButtonContainer>
      </Card.Header>
      <Card.Body>Você não tem contatos cadastrados</Card.Body>
    </div>
  );
}

export default CreateContact;
