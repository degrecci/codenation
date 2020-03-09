import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ButtonLink({ children, to, type, bgColor, color, dataTest }) {
  const StyledLink = styled(Link)`
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
    <StyledLink to={to} type={type} data-test={dataTest}>
      {children}
    </StyledLink>
  );
}

export default ButtonLink;
