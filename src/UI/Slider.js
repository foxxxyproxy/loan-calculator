import React from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-gray);
  border-radius: 0.8em;
  padding-top: 1.5em;

  & label {
    position: relative;
    top: -1rem;
    left: 1.6rem;
    font-size: 0.8em;
  }
`;

const Input = styled.input`
  position: relative;
  bottom: -0.7em;
  z-index: 10;
  //appearance: none;
`;

function Slider(props) {
  const { type, value, onChange } = props;
  return (
    <SliderWrapper>
      <label htmlFor="amount"> {type} </label>
      <Input id="amount" type="range" value={value} onChange={onChange} />
    </SliderWrapper>
  );
}

export default Slider;
