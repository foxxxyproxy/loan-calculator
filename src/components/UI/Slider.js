import React from "react";
import styled from "styled-components";
import { Label } from "./Label";
import PropTypes from "prop-types";

const LabelRange = styled(Label)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--light-gray);
  height: 3.4em;
  border-radius: 0.8em;
  padding-top: 0.5em;
  margin-bottom: 2em;
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

  :focus {
    outline: 1px solid #e4e7ec;
  }

  ::-webkit-slider-runnable-track  {
    background: var(--light-blue);
    border-radius: 0 0 0.8em 0.8em;
    height: 0.5em;
    cursor: pointer;
  }

  ::-moz-range-track{
    background: var(--light-blue);
    border-radius: 0 0 0.8em 0.8em;
    height: 0.5em;
    cursor: pointer;
  }

  ::-webkit-slider-thumb {
    width: 1.2em;
    height: 1.2em;
    background: #fff;
    border:3px solid var(--light-blue);
    border-radius: 50%;
    cursor: pointer;
    appearance: none;
    position:relative;
    top:-60%;
  }

  ::-moz-range-thumb{
    width: 1.2em;
    height: 1.2em;
    background: #fff;
    border:3px solid var(--light-blue);
    border-radius: 50%;
    cursor: pointer;
    appearance: none;
    position:relative;
    top:-60%;
  }
`;

const HintPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: -1.2em;
  right: 0em;
  span {
    font-size: 0.8rem;
  }
`;

const Slider = React.forwardRef((props, ref) => {
  const { type, value, onChange, min, max, step, className } = props;
  return (
    <SliderWrapper className={className}>
      <Label htmlFor={type}> {`loan ${type}`} </Label>
      <Input
        output
        id={`${type}-output`}
        type="number"
        name="result"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step="1"
      />
      <LabelRange htmlFor={`${type}-output`}> {`output ${type}`} </LabelRange>
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

Slider.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.number,
  className: PropTypes.string,
};
