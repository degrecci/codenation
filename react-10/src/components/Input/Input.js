import React from "react";
import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 15px;
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 15px;
  color: #333;
`;

const Input = ({ label, type, name, onChange, value }) => (
  <Field>
    <StyledLabel>{label}</StyledLabel>
    <StyledInput type={type} name={name} onChange={onChange} value={value} />
  </Field>
);

export default Input;
