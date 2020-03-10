import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Button, { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input/Input";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

function EditContact({ history, match }) {
  const contactId = match.params.contato_id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts);

  const editContact = index => {
    dispatch({
      type: "EDIT_CONTACT",
      payload: { contact: { name, email }, index: Number(contactId) }
    });
    history.push("/");
  };

  useEffect(() => {
    const initialContact = contacts[contactId];

    if (!initialContact) {
      return history.push("/404");
    }

    setName(initialContact.name);
    setEmail(initialContact.email);
  }, [contactId, contacts, history]);

  return (
    <div>
      <Card.Header>
        <Card.Title>Novo contato</Card.Title>
        <ButtonContainer>
          <ButtonLink to="/">Cancelar</ButtonLink>
          <Button
            onClick={editContact}
            bgColor="#57DA64"
            color="#fff"
            dataTest="salvar"
          >
            Salvar contato
          </Button>
        </ButtonContainer>
      </Card.Header>
      <Card.Body>
        <Input
          label="Nome"
          type="text"
          name="name"
          dataTest="nome"
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          dataTest="email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </Card.Body>
    </div>
  );
}

export default EditContact;
