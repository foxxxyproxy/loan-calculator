import React from "react";
import styled from "styled-components";
import { Label } from "./Label";

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--light-gray);

  border-radius: 0.8em;
  padding-top: 0.5em;
`;

const Input = styled.input`
  position: relative;
  z-index: 10;
  border: 0;
  margin: 0;
  margin: 0 1.5rem;
  padding: 0;
  line-height: 1.2;
  width: 5em;
`;

const InputRange = styled(Input)`
  width 100%;
  padding:0;
  margin:0;
  appearance: none;

  ::-webkit-slider-runnable-track {
    background: var(--light-blue);
    border-radius: 0 0 0.8em 0.8em;
    height: 0.5em;
    cursor: pointer;
  }

  ::-webkit-slider-thumb {
    width: 1em;
    height: 1em;
    background: #fff;
    border:3px solid var(--light-blue);
    border-radius: 50%;
    cursor: pointer;
    appearance: none;
    position:relative;
    top:-50%;
  }
`;

const HintPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: -1em;
  right: 0em;
  span {
    font-size: 0.8rem;
  }
`;

const Slider = React.forwardRef((props, ref) => {
  const { type, value, onChange, min, max, step } = props;
  return (
    <SliderWrapper>
      <Label htmlFor={type}> {`loan ${type}`} </Label>
      <Input
        output
        type="number"
        name="result"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      <InputRange
        ref={ref}
        id={type}
        type="range"
        value={value}
        step={step}
        onChange={onChange}
        min={min}
        max={max}
      />
      <HintPanel>
        <span>
          {"max: "}
          {type === "amount"
            ? new Intl.NumberFormat("nl-NL", {
                style: "currency",
                currency: "EUR",
                maximumSignificantDigits: 2,
              }).format(max)
            : `${max} months`}
        </span>
      </HintPanel>
    </SliderWrapper>
  );
});

export default Slider;
