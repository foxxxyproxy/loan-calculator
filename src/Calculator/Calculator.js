import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "../UI/Dropdown";
import data from "../utils/data";

const Container = styled.div`
  width: 95%;
  max-width: 992px;
  margin: 0 auto;
`;
const Form = styled.form`
  padding: 4em;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: 4em;
  grid-gap: 1em;
`;

const Button = styled.button`
  background: ${(props) =>
    props.error ? "var(--light-blue)" : "var(--light-red)"};
  color: white;
  border: 0;
  padding: 1em 2em;
  min-width: 7em;
  font-size: 1rem;
  min-height: 4em;
  border-radius: 0.8em;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  :hover {
    opacity: 0.8;
  }
`;

const DropdownSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Calculator(props) {
  const [product, setProduct] = useState("");
  const [legal, setLegal] = useState("");
  const [error, setError] = useState("");

  function handleProductChange(e) {
    setProduct(e.target.value);
  }

  function handleLegalChange(e) {
    setLegal(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container className="calculator_container">
      <Form onSubmit={handleFormSubmit}>
        <DropdownSection className="dropdown-wrapper">
          <Dropdown
            type="product"
            value={product}
            onChange={handleProductChange}
            options={data.product}
          />
          <Dropdown
            type="legal"
            value={legal}
            onChange={handleLegalChange}
            options={data.legal}
          />
        </DropdownSection>

        {error ? (
          <Button type="submit"> Error </Button>
        ) : (
          <Button error type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default Calculator;
