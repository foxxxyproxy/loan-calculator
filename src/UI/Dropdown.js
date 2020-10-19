import React, { useRef } from "react";
import styled from "styled-components";
import dropdownIcon from "./dropdown-icon.svg";

const Select = styled.select`
  padding: 1.5em;
  padding-bottom: 1em;
  border-radius: 0.8em;
  font-size: 1rem;
  border: 1px solid var(--light-gray);
  appearance: none;
  cursor: pointer;
  background: url(${dropdownIcon});
  background-repeat: no-repeat;
  background-size: 0.8em 0.4em;
  background-position-x: calc(100% - 1em);
  background-position-y: 50%;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  & label {
    position: relative;
    top: 1.5rem;
    left: 1.6rem;
    font-size: 0.8em;
  }
`;
const Dropdown = React.forwardRef((props, ref) => {
  const { type, value, onChange, options } = props;
  return (
    <SelectWrapper className="dropdown-wrapper__item">
      <label htmlFor={type}>{type}</label>
      <Select ref={ref} id={type} value={value} onChange={onChange}>
        <option> Select {type}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </SelectWrapper>
  );
});

export default Dropdown;
