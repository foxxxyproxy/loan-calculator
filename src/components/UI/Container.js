import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 95%;
  max-width: 40em;
  margin: 2em auto;
`;

const Container = (props) => {
  const { children, ...rest } = props;
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
};

export default Container;
