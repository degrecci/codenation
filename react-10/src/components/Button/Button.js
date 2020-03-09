import React from "react";
import styled from "styled-components";

function ButtonLink({ children, onClick, type, bgColor, color, dataTest }) {
  const Button = styled.button`
    background-color: ${bgColor || "transparent"};
    color: ${color || "#000"};
    border: none;
    border-radius: 3px;
    margin: 0;
    width: auto;
    overflow: visible;
    font-size: 15px;
    font-weight: 500;
    padding: 5px 10px;
    text-decoration: none;
    margin-left: 10px;
  `;

  return (
    <Button onClick={onClick} type={type} data-test={dataTest}>
      {children}
    </Button>
  );
}

export default ButtonLink;
