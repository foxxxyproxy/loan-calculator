import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) =>
    props.error ? "var(--btn-background-error)" : "var(--btn-background)"};
  color: white;
  border: 0;
  padding: 1em 2em;
  min-width: 7em;
  font-size: 1rem;
  font-style: bold;
  min-height: 4em;
  border-radius: 0.8em;
  cursor: pointer;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.2);
  :hover {
    opacity: 0.8;
  }
`;

const FormButton = (props) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default FormButton;
