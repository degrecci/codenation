import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Button, { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input/Input";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function CreateContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const createContact = () => {
    dispatch({ type: "CREATE_CONTACT", payload: { name, email } });
  };

  return (
    <div>
      <Card.Header>
        <Card.Title>Novo contato</Card.Title>
        <ButtonContainer>
          <ButtonLink to="/">Voltar</ButtonLink>
          <Button onClick={createContact} bgColor="#57DA64" color="#fff">
            Criar contato
          </Button>
        </ButtonContainer>
      </Card.Header>
      <Card.Body>
        <Input
          label="Nome"
          type="text"
          name="name"
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </Card.Body>
    </div>
  );
}

export default CreateContact;
