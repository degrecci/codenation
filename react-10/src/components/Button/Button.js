import React from "react";
import styled from "styled-components";

function ButtonLink({ children, onClick, type, bgColor, color }) {
  const Button = styled.button`
    background-color: ${bgColor || "transparent"};
    color: ${color || "#000"};
    border: none;
    border-radius: 3px;
    margin: 0;
    width: auto;
    overflow: visible;
    font-size: 0.6em;
    font-weight: 500;
    padding: 5px 10px;
    text-decoration: none;
    margin-left: 10px;
  `;

  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
}

export default ButtonLink;
