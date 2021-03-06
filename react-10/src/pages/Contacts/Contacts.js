import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button, { ButtonLink } from "../../components/Button";
import Card from "../../components/Card";

function Contacts() {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const contactsTotal = contacts.length;

  const deleteContact = index =>
    dispatch({ type: "DELETE_CONTACT", payload: { index } });

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
              <ButtonLink
                bgColor="#ccc"
                to={`/${index}/edit`}
                dataTest="editar"
              >
                Editar
              </ButtonLink>
              <Button
                bgColor="#ff9393"
                dataTest="apagar"
                onClick={() => deleteContact(index)}
              >
                Deletar
              </Button>
            </Card.Contact>
          ))}
      </Card.Body>
    </div>
  );
}

export default Contacts;
