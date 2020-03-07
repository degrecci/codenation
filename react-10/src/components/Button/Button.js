import React from "react";
import styled from "styled-components";

function Button({ children, onClick, type, color }) {
  const StyledButton = styled.button`
    background-color: ${color || "#57DA64"};
    color: #fff;
    border: none;
    border-radius: 3px;
    margin: 0;
    width: auto;
    overflow: visible;
    line-height: 0;
    font-size: 0.5em;
    font-weight: 500;
    height: 20px;
    padding: 13px;
  `;

  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
