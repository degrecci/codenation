import React from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Contacts = () => (
  <div>
    <Card.Header>
      <Card.Title>Contatos</Card.Title>
      <Button color="#6FB0FC">Adicionar contato</Button>
    </Card.Header>
    <Card.Body>Você não tem contatos cadastrados</Card.Body>
  </div>
);

export default Contacts;
