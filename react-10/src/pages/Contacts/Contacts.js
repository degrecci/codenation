import React from "react";
import { useSelector } from "react-redux";

import { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";

function Contacts() {
  const contacts = useSelector(store => store.contacts);

  return (
    <div>
      <Card.Header>
        <Card.Title>Contatos</Card.Title>
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
        {contacts.length < 1 && (
          <div data-test="sem-contatos">Você não tem contatos cadastrados</div>
        )}
        {contacts.length > 0 &&
          contacts.map((contact, index) => (
            <div key={index}>
              <p>
                <strong>{contact.name}</strong>
              </p>
              <p>{contact.email}</p>
            </div>
          ))}
      </Card.Body>
    </div>
  );
}

export default Contacts;
