import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  padding: 4em;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  box-shadow: 2px 2px 5px -2px rgba(0, 0, 0, 0.2);
  background: var(--main-background-color);
  margin-bottom: 2em;
`;

const Form = (props) => {
  const { children, ...rest } = props;
  return <FormWrapper {...rest}>{children}</FormWrapper>;
};

export default Form;
