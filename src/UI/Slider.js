import React from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--light-gray);
  //border-bottom: 0;
  //border-radius: 0.8em 0.8em 0 0;
  border-radius: 0.8em;
  padding: 0 1.5em;
  padding-top: 0.5em;
  overflow: hidden;

  & label {
    position: relative;
    font-size: 0.8em;
    z-index: 10;
    padding-bottom: 2px;
  }
`;

const Input = styled.input`
  position: relative;
  bottom: 0px;
  z-index: 10;
  //appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  width: ${(props) => (props.output ? "100px" : "100%")};
  padding: ${(props) => (props.output ? "2px 0" : "0")};
`;

const Slider = React.forwardRef((props, ref) => {
  const { type, value, onChange, min, max } = props;
  return (
    <SliderWrapper>
      <label htmlFor={type}> {`loan ${type}`} </label>
      <Input
        output
        type="number"
        name="result"
        value={value}
        onChange={onChange}
      />
      <Input
        ref={ref}
        id={type}
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </SliderWrapper>
  );
});

export default Slider;
