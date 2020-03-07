import React from "react";

import { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";
import { ReactComponent as PlusIcon } from "../../assets/icons/add.svg";

const Contacts = () => (
  <div>
    <Card.Header>
      <Card.Title>Contatos</Card.Title>
      <ButtonLink bgColor="#6FB0FC" color="#fff" to="/create">
        Adicionar contato
      </ButtonLink>
    </Card.Header>
    <Card.Body>Você não tem contatos cadastrados</Card.Body>
  </div>
);

export default Contacts;
