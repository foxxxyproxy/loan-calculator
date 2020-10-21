import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Dropdown from "../UI/Dropdown";
import data from "../../utils/data";
import Slider from "../UI/Slider";
import FormButton from "../UI/FormButton";
import Form from "../UI/Form";
import Container from "../UI/Container";
import { getValidationMessage, getOffer } from "../../utils/helpers";

const DropdownSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1em;
  }
`;

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  justify-content: space-between;
`;

function Calculator(props) {
  const minAmount = 5000;
  const minDuration = 3;

  const [product, setProduct] = useState("");
  const [legal, setLegal] = useState("");
  const [amount, setAmount] = useState(minAmount);
  const [duration, setDuration] = useState(minDuration);
  const [validation, setValidation] = useState("");
  const [interestRate, setInterestRate] = useState("");

  const [maxAmount, setMaxAmount] = useState(250000);
  const [maxDuration, setMaxDuration] = useState(36);

  //for managing inputs focus
  const productRef = useRef(null);
  const legalRef = useRef(null);
  const amountRef = useRef(null);
  const durationRef = useRef(null);

  useEffect(() => {
    setValidation("");
    setInterestRate("");
  }, [product, legal, amount, duration]);

  useEffect(() => {
    setMaxAmount(250000);
    setMaxDuration(36);
    if (product === "Equipment") {
      setMaxDuration(60);
    }
    if (product === "Equipment" && legal === "BV") {
      setMaxAmount(500000);
    }
  }, [product, legal]);

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
    }
    const offer = getOffer({ amount, duration, maxDuration });
    setInterestRate(offer);
  }

  return (
    <Container className="calculator-container">
      <Form onSubmit={handleFormSubmit}>
        <DropdownSection className="dropdown-wrapper">
          <Dropdown
            className="dropdown-wrapper__item"
            type="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            options={data.product}
            ref={productRef}
          />
          <Dropdown
            className="dropdown-wrapper__item"
            type="legal"
            value={legal}
            onChange={(e) => setLegal(e.target.value)}
            options={data.legal}
            ref={legalRef}
          />
        </DropdownSection>

        <SliderSection className="slider-wrapper">
          <Slider
            className="slider-wrapper__item"
            type="amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            ref={amountRef}
            min={minAmount}
            max={maxAmount}
            step={1000}
          />

          <Slider
            className="slider-wrapper__item"
            type="duration"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value, 10))}
            ref={durationRef}
            min={minDuration}
            max={maxDuration}
            step={1}
          />
        </SliderSection>

        {validation ? (
          <FormButton error type="submit" data-testid="button-error">
            {validation}
          </FormButton>
        ) : (
          <FormButton type="submit" data-testid="button-submit">
            {interestRate
              ? `Your interest rate: ${interestRate}%`
              : "Get offer"}
          </FormButton>
        )}
      </Form>
    </Container>
  );
}

export default Calculator;
