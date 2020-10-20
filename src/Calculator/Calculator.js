import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Dropdown from "../UI/Dropdown";
import data from "../utils/data";
import Slider from "../UI/Slider";
import { getValidationMessage } from "../utils/helpers";

const Container = styled.div`
  width: 95%;
  max-width: 45em;
  margin: 0 auto;
`;
const Form = styled.form`
  padding-top: 4em;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: 4em;
  grid-gap: 0.5em;
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
  @media (max-width: 576px) {
    display: block;
  }
`;

function Calculator(props) {
  const [product, setProduct] = useState("");
  const [legal, setLegal] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [validation, setValidation] = useState("");

  const [maxAmount, setMaxAmount] = useState(250000);
  const [maxDuration, setMaxDuration] = useState(36);
  const minAmount = 5000;
  const minDuration = 12;

  const productRef = useRef(null);
  const legalRef = useRef(null);
  const amountRef = useRef(null);
  const durationRef = useRef(null);

  useEffect(() => {
    setValidation("");
  }, [product, legal, amount, duration]);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!product) {
      setValidation(getValidationMessage("product"));
      productRef.current.focus();
      return;
    }
    if (!legal) {
      setValidation(getValidationMessage("legal"));
      legalRef.current.focus();
      return;
    }
    if (!amount) {
      setValidation(getValidationMessage("amount"));
      amountRef.current.focus();
      return;
    }
    if (!duration) {
      setValidation(getValidationMessage("duration"));
      durationRef.current.focus();
      return;
    } else {
      //todo: calc offer
    }
  }

  return (
    <Container className="calculator_container">
      <Form onSubmit={handleFormSubmit}>
        <DropdownSection className="dropdown-wrapper">
          <Dropdown
            type="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            options={data.product}
            ref={productRef}
          />
          <Dropdown
            type="legal"
            value={legal}
            onChange={(e) => setLegal(e.target.value)}
            options={data.legal}
            ref={legalRef}
          />
        </DropdownSection>

        <Slider
          type="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          ref={amountRef}
          min={minAmount}
          max={maxAmount}
        />

        <Slider
          type="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          ref={durationRef}
          min={minDuration}
          max={maxDuration}
        />

        {validation ? (
          <Button type="submit"> {validation} </Button>
        ) : (
          <Button error type="submit">
            Get offer
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default Calculator;
