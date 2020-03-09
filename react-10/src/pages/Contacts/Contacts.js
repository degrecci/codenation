import React from "react";
import { useSelector } from "react-redux";

import Button, { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";

function Contacts() {
  const contacts = useSelector(store => store.contacts);
  const contactsTotal = contacts.length;

  return (
    <div>
      <Card.Header>
        <Card.Title>
          Contatos{" "}
          <span data-test={`total-${contactsTotal}`}>({contactsTotal})</span>
        </Card.Title>
        <ButtonLink
          bgColor="#6FB0FC"
          color="#fff"
          to="/create"
          dataTest="novo-contato"
        >
          Adicionar contato
        </ButtonLink>
      </Card.Header>
      <Card.Body>
        {contactsTotal < 1 && (
          <div data-test="sem-contatos">Você não tem contatos cadastrados</div>
        )}
        {contactsTotal > 0 &&
          contacts.map((contact, index) => (
            <Card.Contact key={index} contact={contact}>
              <Button bgColor="#ccc">Editar</Button>
              <Button bgColor="#ff9393">Deletar</Button>
            </Card.Contact>
          ))}
      </Card.Body>
    </div>
  );
}

export default Contacts;
